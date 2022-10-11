import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './paginas/login/login.component';
import { FormComponent } from './componentes/form/form.component';
import { InputComponent } from './componentes/input/input.component';
import { ButtonComponent } from './componentes/button/button.component';
import { RegistrarPersonalComponent } from './paginas/registrar-usuario/registrar-personal.component';
import { HomeComponent } from './paginas/home/home.component';
import { RegistrarVehiculoComponent } from './paginas/registrar-vehiculo/registrar-vehiculo.component';
import { RegistrarParqueaderoComponent } from './paginas/registrar-parqueadero/registrar-parqueadero.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MapaComponent } from './paginas/mapa/mapa.component';
import { GestionParqueaderosComponent } from './paginas/gestion-parqueaderos/gestion-parqueaderos.component';
import { GestionVehiculosComponent } from './paginas/gestion-vehiculos/gestion-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    FormComponent,
    InputComponent,
    ButtonComponent,
    RegistrarPersonalComponent,
    HomeComponent,
    RegistrarVehiculoComponent,
    RegistrarParqueaderoComponent,
    MapaComponent,
    GestionParqueaderosComponent,
    GestionVehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
