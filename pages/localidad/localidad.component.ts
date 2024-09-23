import { Component, OnInit } from '@angular/core';
import { LocalidadService } from '../../services/localidad.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  localidades: any[] = [];

  constructor(private localidadService: LocalidadService) {}

  ngOnInit(): void {
    this.obtenerLocalidades();
  }

  obtenerLocalidades(): void {
    this.localidadService.getLocalidades().subscribe(
      (data: any[]) => {
        this.localidades = data;
        console.log(this.localidades); 
      },
      (error) => {
        console.error('Error al obtener localidades:', error);
      }
    );
  }
}
