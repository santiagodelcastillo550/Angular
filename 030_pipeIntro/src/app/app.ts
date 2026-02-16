import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  fecha1 = new Date(1988, 3, 15); // 15 de Abril de 1998

  idFormatoFecha = true; // true == shortDate; false == fullDate
  get formatoFecha(){
    return this.idFormatoFecha ? 'shortDate' : 'fullDate';
  }
  
  cambiarFormatoFecha(){
    this.idFormatoFecha = !this.idFormatoFecha;
  }
}
