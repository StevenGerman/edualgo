import { Component, OnInit } from '@angular/core';
import { data, error } from 'jquery';
import { RolesService } from 'src/app/biblioteca/services/roles.service';

@Component({
  selector: 'app-roles-listar',
  templateUrl: './roles-listar.component.html',
  styleUrls: ['./roles-listar.component.css']
})
export class RolesListarComponent implements OnInit{
  roles: any[] = [];
  searchTerm: string = '';

  constructor(private rolesService: RolesService){}

  ngOnInit(): void {
    this.getRoles();

  }

  getRoles(): void {
    this.rolesService.getRoles().subscribe(
      (data) => {
        this.roles = data;
      },
    (error) => {
      console.error('Error al obtener Roles', error);
    }
  );
}

  editRol(roles: any): void {
    //this.router.navigate(['/cargar-carrera', carreras.idCarreras])
  }

  deleteRol(rol: any): void {
    if (confirm('¿Estas seguro de que quieres eliminar este rol')) {
      this.rolesService.deleteRol(rol.idRol).subscribe(
        (data) => {
          console.log('Rol eliminado con exito', data);
          //Actualiza la lista de carrearas despues de la eliminacion 
          this.getRoles();
        },
        (error) => {
          console.error('Error al eliminar rol', error);
        }
      );
      
    }
  }
}
