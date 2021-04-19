import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEmpleado'
})
export class TipoEmpleadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let tipoEmpleado = '';
    switch (value) {
      case 1:
        tipoEmpleado = 'Interno';
        break;
      case 2:
        tipoEmpleado = 'Externo';
        break;
    }
    return tipoEmpleado;
  }

}
