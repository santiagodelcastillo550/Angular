import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LIBROS } from '../mocks';
import { Libro } from '../libro.model';


@Component({
  selector: 'app-libro-detalle',
  imports: [],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css',
})
export class LibroDetalle {
  libro!: Libro;

  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = Number(params.get('id') ?? 0);
        this.libro = LIBROS.find(item => item.id === id)!;
      });
  }
}
