import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = '028 dirNgStyle';
  color = 'blue';
  hayLetraGrande: boolean = false;
  hayColorFondo: boolean = false;
  hayLetraColor: boolean = false;
  hayLetraItalica: boolean = false;

  defindeEstilos(){
    let styles= {
      'font-size': this.hayLetraGrande ? '300%' : 'initial',
      'background-color': this.hayColorFondo ? '#58FA58' : '#FFFFFF',
      'color': this.hayLetraColor ? 'red' : 'black',
      'font-style': this.hayLetraItalica ? 'italic' : 'normal'
    };

    return styles;
  }
}
