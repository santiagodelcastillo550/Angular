import { Component } from '@angular/core';
import { LIBROS } from '../mocks'
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-libro-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css',
})
export class LibroLista {

  libros = LIBROS;

  ngOnInit(){
    this.libros = LIBROS;
  }
}
