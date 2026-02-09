import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = '029 dirNgmezcla';

  mostrar = false;
  numeros: number[] = [1,2,3,4,5,6];
  pares: boolean = true;
  impares: boolean = true;
  colorPar = 'blue';
  colorImpar = 'red';
  clActividad(valor: boolean){
    let classes = {
      activo: valor,
      inactivo: !valor
    };
    return classes;
  }
}
