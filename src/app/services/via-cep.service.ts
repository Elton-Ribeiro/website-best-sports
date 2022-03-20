import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ViaCEP } from '../models/via-cep';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    const urlGet = `${environment.urlViaCEP}${cep}/json/`;
    return this.http.get<ViaCEP>(urlGet);
  }
  
}