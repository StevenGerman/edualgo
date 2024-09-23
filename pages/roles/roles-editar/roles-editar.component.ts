import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { RolesService } from 'src/app/biblioteca/services/roles.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'jquery';

@Component({
  selector: 'app-roles-editar',
  templateUrl: './roles-editar.component.html',
  styleUrls: ['./roles-editar.component.css']
})
export class RolesEditarComponent implements OnInit{ 
  elID:any;
  formRoles: FormGroup

  constructor(
    public formulario:FormBuilder,
    private rutaactiva:ActivatedRoute,
    private rolesService:RolesService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    
  ) {
    this.formRoles = this.formulario.group({
    rolNombre: [''],
  });
  }
  ngOnInit(): void {
    this.elID=this.rutaactiva.snapshot.paramMap.get('id');
    this.formRoles = this.formulario.group({
      rolNombre: [''],
    });

    this.rolesService.getRolesById(this.elID).subscribe((respuesta) =>{
      if (respuesta && respuesta[0]) {
        this.formRoles.patchValue({
          rolNombre: respuesta[0]['carNombre'],
        });
      }
    });
}

traerInfo(): void{
  console.log(this.elID);
  console.log(this.formRoles.get('rolNombre')?.value);

  const idRol = this.elID;
  const nuevoNombre = this.formRoles.get('rolNombre')?.value;


  this.rolesService.updateRol(idRol, nuevoNombre)
  .subscribe(
    respuesta => {
      console.log('Registro editado exitosamente:', respuesta);
      this.router.navigateByUrl('/biblioteca/roles-listar');
    },
    error => {
      console.error('Error al editar el registro:', error);
    }
  )
}
  Cancelar(){
    this.router.navigateByUrl('/biblioteca/roles-listar');
  }
}
