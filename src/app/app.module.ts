import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { LogginService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent, CalculatorComponent, FormularioComponent, ResultadoComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LogginService,PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
