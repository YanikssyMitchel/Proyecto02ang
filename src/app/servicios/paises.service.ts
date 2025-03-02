import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  region: string;
  population: number;
  capital: string;
}

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los países
  ObtenerPaises(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  // Método para buscar un país por nombre
  BuscarPais(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${name}`);
  }


  obtenerPaisesporRegion(region: string): Observable<Country[]> {
    const regionUrl = `https://restcountries.com/v3.1/region/${region}`;
    return this.http.get<Country[]>(regionUrl);
  }
  
}
