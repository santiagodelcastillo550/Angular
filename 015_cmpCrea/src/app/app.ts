import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Compo1 } from './compo1/compo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('015_cmpCrea');
}
