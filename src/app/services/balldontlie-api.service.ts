import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BalldontlieApiService {

  constructor(private http: HttpClient) { }

  getPlayers(players: string) {
    const urlGet = `${environment.urlBallDontLie}${players}`;
    return this.http.get<BalldontlieApiService>(urlGet);
  }

}