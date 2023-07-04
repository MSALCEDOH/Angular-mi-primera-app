import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';


@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient, private loginService: LoginService) {        
    }



    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        //this.httpClient.post("https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos.json",personas)
        this.httpClient.put("https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos.json?auth=" + token,personas)
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
        const token = this.loginService.getIdToken();
         return this.httpClient.get<Persona[]>("https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos.json?auth=" + token);    
     }

     editarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url:string;
        url = "https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos/" + index + ".json?auth=" + token;
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
        const token = this.loginService.getIdToken();
        let url:string;
        url = "https://listado-personas-a89a6-default-rtdb.firebaseio.com/datos/" + index + ".json?auth=" + token;
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