import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  //providers: [LogginService]
})
export class FormularioComponent {

  constructor(private logginService: LogginService, private personasService: PersonasService){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es " + indice)
    );
  }
  
   @Output() personaCreada = new EventEmitter<Persona>();

  //  nombreInput:string = "";
  //  apellidoInput:string = "";
  
  @ViewChild("nombreInput") nombre: ElementRef;
  @ViewChild("apellidoInput") apellido: ElementRef;

  agregarPersona(){
    //agregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){
    // agregarPersona(){  
  // let persona1 = new Persona(this.nombreInput,this.apellidoInput)
  let persona1 = new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value)
  //this.personaCreada.emit(persona1);
  this.personasService.AgregarPersona(persona1);
  //this.logginService.sendMessageConsole("Enviamos persona: " + persona1.nombre);
  }

  operando1: number = 0;
  operando2: number = 0;
  suma: number = 0;

  @Output() resultadoSuma = new EventEmitter<number>;

  Sum():void{
    let resultado = this.operando1 + this.operando2;
    this.resultadoSuma.emit(resultado);
  }
}
