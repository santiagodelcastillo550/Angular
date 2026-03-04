import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Libro } from '../libro';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-biblioteca',
  imports: [CommonModule],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.css',
})
export class Biblioteca {
  libros: Libro[] =[{
    "id": 1,
    "titulo": "El Quijote",
    "autor": "Cervantes"
  },{
    "id": 2,
    "titulo": "Hamlet",
    "autor": "Shakespeare"
  }];

  ngOnInit(){
    this.libros = LIBROS;
  }
}
