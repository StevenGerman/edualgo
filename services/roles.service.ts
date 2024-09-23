import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private apiUrl =  'https://escuelasagarna.com/APIBiblioteca/roles.php';

  constructor(private http: HttpClient){}
  
  getRoles(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getRolesById(id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }  

  createRoles(data: any){
    return this.http.post(`${this.apiUrl}`, data);
  }

  deleteRol(id: number){
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  updateRol(id: number, nuevoNombre: string){
    const url = `${this.apiUrl}`;
    const body = {idRol: id, rolNombre: nuevoNombre};
    return this.http.put(url, body);
  }
}
