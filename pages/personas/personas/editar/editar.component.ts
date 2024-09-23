import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService, Persona } from '../personas.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  persona: Persona = {
    idPersonas: 0,
    perNombre: '',
    perApellido: '',
    perTelefono: '',
    perDomicilio: '',
    perMail: '',
    localidadID: 0,
    rolID: 0
  };

  constructor(
    private personasService: PersonasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.personasService.getPersona(id).subscribe(data => {
      this.persona = data;
    });
  }

  editarPersona(): void {
    this.personasService.updatePersona(this.persona.idPersonas, this.persona).subscribe(() => {
      this.router.navigate(['/personas/listar']);
    });
  }
}

