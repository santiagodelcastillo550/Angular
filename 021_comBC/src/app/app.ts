import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Compo1 } from './compo1/compo1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Compo1],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  valor1: string = '10';
  valor2: string = '20';
  resultadoP: number= 0;
  captaResultado(event:number){
    this.resultadoP = event;
  }
}
