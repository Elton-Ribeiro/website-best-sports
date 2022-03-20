import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> { //O método getWeather não retorna os dados de clima, o 'observable' o faz.
    const options = new HttpParams()
      .set('units', 'metric') //units - standard, metric, and imperial .
      .set('q', city)
      .set('appId', environment.apiKey);

    return this.http.get<Weather>(environment.apiUrl +
      'weather', { params: options });
  }
}

// o método 'getWeather' usa o método 'get' do serviço HttpClient que aceita dois parâmetros:
// 1º - O 'endpoint' da API do site OpenWeather que está no objeto 'enviroment.ts'
// com a propriedade de nome 'apiUrl'
// 2º - Objeto 'options' é usado para passar uma configuração adicional para a requisação (parâmetros de 
// busca com a propriedade 'params').
// Usamos o construtor do objeto HttpParams e chamamos o método 'set' para cada busca que queremos adicionar na URL
// nesse caso o parâmetro 'q' para o nome da cidade, e 'appId' para o token da API  que está no objeto 'environment'
//
// "q" -- dever ser 'query'
// City name, state code and country code divided by comma, 
// https://openweathermap.org/current


// We used the set method to create query parameters because the
// HttpParams object is immutable. Calling the constructor for each
// parameter that you want to pass will throw an error.