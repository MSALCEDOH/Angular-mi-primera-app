import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';


@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient) {        
    }

    guardarPersonas(personas: Persona[]){
        //this.httpClient.post("https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos.json",personas)
        this.httpClient.put("https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos.json",personas)
        .subscribe(
            response => {
                console.log("Resultado " + response);
            },
            error => {
                console.log("Error al guardar" + error);
            }
            )
    }

     cargarPersonas(){
         return this.httpClient.get<Persona[]>("https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos.json");    
     }

     editarPersona(index: number, persona: Persona){
        let url:string;
        url = "https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos/" + index + ".json"
        this.httpClient.put(url,persona).
        subscribe(
            response => {
                console.log("resultado de editar" + response);
            },
            error => {
                console.log("error en editar" + error);
            }
        )
    }

    eliminarPersona(index: number){
        let url:string;
        url = "https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos/" + index + ".json"
        this.httpClient.delete(url).
        subscribe(
            response => {
                console.log("resultado de eliminar" + response);
            },
            error => {
                console.log("error en eliminar" + error);
            }
        )
    }
    
}