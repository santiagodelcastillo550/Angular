import { DatePipe } from './date-pipe/date-pipe';
import { Component, signal } from '@angular/core';
import { NumberPipes } from './number-pipes/number-pipes';

@Component({
  selector: 'app-root',
  imports: [DatePipe, NumberPipes],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('031_pipeDisp');
}
