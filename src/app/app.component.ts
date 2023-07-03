import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
 
  // title = 'Mi primera App en Angular';
  // saludo = 'Saludos';
   title = "List of people";
  
  personas: Persona[] = [
    // new Persona('Martin','Salcedo'), 
    // new Persona('Juan','Perez'),
    //  new Persona('Gaby','M') 
   ];

   constructor(private personasServices: PersonasService){

   }

   ngOnInit(): void {
      this.personas = this.personasServices.personas;
   }
  
  //  personaAgregada(persona: Persona){
  //   //  this.personas.push(persona);
  //   this.personasServices.AgregarPersona(persona);
  //  }

  //title = "Calculadora";
  resultadoPadre:number;

  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }

}
