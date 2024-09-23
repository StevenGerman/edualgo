import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService, Persona } from '../personas.service';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent {
  nuevaPersona: Persona = {
    idPersonas: 0,
    perNombre: '',
    perApellido: '',
    perTelefono: '',
    perDomicilio: '',
    perMail: '',
    localidadID: 0,
    rolID: 0
  };

  constructor(private personasService: PersonasService, private router: Router) {}

  agregarPersona(): void {
    this.personasService.addPersona(this.nuevaPersona).subscribe(() => {
      this.router.navigate(['/personas/listar']);
    });
  }
}

