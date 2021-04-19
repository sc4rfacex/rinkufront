import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'



import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NominasComponent } from './nominas/nominas.component';
import { Page404Component } from './page404/page404.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { FormularioEmpleadoComponent } from './empleados/formulario-empleado/formulario-empleado.component';
import {MatButtonModule} from '@angular/material/button';
import { TipoEmpleadoPipe } from './empleados/pipes/tipo-empleado.pipe';
import { RolEmpleadoPipe } from './empleados/pipes/rol-empleado.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    EmpleadosComponent,
    MovimientosComponent,
    NominasComponent,
    Page404Component,
    PagesComponent,
    FormularioEmpleadoComponent,
    TipoEmpleadoPipe,
    RolEmpleadoPipe,
  ],
  exports: [
    DashboardComponent,
    EmpleadosComponent,
    MovimientosComponent,
    NominasComponent,
    Page404Component,
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatTabsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
    
  ]
})

export class PagesModule { }
