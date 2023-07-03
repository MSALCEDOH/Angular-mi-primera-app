import { Component, Injectable, Input } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

@Injectable()

export class PersonaComponent {

  @Input() persona: Persona;
  @Input() indice: number;

  // name: string = 'Martin';
  // lastname: string = 'Salcedo';
  // //private age: number = 28;
  // age: number = 28;
  /*
  getAge(): number {
    return this.age;
  }
  */

 constructor(private personasService: PersonasService){

 }

  
  emitirSaludo(){
    this.personasService.saludar.emit(this.indice)
  }

}
