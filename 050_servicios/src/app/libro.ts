import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { LIBROS } from './mocks';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibroService {

  constructor(private logger: Logger) {}

  getLibros(): Libro[] {
    this.logger.log("Llamada realizada sobre LibroService.getLibros");
    return LIBROS;
  }
}
