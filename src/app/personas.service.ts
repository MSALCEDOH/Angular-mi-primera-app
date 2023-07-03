import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataService } from "./data.service";

@Injectable()

export class PersonasService{

    personas: Persona[] = [
        new Persona('Martin','Salcedo'), 
        new Persona('Juan','Perez'),
         new Persona('Gaby','M') 
       ];

    saludar = new EventEmitter<number>();   
    
    constructor(private loggingService: LogginService, private dataService: DataService){

    }

    setPersonas(personas: Persona[]){
        this.personas = personas;
    }

    AgregarPersona(persona: Persona){
        if (this.personas == null){
            this.personas = []
        }
        this.personas.push(persona);
        this.loggingService.sendMessageConsole("Agregamos persona " + persona.nombre);
        this.dataService.guardarPersonas(this.personas);
    }

    EncontrarPersona(index:number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    EditarPersona(index: number,persona: Persona){
        this.personas[index] = new Persona(persona.nombre,persona.apellido);
        this.dataService.editarPersona(index,persona);
    }

    EliminarPersona(index: number){
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index);
        this.guardarPersonas();
    }

    ObtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    guardarPersonas(){
        if (this.personas != null)
        {
            this.dataService.guardarPersonas(this.personas);
        }
    }
}