import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LIBROS } from '../mocks';
import { LibroService } from '../libro';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-libro-lista',
  imports: [CommonModule],
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css',
})
export class LibroLista {

  libros!: Libro[];

  constructor(private libro: LibroService){

  }

  ngOnInit(){
    this.libros = this.libro.getLibros();
  }
}
