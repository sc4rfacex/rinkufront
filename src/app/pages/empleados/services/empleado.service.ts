import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Empleado } from '../models/empleado.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor( private http: HttpClient) { }


  cargarEmpleados(){
    const url = `${base_url}empleados`;

    return this.http.get<{empleados: Empleado[]}>(url)
      .pipe(
        map( resp => {
          const empleados = resp.empleados.map( 
            emp => new Empleado(emp._id, emp.numeroEmpleado, emp.nombreEmpleado, emp.rolEmpleado, emp.tipoEmpleado)
          );

          return empleados;

        })
      )
  }

}
