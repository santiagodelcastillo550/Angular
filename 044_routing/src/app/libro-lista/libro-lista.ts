import { Component } from '@angular/core';
import { LIBROS } from '../mocks'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css',
})
export class LibroLista {

  libros = LIBROS;

  ngOnInit(){
    this.libros = LIBROS;
  }
}
