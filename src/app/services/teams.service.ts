import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teams } from '../interfaces/teams';

@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Teams> {
    return this.http.get<Teams>(`${environment.urlBallDontLie}/teams/`);
  }
 
}
