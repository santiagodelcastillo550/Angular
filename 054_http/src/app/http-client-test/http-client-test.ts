import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../post';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    this.http.get<[Post]>('https://jsonplaceholder.typicode.com/posts', {observe:'response'})
      .subscribe(data => {this.resultadoPeticion = data.body; 
          console.log(data);
      });
  }

  post(){
    this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',
    {
      title: 'Previsión Vierner',
      body: 'Parcialmente soleado',
      userId: 1
    })
    .subscribe(data => {this.resultadoPeticion = data;
          console.log("Id. de la nueva publicación: " + data.id)
    });
  }

  put(){
    this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/1000',
      {
        id: 1,
        title: 'Prevision Lunes',
        body: 'Lluvias',
        userId: 1
      })
      .subscribe(
        data => {this.resultadoPeticion = data; },
        (err: HttpErrorResponse) => {
          if(err.error instanceof Error){
            console.log('Error cliente o red: ', err.error.message);
          }else{
            console.log('Error servidor remoto. ${err.status} # ${err.message}')
          }
        });
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

  get_param(){
    const headers = new HttpHeaders().set('Autorizacion', 'mi token');
    const params = new HttpParams().set('userId', '9');
    this.http.get('https://jsonplaceholder.typicode.com/posts',{headers, params})
      .subscribe(data => {this.resultadoPeticion = data;});
  }

  peti_para1() {
    forkJoin([
      this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/4')
        .pipe(delay(3000)),
      this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/5')
    ]).subscribe({
      next: (data) => {
        this.resultadoPeticion = data;
      }
    });
  }

  peti_sec() {
  this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1').pipe(
    switchMap((data: Post) => {
      data.title = "(MODIFICADO) " + data.title;
      return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/1', data);
    })
  ).subscribe({
    next: (data) => this.resultadoPeticion = data
  });
}

  post_prgEvents() {
  const request = new HttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: 'Crítica de la película',
      body: 'Me ha gustado mucho.',
      userId: 1
    },
    { reportProgress: true }
  );

  this.http.request(request).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      const total = event.total ?? 1; // evita undefined
      const percentDone = Math.round(100 * event.loaded / total);
      console.log(`Fichero transferido en un ${percentDone}%`);
    } else if (event.type === HttpEventType.Response) {
      this.resultadoPeticion = event.body;
    }
  });
}

}
