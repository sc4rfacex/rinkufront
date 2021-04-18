import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NominasComponent } from './nominas/nominas.component';
import { Page404Component } from './page404/page404.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    EmpleadosComponent,
    MovimientosComponent,
    NominasComponent,
    Page404Component,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    EmpleadosComponent,
    MovimientosComponent,
    NominasComponent,
    Page404Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})

export class PagesModule { }
