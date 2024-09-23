import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { RolesService } from 'src/app/biblioteca/services/roles.service';

@Component({
  selector: 'app-roles-cargar',
  templateUrl: './roles-cargar.component.html',
  styleUrls: ['./roles-cargar.component.css']
})
export class RolesCargarComponent {
  rol = {
    rolNombre: '',
  };

  constructor(
    private rolesService: RolesService,
    private router: Router,
  ){}

  ngOnInit(): void {}

  onSubmit(): void {
    this.rolesService.createRoles(this.rol).subscribe((data) =>{
      console.log('Rol creado con exito', data);
      this.router.navigateByUrl('/biblioteca/roles-cargar');
    },
  (error) => {
    console.error('Error al agregar rol', error)
  }
  );  
  }
}

