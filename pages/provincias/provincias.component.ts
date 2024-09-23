import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../services/provincias.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  provincias: any[] = [];

  constructor(private ProvinciaService: ProvinciaService) {}

  ngOnInit(): void {
    this.obtenerProvincias();
  }

  obtenerProvincias(): void {
    this.ProvinciaService.getProvincias().subscribe(
      (data: any[]) => {
        this.provincias = data;
        console.log(this.provincias);
      },
      (error) => {
        console.error('Error al obtener provincias:', error);
      }
    );
  }
}

