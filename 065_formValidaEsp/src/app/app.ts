import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltrarCaracteres } from './validacaracteres';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, JsonPipe,FiltrarCaracteres],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '065_formValidaEsp';
}
