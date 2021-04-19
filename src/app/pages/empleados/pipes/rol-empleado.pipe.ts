import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolEmpleado'
})
export class RolEmpleadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let rolEmpleado = '';
    switch (value) {
      case 1:
        rolEmpleado = 'Chofer';
        break;
      case 2:
        rolEmpleado = 'Cargador';
        break;
      case 3:
        rolEmpleado = 'Auxiliar';
        break;
    }
    return rolEmpleado;
  }

}
