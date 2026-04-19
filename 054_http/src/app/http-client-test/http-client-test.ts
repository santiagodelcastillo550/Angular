import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-client-test',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './http-client-test.html',
  styleUrl: './http-client-test.css',
})
export class HttpClientTest {

  resultadoPeticion: any = null;

  constructor(private http: HttpClient){}
  ngOnInit(){
    this.get();
  }

  get(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {this.resultadoPeticion = data; });
  }

  post(){
    this.http.post('https://jsonplaceholder.typicode.com/posts',
    {
      title: 'Previsión Vierner',
      body: 'Parcialmente soleado',
      userId: 1
    })
    .subscribe(data => {this.resultadoPeticion = data;});
  }

  put(){
    this.http.put('https://jsonplaceholder.typicode.com/posts/1',
      {
        id: 1,
        title: 'Prevision Lunes',
        body: 'Lluvias',
        userId: 1
      })
      .subscribe(data => {this.resultadoPeticion = data;});
  }

  patch(){
    this.http.patch('https://jsonplaceholder.typicode.com/posts/1',
      {
        body: 'Soleado.'
      })
      .subscribe(data => {this.resultadoPeticion= data;});
  }

  delete(){
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data => {this.resultadoPeticion = data;});
  }
}
