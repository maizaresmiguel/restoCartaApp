import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ListadoComponent } from './platos/pages/listado/listado.component';
import { AgregarComponent } from './platos/pages/agregar/agregar.component';
import { BuscarComponent } from './platos/pages/buscar/buscar.component';
import { PlatoTarjetaComponent } from './platos/components/plato-tarjeta/plato-tarjeta.component';
import { PlatoDetalleComponent } from './platos/pages/plato-detalle/plato-detalle.component';
import { FormsModule } from '@angular/forms';
import { ObjToArrayPipe } from './pipe/obj-to-array.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    PlatoTarjetaComponent,
    PlatoDetalleComponent,
    ObjToArrayPipe
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
