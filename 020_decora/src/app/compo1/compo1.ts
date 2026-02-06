import { Component,Attribute, HostListener } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.html',
  styleUrls: ['./compo1.css'],
  standalone: true
})
export class Compo1 {

  contaClick: number = 0;
  contaOver: number = 0;

  constructor( @Attribute('miAtributo') atributo: string) {
    console.log(atributo);
  }
  @HostListener('click', ['$event'])
  onHostClick(event: Event){
    console.log("click en app " + event);
    this.contaClick += 1;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: Event){
    console.log("mouseover" + event);
    this.contaOver += 1;
  }

}
