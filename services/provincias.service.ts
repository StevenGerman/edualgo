import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private apiUrl = 'https://escuelasagarna.com/APIBiblioteca/obtenerProvincias.php';

  constructor(private http: HttpClient) { }

  getProvincias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

