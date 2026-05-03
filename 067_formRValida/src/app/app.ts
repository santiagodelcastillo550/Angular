import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '067_formRValida';
  form: FormGroup;
  constructor(private fctrl:FormBuilder){
    this.form=fctrl.group({
      codigo:['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ])],
      nombre:['', Validators.required]
    })
  }

  onSubmit(){
    console.log("codigo : " + this.form.controls['codigo'].value);
    console.log("nombre : " + this.form.controls['nombre'].value);
    console.log(JSON.stringify(this.form.value));
  }
}
