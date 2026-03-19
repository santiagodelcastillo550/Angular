import { Routes } from '@angular/router';
import { LibroLista } from './libro-lista/libro-lista';
import { AutorLista } from './autor-lista/autor-lista';
import { LibroDetalle } from './libro-detalle/libro-detalle';
import { NotFound } from './not-found/not-found';
import { LibroImagenes } from './libro-imagenes/libro-imagenes';
import { LibroOpiniones } from './libro-opiniones/libro-opiniones';

export const routes: Routes = [
  { path: 'libros', component: LibroLista },
  { path: 'autores', component: AutorLista },

  {
    path: 'libros/:id', component: LibroDetalle,
    children: [
      { path: 'imagenes', component: LibroImagenes },
      { path: 'opiniones', component: LibroOpiniones },
      { path: '', redirectTo: 'imagenes', pathMatch: 'full' },
      { path: '**', component: NotFound }
    ]
  },

  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: '**', component: NotFound }
];
