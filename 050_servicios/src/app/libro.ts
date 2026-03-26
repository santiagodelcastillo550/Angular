import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { LIBROS } from './mocks';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibroService {

  constructor(private logger: Logger) {}

  getLibros(): Promise<Libro[]>{
    return new Promise<Libro[]>((resolve, reject) =>{
      this.logger.log("Inicio ejecutor (Promise de LibroService.getLibros())");

      setTimeout(() => {
        this.logger.log("Fin ejecutor (Promise de LibroService.getLibros())");
        resolve(LIBROS);
      }, 5000)
    });
  }
}
