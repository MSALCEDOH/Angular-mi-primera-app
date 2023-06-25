import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Mi primera App en Angular';
  // saludo = 'Saludos';
  // title = "List of people";
  
  // personas: Persona[] = [
  //   new Persona('Martin','Salcedo'), 
  //   new Persona('Juan','Perez'),
  //   new Persona('Gaby','M') 
  // ];
  
  // personaAgregada(persona: Persona){
  //   this.personas.push(persona);
  // }

  title = "Calculadora";
  resultadoPadre:number;

  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }

}
