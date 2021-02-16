//import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';

import {AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PlayersService } from '../../services/players.service';
import { Player, Datos } from '../../interfaces/players';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PageEvent} from '@angular/material/paginator';
import { Location } from '@angular/common';

export interface UserData {
  id: number;
  first_name: string;
  height_feet: null | number;
  height_inches: null | number;
  last_name: string
  team: Team[];
  position: string;
  weight_pounds: null | number;
}


export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

/** Constants used to fill up our data base. */
/*const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];*/


@Component({
  selector: 'app-data-players',
  templateUrl: './data-players.component.html',
  styleUrls: ['./data-players.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataPlayersComponent implements AfterViewInit  {

  //@Input() players: Player[];
  expandedElement: Player | null;
  players: Player[] = [];

  //length = 0;
  pageSize = 25;
  pageIndex = 1;

  total: any = {};

  handlePageEvent(event: PageEvent) {
    //this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  columnsToDisplay: string[] = ['id', 'first_name', 'last_name', 'height_inches', 'height_feet', 'position', 'weight_pounds'];
  dataSource: MatTableDataSource<UserData>;

 

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  @ViewChild(MatSort) set MatSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  ngAfterViewInit() {
    

  }

  constructor(private playersService: PlayersService,
              private router: Router,
              private location: Location) { 
// Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.players);
    
    this.allPlayers();
    //this.length = this.total.total_pages;

 }

 getDefault(column: string): string {
   return column !== null ? column : '-';
 }


startView(player: Player){
  this.router.navigate(['/player', player.id ]);
}

 allPlayers(event?: any){

    this.playersService.getAllPlayers()
      .subscribe( resp => {
        console.log('players', resp);

        if (resp.data.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.players.push( ...resp.data);

        this.total = resp.meta;
        console.log(this.total);

        if (event) {
          event.target.complete();
        }
        
      });
    
  }


 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
  	
  }


  onRegresar() {
    this.location.back();
  }

  
}


/*function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}*/