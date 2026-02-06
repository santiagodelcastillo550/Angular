import { Component, Input, Output, EventEmitter, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-compo1',
  standalone: true,
  templateUrl: './compo1.html',
  styleUrls: ['./compo1.css']
})
export class Compo1 {

  @Input() valor1 = '0'; 
  @Input() valor2 = '0'; 
  @Output() envRes = new EventEmitter<number>(); 
  
  get n1() { 
    return parseFloat(this.valor1); 
  } 
  get n2() { 
    return parseFloat(this.valor2); 
  } 
  suma() { 
    this.envRes.emit(this.n1 + this.n2); 
  } 
  resta() { 
    this.envRes.emit(this.n1 - this.n2); 
  } 
  multiplica() { 
    this.envRes.emit(this.n1 * this.n2); 
  } 
  divide() { 
    this.envRes.emit(this.n1 / this.n2); 
  }
}
