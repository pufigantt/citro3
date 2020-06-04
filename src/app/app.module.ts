import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
//import { APP_ROUTING } from './app.routes';

//Servicios
import { AutosService } from './servicios/autos.service';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitroComponent } from './citro/citro.component';
import { AutosComponent } from './components/autos/autos.component';
import { AutoComponent } from './components/auto/auto.component';

@NgModule({
  declarations: [
    AppComponent,
    CitroComponent,
    AutosComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // APP_ROUTING
  ],
  providers: [
    AutosService
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
