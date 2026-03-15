import { Routes } from '@angular/router';
import { LibroLista } from './libro-lista/libro-lista';
import { AutorLista } from './autor-lista/autor-lista';
import { LibroDetalle } from './libro-detalle/libro-detalle';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: 'libros', component: LibroLista },
  { path: 'autores', component: AutorLista },
  { path: 'libros/:id', component: LibroDetalle },
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: '**', component: NotFound }
];
