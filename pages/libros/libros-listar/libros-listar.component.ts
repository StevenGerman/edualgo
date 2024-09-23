import { Component, OnInit } from '@angular/core';
import { Libro, LibrosService } from 'src/app/biblioteca/services/libros.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-libros-listar',
  templateUrl: './libros-listar.component.html',
  styleUrls: ['./libros-listar.component.css']
})
export class LibrosListarComponent implements OnInit {
  
  Libros:any; // Inicializa el array de libros
  errorMessage: string = ''; // Mensaje de error para mostrar en la UI

  constructor(private servicioLibros: LibrosService) {}

  ngOnInit(): void {
    this.servicioLibros.getLibros().subscribe((respuesta) =>{
      console.log(respuesta);
      this.Libros= respuesta;
    });// Carga los libros al inicializar el componente
  }

  
}
