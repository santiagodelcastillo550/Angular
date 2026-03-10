import { Routes } from '@angular/router';
import { LibroLista } from './libro-lista/libro-lista';
import { AutorLista } from './autor-lista/autor-lista';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: 'libros', component: LibroLista },
  { path: 'autores', component: AutorLista },
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: '**', component: NotFound }
];
