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

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CalculatorComponent, FormularioComponent, ResultadoComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [LogginService,PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
