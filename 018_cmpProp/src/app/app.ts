import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('app works!'); 
  ponFondo : boolean = true; 
  mostrar = signal(true); 
  habilitar = signal(false); 
  referencia = signal('http://www.google.com'); 

  toggleMostrar() { this.mostrar.update(v => !v); } 

  toggleHabilitar() { this.habilitar.update(v => !v); } 
  
  toggleFondo() { this.ponFondo = !this.ponFondo; }
}
