import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LogginService } from './LoggingService.service';
import { LoginGuardian } from './login/login-guardian.service';


@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CalculatorComponent, FormularioComponent, ResultadoComponent, ErrorComponent, LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [PersonasService,DataService,LoginService,LogginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
