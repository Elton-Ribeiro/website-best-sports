import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Players } from 'src/app/models/players';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  //private playersUrl: string = 'https://www.balldontlie.io/api/v1/players';

  // public getAllPlayers(): Observable<Players> {
  //   return this.http.get<Players[]>(this.playersUrl)
  // };

  constructor() { }

  ngOnInit(): void {
  }

}