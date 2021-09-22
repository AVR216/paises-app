import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // tslint:disable-next-line: no-inferrable-types
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCapital( termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  obtenerInfoPais( id : string ): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }
}
