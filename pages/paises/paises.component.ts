import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises(): void {
    this.paisService.getPaises().subscribe(
      (data: any[]) => {
        this.paises = data;
        console.log(this.paises); 
      },
      (error) => {
        console.error('Error al obtener países:', error);
      }
    );
  }
}

