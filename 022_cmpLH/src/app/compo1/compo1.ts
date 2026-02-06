import { Component, OnInit, SimpleChanges, Input, OnChanges, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compo1.html',
  styleUrl: './compo1.css',
})
export class Compo1 {

  @Input() entradaHijo: string = "";
  contador: number = 0;
  constructor(){}
  ngOnInit(){
    this.mostrar("pasa por ngOnInit");
  }
  ngOnChanges(cambios: SimpleChanges){
    for(let propiedad in cambios){
      let cambio = cambios[propiedad];
      let actual = JSON.stringify(cambio.currentValue);
      let anterior = JSON.stringify(cambio.previousValue);
      this.mostrar("Pasa por ngOnChanges. Propiedad("+ propiedad +") valor actual ("+ actual +") valor anterior("+ anterior +")");
    }
  }
  ngDoCheck(){
    this.mostrar("pasa por ngDoCheck");
  }
  ngAfterContentInit(){
    this.mostrar("pasa por ngAfterContentInit");
  }
  ngAfterContentChecked(){
    this.mostrar("pasa por ngAfterContentChecked");
  }
  ngAfterViewInit(){
    this.mostrar("pasa por ngAfterViewInit");
  }
  ngAfterViewChecked(){
    this.mostrar("pasa por ngAfterViewChecked");
  }
  public mostrar(texto: string){
    this.contador +=1;
    console.log(this.contador + " - " + texto);
  }
}
