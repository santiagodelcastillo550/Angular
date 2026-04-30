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
  title = '066_formReactive';
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
  }
  onSubmit(){
    console.log("codigo : " + this.form.controls['codigo'].value);
    console.log("nombre : " + this.form.controls['nombre'].value);
    console.log("aficiones " + JSON.stringify(this.form.controls['aficiones'].value));
    console.log(JSON.stringify(this.form.value));
  }
}
