import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = '025 dirNgFor';
  public nombres = [
    {nom: "uno", edad:10},
    {nom: "dos", edad:20},
    {nom: "tres", edad:30}
  ];
}
