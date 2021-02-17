import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { PlayersResponse, Player, Team } from '../interfaces/players';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
	'x-rapidapi-key': apiKey
});



@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  page = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
  	query = apiUrl + query;
  	return this.http.get<T>(query, { headers });
  }


  getAllPlayers(){

    this.page++;
  	
  	return this.ejecutarQuery<PlayersResponse>(`/players?page=${this.page}`);
  }


  
 

}

