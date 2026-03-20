import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroLista } from './libro-lista/libro-lista';
import { Logger } from './logger';
import { LibroService } from './libro';

@Component({
  selector: 'app-root',
  imports: [LibroLista],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [Logger, LibroService]
})
export class App {
  protected readonly title = signal('050_servicios');
}
