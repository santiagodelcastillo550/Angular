import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DivisionEnteraPipe } from './division-entera-pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DivisionEnteraPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  dividendo = 10;
  divisor = 2;
}
