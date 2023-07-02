import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  //providers: [LogginService]
})
export class FormularioComponent implements OnInit {

  index: number;
  modoEdicion: number;

  constructor(private logginService: LogginService,
              private personasService: PersonasService,
              private router: Router,
              private route: ActivatedRoute){
    this.personasService.saludar.subscribe(
      (indice: number) => alert("El indice es " + indice)
    );
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];

    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    //El + lo convierte en entero

    //if (this.index){
    if (this.modoEdicion != null && this.modoEdicion==1){
        let persona:Persona = this.personasService.EncontrarPersona(this.index)
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
    }
  }
  
   @Output() personaCreada = new EventEmitter<Persona>();

   nombreInput:string = "";
   apellidoInput:string = "";
  
  // @ViewChild("nombreInput") nombre: ElementRef;
  // @ViewChild("apellidoInput") apellido: ElementRef;

  GuardarPersona(){

    //agregarPersona(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){
      // agregarPersona(){  
     let persona1 = new Persona(this.nombreInput,this.apellidoInput)     
    //let persona1 = new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value)
    //this.personaCreada.emit(persona1);
    if (this.modoEdicion != null && this.modoEdicion==1){
      //if (this.index){
        this.personasService.EditarPersona(this.index,persona1);
    }else{
          this.personasService.AgregarPersona(persona1);
    }
    
    //this.logginService.sendMessageConsole("Enviamos persona: " + persona1.nombre);
    this.router.navigate(['personas'])
  }

  operando1: number = 0;
  operando2: number = 0;
  suma: number = 0;

  @Output() resultadoSuma = new EventEmitter<number>;

  Sum():void{
    let resultado = this.operando1 + this.operando2;
    this.resultadoSuma.emit(resultado);
  }

  EliminarPersona(){
    if(this.index!=null){
      this.personasService.EliminarPersona(this.index);
    }
    this.router.navigate(['personas'])
  }
}
