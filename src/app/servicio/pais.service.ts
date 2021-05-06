import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  paises: any[]=[];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://restcountries.eu/rest/v2/region/americas').subscribe((data: any) => {
      data.forEach(element => {
        this.paises.push(element)
      });
    });
  }

  getPaises() {
    return this.paises;
  }
}
