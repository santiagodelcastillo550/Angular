import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  imports: [],
  template: `
    <p>
      compo1 works!
    </p>
    <div>
      <button (click)="saludar()">Saludar</button>

      <h1> {{ texto }}</h1>
    </div>
  `,
  styleUrl: './compo1.css',
})
export class Compo1 {

  texto: string="";

  saludar(){

    this.texto = "Hola mundo en compo1";
  }
}
