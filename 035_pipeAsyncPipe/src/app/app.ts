import { AsyncPipe } from '@angular/common';
import { Component} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  promiseData: string = '';
  observableData: string = '';
  observableSubs: Subscription |null = null;

  promiseObj: Promise<string>;
  observableObj: Observable<string>;

  getPromise(){
    return new Promise<string>(function(resolve, reject){
      setTimeout(()=> {resolve("Timer1 finalizado");}, 2000)
    });
  }

  getObservable(){
    return new Observable<string>(observer =>{
      setTimeout(()=> {observer.next("Timer2 finalizado");}, 4000);
    });
  }

  constructor(){
    this.getPromise().then( v => this.promiseData = v );
    this.observableSubs = this.getObservable().subscribe( v => this.observableData = v);
    
    this.promiseObj = this.getPromise();
    this.observableObj = this.getObservable();
  }

  ngOnDestroy(){
    if(this.observableSubs)
      this.observableSubs.unsubscribe();
  }
}
