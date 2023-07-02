import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()

export class PersonasService{

    personas: Persona[] = [
        new Persona('Martin','Salcedo'), 
        new Persona('Juan','Perez'),
         new Persona('Gaby','M') 
       ];

    saludar = new EventEmitter<number>();   
    
    constructor(private loggingService: LogginService){

    }   

    AgregarPersona(persona: Persona){
        this.personas.push(persona);
        this.loggingService.sendMessageConsole("Agregamos persona " + persona.nombre);
    }

    EncontrarPersona(index:number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    EditarPersona(index: number,persona: Persona){
        this.personas[index] = new Persona(persona.nombre,persona.apellido);
    }

    EliminarPersona(index: number){
        this.personas.splice(index,1);
    }
}