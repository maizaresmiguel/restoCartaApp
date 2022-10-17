import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './platos/pages/agregar/agregar.component';
import { BuscarComponent } from './platos/pages/buscar/buscar.component';
import { ListadoComponent } from './platos/pages/listado/listado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlatoDetalleComponent } from './platos/pages/plato-detalle/plato-detalle.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'plato/:id',
        component: PlatoDetalleComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
