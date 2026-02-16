import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pipes',
  imports: [CommonModule],
  templateUrl: './number-pipes.html',
  styleUrl: './number-pipes.css',
})
export class NumberPipes {
  pi: number = 3.141592;
}
