import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  imports: [CommonModule],
  templateUrl: './date-pipe.html',
  styleUrl: './date-pipe.css',
})
export class DatePipe{
  fecha: Date = new Date(1988, 3, 15, 12, 30, 15); //15 de Abril del 1988: 12:30:15
}
