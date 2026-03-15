import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Routes } from '@angular/router';
import { LibroLista } from './libro-lista/libro-lista';
import { LibroDetalle } from './libro-detalle/libro-detalle'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('044_routing');
}
