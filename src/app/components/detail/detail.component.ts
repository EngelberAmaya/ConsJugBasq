import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PlayersService } from '../../services/players.service';
import { Player, PlayersResponse, Team } from '../../interfaces/players';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  

  constructor(private activatedRoute: ActivatedRoute,
  			  private location: Location,
              private router: Router,
              private playersService: PlayersService) { 
  	 
  }

  ngOnInit(): void {

  

  }

}
