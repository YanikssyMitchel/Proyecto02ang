import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionesComponent } from './componentes/regiones/regiones.component';
import { ListaPaisesComponent } from './componentes/lista-paises/lista-paises.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, 
  { path: 'lista-paises', component: ListaPaisesComponent }, 
  { path: 'regiones', component: RegionesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
