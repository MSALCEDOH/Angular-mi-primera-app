import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  // @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string = "";
  // apellidoInput:string = "";

  // agregarPersona(){
  //   let persona1 = new Persona(this.nombreInput,this.apellidoInput)
  //   this.personaCreada.emit(persona1);
  // }

  operando1: number = 0;
  operando2: number = 0;
  suma: number = 0;

  @Output() resultadoSuma = new EventEmitter<number>;

  Sum():void{
    let resultado = this.operando1 + this.operando2;
    this.resultadoSuma.emit(resultado);
  }
}
