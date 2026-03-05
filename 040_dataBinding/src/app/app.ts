import { CurrencyPipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  Libro = {"titulo": "Hamlet", "autor": "William Shakespeare",
    "precio": 21.30, "stock": 5, "cantidad": 0, "imagen": "assets/old-books.jpg"
  }

  downCantidad(libro: any){
    if(libro.cantidad > 0)
      libro.cantidad--;
  }
  upCantidad(libro: any){
    if(libro.cantidad < libro.stock)
      libro.cantidad++;
  }

  getCoord(event:any){
    console.log(event.clientX + "," + event.clientY);
  }
}
