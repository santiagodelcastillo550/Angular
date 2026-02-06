import { Component} from '@angular/core';
import { Compo1 } from './compo1/compo1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Compo1],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = '020_decora';
}
