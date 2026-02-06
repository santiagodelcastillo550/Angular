import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = '024 dirNgIf';
  grupo1=false;
  grupo2=false;
  subgrupo11=false;
  subgrupo12=false;
  subgrupo21=false;
  subgrupo22=false;
}
