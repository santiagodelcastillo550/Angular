import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { NumElemPipe } from './num-elem-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NumElemPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  fechas: Date[] = [];
  agregarFecha(){
    this.fechas.push(new Date());
    let fechas2 = this.fechas.slice();
    this.fechas = fechas2;
  }
}
