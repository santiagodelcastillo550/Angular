import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  standalone: true,
  imports: [],
  templateUrl: './compo1.html',
  styleUrls: ['./compo1.css'],
})
export class Compo1 {
    texto: string = "";

    saludar(){
      
      this.texto = "Hola mundo en compo1";
    
    }

}
