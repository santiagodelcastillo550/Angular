import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientTest } from "./http-client-test/http-client-test";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, HttpClientTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
