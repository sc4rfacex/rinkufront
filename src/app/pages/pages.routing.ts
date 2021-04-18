import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { NominasComponent } from './nominas/nominas.component';
import { PagesComponent } from './pages.component';


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
];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
