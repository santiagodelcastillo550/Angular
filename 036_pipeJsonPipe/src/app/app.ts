import { Component} from '@angular/core';
import { Libro } from './libro';
import { Escritor } from './escritor';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  libro1: Libro = new Libro('Mucho ruido y pocas nueces', 'Comedia');
  libro2: Libro = new Libro('Romeo y Julieta', 'Drama');
  librosArray: Libro[] = [this.libro1, this.libro2];

  escritor = new Escritor(1, 'William Shakespeare', new Date(1564, 3, 26), this.librosArray)
}
