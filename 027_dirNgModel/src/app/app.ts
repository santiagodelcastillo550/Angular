import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '027 dirNgModel';
  nombre = '';
  nombre2='';
  cambiaNombre(){
    this.nombre=this.nombre.toLowerCase();
    this.nombre2=this.nombre.toUpperCase();
  }
  cambiaNombre2(){
    this.nombre=this.nombre.toUpperCase();
    this.nombre=this.nombre.toLowerCase();
  }
}
