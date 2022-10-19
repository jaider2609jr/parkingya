import { HomeComponent } from './paginas/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { RegistrarPersonalComponent } from './paginas/registrar-usuario/registrar-personal.component';
import { RegistrarVehiculoComponent } from './paginas/registrar-vehiculo/registrar-vehiculo.component';
import { RegistrarParqueaderoComponent } from './paginas/registrar-parqueadero/registrar-parqueadero.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { GestionParqueaderosComponent } from './paginas/gestion-parqueaderos/gestion-parqueaderos.component';
import { GestionVehiculosComponent } from './paginas/gestion-vehiculos/gestion-vehiculos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-personal', component: RegistrarPersonalComponent },
  { path: 'registrar-vehiculos', component: RegistrarVehiculoComponent},
  { path: 'registrar-parqueaderos', component: RegistrarParqueaderoComponent},
  { path: 'mapa', component: MapaComponent},
  { path: 'gestionar-parqueaderos', component: GestionParqueaderosComponent},
  { path: 'gestionar-vehiculos', component: GestionVehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
