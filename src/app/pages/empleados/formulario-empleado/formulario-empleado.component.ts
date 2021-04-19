import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: []
})
export class FormularioEmpleadoComponent{

  public formularioPosteado = false;

  public formularioRegistro = this.fb.group({
    numeroEmpleado: ['', [Validators.required, Validators.minLength(8)], Validators.max(99999999)],
    nombre: ['', Validators.required],
    rol: ['', Validators.required],
    tipo: ['', Validators.required],
  });

  constructor( private fb: FormBuilder) { }

  get numeroEmpleadoNoValido(){
    return this.formularioRegistro.get('numeroEmpleado').invalid && this.formularioRegistro.get('numeroEmpleado').touched
  }

  insertarEmpleado(){
    console.log( this.formularioRegistro.value );
  }

}
