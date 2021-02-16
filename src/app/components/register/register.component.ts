import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { PlayersService } from '../../services/players.service';
import { Location } from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import { 
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface Posicion {
	value: string;
    viewValue: string;
}

interface Conferencia {
	value: string;
    viewValue: string;
}

interface Ciudad {
	value: string;
    viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Team {
	abbreviation: string;
	name_team: string;
	conference: string;
	city: string;
	comentary: string;
}

export interface Player {
  id: number;
  first_name: string;
  height_feet: null | number;
  height_inches: null | number;
  last_name: string
  team: Team[];
  position: string;
  weight_pounds: null | number;
  fecha: Date;
  edad: number;
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegisterComponent implements OnInit, AfterViewInit {

 

  /*@ViewChild("inputname") myInputFieldName: ElementRef;
  @ViewChild("inputabre") myInputFieldAbre: ElementRef;*/

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  selectedValue: string;
  selectedValue2: string;
  selectedValue3: string;

  regexStr = '^[a-zA-Z0-9_]*$';

  @HostListener('keypress', ['$event']) onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }

  ngAfterViewInit() {
    /*this.myInputFieldName.nativeElement.focus();
    this.myInputFieldAbre.nativeElement.focus();*/
  }

  public birthdate: Date;
  public age: number;
  disabled = false;

  // Array where we are going to do CRUD operations    
  myItems: Team[] = new Array();    
  myPlayers: Player[] = new Array();   
  // Other variables    
  
  newItem: any = {};  
  newPlayer: any = {};    

  AddItem() {    
     this.myItems.push(    
       this.newItem    
     );    
     this.newItem = {};
     console.log(this.myItems);   
  }

  AddItemPlayer() {    
     this.myPlayers.push(    
       this.newPlayer    
     );    
     this.newPlayer = {};
     console.log(this.myPlayers);   
  }

  

  displayedColumns: string[] = ['abbreviation', 'name_team', 'conference', 'city', 'comentary', 'actions'];
  

  posiciones: Posicion[] = [
    {value: '0', viewValue: 'A'},
    {value: '1', viewValue: 'B'},
    {value: '2', viewValue: 'C'},
    {value: '3', viewValue: 'D'},
    {value: '4', viewValue: 'E'}
  ];

  conferencias: Conferencia[] = [
    {value: '0', viewValue: 'Este'},
    {value: '1', viewValue: 'Oeste'},
    {value: '2', viewValue: 'Sur'},
    {value: '3', viewValue: 'Norte'}    
  ];

  ciudades: Ciudad[] = [
    {value: '0', viewValue: 'Denver'},
    {value: '1', viewValue: 'Minneapolis'},
    {value: '2', viewValue: 'Oklahoma City'},
    {value: '3', viewValue: 'Portlan'},
    {value: '4', viewValue: 'Salt Lake City'},
    {value: '5', viewValue: 'Dallas'},
    {value: '6', viewValue: 'Houston'},
    {value: '7', viewValue: 'Memphis'},
    {value: '8', viewValue: 'New Orleans'},
    {value: '9', viewValue: 'San Antonio'},
    {value: '10', viewValue: 'San Francisco'},
    {value: '11', viewValue: 'Los Ángeles'},
    {value: '12', viewValue: 'Phoenix'},
    {value: '13', viewValue: 'Sacramento'},
    {value: '14', viewValue: 'Boston'},
    {value: '15', viewValue: 'New York'},
    {value: '16', viewValue: 'Filadelfia'},
    {value: '17', viewValue: 'Toronto'},
    {value: '18', viewValue: 'Chicago'},
    {value: '19', viewValue: 'Cleveland'},
    {value: '20', viewValue: 'Detroit'},
    {value: '21', viewValue: 'Indianápolis'},
    {value: '22', viewValue: 'Milwaukee'},
    {value: '23', viewValue: 'Atlanta'},
    {value: '24', viewValue: 'Charlotte'},
    {value: '25', viewValue: 'Miami'},
    {value: '26', viewValue: 'Orlando'},
    {value: '27', viewValue: 'Washington'}
  ];



  constructor(private _formBuilder: FormBuilder,
              private playersService: PlayersService,
              private _snackBar: MatSnackBar,
              private location: Location) {
   
  }

  ngOnInit(): void {

  	this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      apellido: ['', Validators.required],
      altPul: ['', Validators.maxLength(2)],
      altPies: new FormControl(),
      peso: new FormControl(),
      fecha: new FormControl(new Date()),
      edad: new FormControl(),
      posicion: ['', Validators.required]
      //hideRequiredControl: new FormControl()
    });

    this.secondFormGroup = this._formBuilder.group({
      abbreviation: new FormControl(),
      conference: new FormControl(),
      comentary: new FormControl(),
      name_team: new FormControl(),
      city: new FormControl()
    });


  }


  // lo referente a la fecha y edad
  showAge: any;

  CalculateAge() {
    if (this.birthdate) {
      var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
    this.disabled = true;
  }


  // Mensaje
  openSnackBar() {
    this._snackBar.open('Registro Exitoso!!', 'Ok', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

   
  }


  onRegresar() {
    this.location.back();
  }

}

