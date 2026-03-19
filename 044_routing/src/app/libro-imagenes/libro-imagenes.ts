import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-libro-imagenes',
  imports: [],
  templateUrl: './libro-imagenes.html',
  styleUrl: './libro-imagenes.css',
})
export class LibroImagenes {

  idLibro: number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.parent?.paramMap
      .subscribe((params: ParamMap)=>{
        this.idLibro = +params.get('id')!;
      });
  }
}
