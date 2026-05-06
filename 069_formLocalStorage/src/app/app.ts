import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '069 formsLocalStorage';
  form: FormGroup;
  constructor(private fctrl:FormBuilder){
    this.form=fctrl.group({
      codigo:'123',
      nombre:'Juanito',
      aficiones: fctrl.group({
        aficion1:'musica',
        aficion2:'escribir'
      })
    })
    this.leerDatos();
  }

  grabarDatos(){
    localStorage.setItem("codigo", this.form.controls['codigo'].value);
    localStorage.setItem("nombre", this.form.controls['nombre'].value);
    localStorage.setItem("aficiones", JSON.stringify(this.form.controls['aficiones'].value));
  }

  leerDatos() {
    this.form.patchValue({
      codigo: localStorage.getItem("codigo") ?? "",
      nombre: localStorage.getItem("nombre") ?? "",
      aficiones: JSON.parse(localStorage.getItem("aficiones") ?? "[]")
    });
  }

  onSubmit(){
    console.log("codigo : " + this.form.controls['codigo'].value);
    console.log("nombre : " + this.form.controls['nombre'].value);
    console.log("aficiones " + JSON.stringify(this.form.controls['aficiones'].value));
    console.log("form " + JSON.stringify(this.form.value));
    this.grabarDatos();
  }
}
