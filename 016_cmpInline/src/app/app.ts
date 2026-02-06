import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Compo1 } from "./compo1/compo1";
import { Compo2 } from "./compo2/compo2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Compo1, Compo2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('016_cmpInline');
}
