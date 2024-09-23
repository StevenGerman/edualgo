import { Component, OnInit } from '@angular/core';
import { LibrosService, Libro } from '../../services/libros.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-libro',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibroComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    
  }
         
    
  }

