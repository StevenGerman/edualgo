import { Component, OnInit } from '@angular/core';
import { PersonasService, Persona } from '../personas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {
    this.personasService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  deletePersona(id: number): void {
    this.personasService.deletePersona(id).subscribe(() => {
      this.personas = this.personas.filter(persona => persona.idPersonas !== id);
    });
  }
}

