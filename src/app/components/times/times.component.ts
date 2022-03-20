import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Teams } from 'src/app/interfaces/teams';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})

export class TimesComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];

  teams$: Observable<Teams> | undefined;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
  }

  search(data: string) {
    this.teams$ = this.teamsService.getTeams();
  }
}
// export class TimesComponent implements OnInit {

//   //private playersUrl: string = 'https://www.balldontlie.io/api/v1/players';

//   // public getAllPlayers(): Observable<Players> {
//   //   return this.http.get<Players[]>(this.playersUrl)
//   // };