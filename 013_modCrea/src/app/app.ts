import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mod2Component } from './mod2/mod2';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mod2Component],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('013_modCrea');
}
