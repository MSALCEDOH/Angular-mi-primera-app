import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { LogginService } from './LoggingService.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
 
  // title = 'Mi primera App en Angular';
  // saludo = 'Saludos';
   title = "List of people";
  
   constructor(private loginService: LoginService){

   }

   ngOnInit(): void {
      //this.personas = this.personasServices.personas;
      firebase.initializeApp({
        apiKey: "AIzaSyAUGrxQ_V1NswWMU_P5cL6t2CYCasGvpsw",
        authDomain: "listado-personas-a89a6.firebaseapp.com",
      });
   }
  
  //  personaAgregada(persona: Persona){
  //   //  this.personas.push(persona);
  //   this.personasServices.AgregarPersona(persona);
  //  }

  //title = "Calculadora";
  // resultadoPadre:number;

  // procesarResultado(resultado: number){
  //   this.resultadoPadre = resultado;
  // }

  Salir(){
    this.loginService.LogOut();
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

}
