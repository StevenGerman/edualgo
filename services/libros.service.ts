import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  idLibro?: String;
  libTitulo: String;
  libNotaContenido?: String;
  libAnio: String;
  SigTopograficaID: String;
  AutorID: String;
  EditorialID: String;
  MateriaID: String;
}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'https://escuelasagarna.com/APIBiblioteca/libros.php';

  constructor(private clienteHttp: HttpClient) { }

  getLibros() {
    return this.clienteHttp.get(this.apiUrl);
  }
  
  /*
  getLibroById(id: number): Observable<Libro> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Libro>(url);
  }

  updateLibro(libro: Libro): Observable<any> {
    const url = `${this.apiUrl}/${libro.idLibro}`;
    return this.http.put(url, libro);
  }
    */
}
