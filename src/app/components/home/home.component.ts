import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlBanner = './assets/_img/banner-dwyane-wade.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
