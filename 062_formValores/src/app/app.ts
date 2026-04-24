
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '062 formValores';
  codigo: string= "";
  nombre: string= "";
  edad: number= 20;
  opcion: string="2";
  sexo: string="";
  comentarios: string="";
  activar: boolean= true;

  mostrarVar(){
    console.log(
        "Codigo ("+ this.codigo + ") "
        + "Nombre ("+ this.nombre+ ") "
        + "Edad ("+ this.edad+ ") "
        + "Opcion ("+ this.opcion+ ") "
        + "Comentarios ("+ this.comentarios+ ") "
        + "Sexo ("+ this.sexo+ ") "
        + "Activar ("+ this.activar+ ")"
    );
  }

  onSubmit(){
      console.log("Submit");
  }
}
