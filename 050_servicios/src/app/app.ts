import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroLista } from './libro-lista/libro-lista';
import { Logger } from './logger';
import { LibroService } from './libro';
import { LibroObservableService } from './libro-observable.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LibroLista],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [Logger, LibroService, LibroObservableService]
})
export class App {
  protected readonly title = signal('050_servicios');
}
