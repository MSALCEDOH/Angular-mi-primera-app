import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { LogginService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CalculatorComponent, FormularioComponent, ResultadoComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [LogginService,PersonasService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
