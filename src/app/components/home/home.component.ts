import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm()
  }

  get departamentInvalid() {
    return this.forma.get('departamento').invalid && this.forma.get('departamento').touched
  }

  get cityInvalid() {
    return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched
  }

  get nameInvalid() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get emailInvalid() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }


  createForm() {
    this.forma = this.formBuilder.group({
      departamento: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    console.log(this.forma.value);
  }


}
