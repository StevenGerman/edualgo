import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

import { LibrosService, Libro } from 'src/app/biblioteca/services/libros.service'; 



@Component({
  selector: 'app-libros-agregar',
  templateUrl: './libros-agregar.component.html',
  styleUrls: ['./libros-agregar.component.css']
})

export class LibrosAgregarComponent implements OnInit{

  formularioLibros: FormGroup;

  constructor(
    public form:FormBuilder,
    private servicioLibros:LibrosService

  ){}

  ngOnInit(): void {
    this.formularioLibros = this.form.group({
        libTitulo : [''],
        
    })
  }


}


