import { EmpleadosService } from './services/empleado.service';
import { Empleado } from './models/empleado.model';
import { FormsModule } from '@angular/forms';



import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class EmpleadosComponent implements  OnInit {

  public empleados: Empleado[] = [];

  constructor( private empleadoService: EmpleadosService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(){
    this.empleadoService.cargarEmpleados()
        .subscribe( ( resp ) => {
      this.empleados = resp;
    })
  }

}
