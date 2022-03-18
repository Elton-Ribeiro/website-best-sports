import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather => this.weather = weather);
  }
}


// When Angular needs to create a new instance of the repository, it will inspect the class and see that it
// needs a StaticDataSource object to invoke the ProductRepository constructor and create a new object.
// The repository constructor calls the data source’s getProducts method and then uses the subscribe
// method on the Observable object that is returned to receive the product data. See Chapter 23 for details of
// how Observable objects work.