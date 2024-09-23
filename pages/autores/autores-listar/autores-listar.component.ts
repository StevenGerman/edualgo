import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor, AutoresService } from 'src/app/biblioteca/services/autores.service';


@Component({
  selector: 'app-autores-listar',
  templateUrl: './autores-listar.component.html',
  styleUrls: ['./autores-listar.component.css']
})
export class AutoresListarComponent {
  
  autores: any[] = [];

  constructor(private autoresService : AutoresService, 
    private router: Router  ){};

  ngOnInit(){this.ListAutores();}
 
  editarAutor(id: number): void {
    this.router.navigate([`/biblioteca/autores-editar/${id}`]);
  }
  navigateToCreate(){
    
    this.router.navigateByUrl('/biblioteca/autores-cargar');
    
  }
 
  ListAutores(): void {
    this.autoresService.getAutor().subscribe(
      (data: Autor[]) => {
          this.autores = data;
          console.log(this.autores); 
      },
      (error) => {
        console.error('Error al obtener autores:', error);
      }
    );
  }
}