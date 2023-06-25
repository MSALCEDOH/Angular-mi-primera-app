import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
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

}
