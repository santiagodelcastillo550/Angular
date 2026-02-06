import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
  title = '023 dirNgClass';
  fondoAmarillo=false;
  letraGrande=false;
  checkFondo(){
    this.fondoAmarillo=!this.fondoAmarillo;
  }
  checkLetra(){
    this.letraGrande=!this.letraGrande;
  }
  asignaClases(){
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };

    return classes;
  }
}
