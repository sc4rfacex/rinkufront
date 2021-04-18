import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { NominasComponent } from './pages/nominas/nominas.component';
import { Page404Component } from './pages/page404/page404.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'movimientos', component: MovimientosComponent },
      { path: 'nominas', component: NominasComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
