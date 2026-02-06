import { Component} from '@angular/core';
import { Operaciones } from './operaciones';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  title= "cmpTest";
  res1:number = 0;
  res2:number = 0;
  res3:number = 0;
  res4:number = 0;
  ngOnInit(){
    let operaciones = new Operaciones();
    this.res1 = operaciones.sumar(3,5);
    this.res2 = operaciones.restar(9,5);
    this.res3 = operaciones.multiplicar(5,8);
    this.res4 = operaciones.dividir(12,4);
  }
}
