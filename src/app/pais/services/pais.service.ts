import { HttpClient, HttpParams } from '@angular/common/http'; // Es pot utilitzar després d'importar el HTTP a app.module.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'; // https://restcountries.eu/#api-endpoints-name

  get httpParams () {
    return new HttpParams() // Indiquem els paràmetres que vindran per paràmetre
      .set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) {  }

  buscarPais( termino: string ): Observable<Country[]> { // Haurem d'indicar que és tipus Observable perquè al fer return, el this.http.get retorna un Observable de tipus Country

    const url = `${this.apiUrl}/name/${termino}`; // Li haurem de passar dos valors per paràmetre el país que volem buscar. Consultar el link de apiUrl per veure la pàgina del rest utilitzat

    this.http.get( url );
    return this.http.get<Country[]>(url, {params: this.httpParams}) // Cridarem el mètode a por-pais.component.ts

  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`; // Li haurem de passar dos valors per paràmetre el país que volem buscar. Consultar el link de apiUrl per veure la pàgina del rest utilitzat

    this.http.get( url );
    return this.http.get<Country[]>(url, {params: this.httpParams}) // Cridarem el mètode a por-capital.component.ts
  }

  getPaisPorId( id: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`; 

    return this.http.get<Country[]>(url) // Cridarem el mètode a ver-pais.component.ts
  }

  buscarRegion( region: string ): Observable<Country[]> {

    

    const url = `${this.apiUrl}/region/${region}`;  

    return this.http.get<Country[]>(url, {params: this.httpParams}) // Cridarem el mètode a ver-pais.component.ts i li passem els params per paràmetre
  }


}
