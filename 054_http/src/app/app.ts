import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTest } from "./http-client-test/http-client-test";
import { TestInterceptor } from './testInterceptor';
import { TestInterceptor2 } from './testInterceptor2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, HttpClientTest],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TestInterceptor2, multi: true }
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
