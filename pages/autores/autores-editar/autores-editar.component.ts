import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService, Autor } from 'src/app/biblioteca/services/autores.service';

@Component({
  selector: 'app-autores-editar',
  templateUrl: './autores-editar.component.html',
  styleUrls: ['./autores-editar.component.css']
})
export class AutoresEditarComponent implements OnInit {
  autor: Autor = {
    idAutor: 0,
    autNombre: '',
    autApellido: '',
    autFecNac: '',
    autBio: '',
    autFecDes: ''
  };

  constructor(
    private autoresService: AutoresService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del autor desde la URL
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    if (id) {
      // Llamar al servicio para obtener los detalles del autor por ID
      this.autoresService.getAutorById(id).subscribe(data => {

        console.log('Datos del autor recibidos:', data); 
        this.autor = data;
      }, error => {
        console.error('Error al obtener el autor:', error);
      });
    }
  }

  onSubmit(): void {
    this.editarAutor();
  }

  editarAutor(): void {
    // Llamar al servicio para actualizar la información del autor
    this.autoresService.editAutor(this.autor).subscribe({
      next: () => {
        // Navegar a la lista de autores después de la actualización
        this.router.navigate(['/biblioteca/autores-listar']);
      },
      error: (err) => {
        console.error('Error al editar el autor:', err);
      }
    });
  }
  
  Cancelar(){
    this.router.navigateByUrl('/biblioteca/autor-listar');
  }
}
