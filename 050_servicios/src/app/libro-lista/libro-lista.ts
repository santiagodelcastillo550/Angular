import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Libro } from '../libro.model';
import { Logger } from '../logger';
import { LibroObservableService } from '../libro-observable.service';

@Component({
  selector: 'app-libro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libro-lista.html',
  styleUrls: ['./libro-lista.css'],
})
export class LibroLista {

  libros: Libro[] = [];
  
  observableSubs!: Subscription;

  constructor(
    private logger: Logger,
    private libroObservableService: LibroObservableService
  ) {}

  ngOnInit() {
    this.observableSubs = this.libroObservableService.getLibros()
      .subscribe(
        (libros: Libro[]) => {
          this.logger.log("Se imprime lo recibido de la secuencia: " + libros.map(l => l.titulo).join(', '));
          this.libros = libros;
        },
        (error: any) => console.log(error),
        () => console.log("Observable completado")
      );
  }

  ngOnDestroy() {
    if (this.observableSubs) {
      this.observableSubs.unsubscribe();
    }
  }
}
