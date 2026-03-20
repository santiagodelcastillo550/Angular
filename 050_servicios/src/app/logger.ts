import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  constructor(){}

  log(message: string){
    console.log("(" + new Date().toLocaleTimeString() + ")" + message);
  }
}
