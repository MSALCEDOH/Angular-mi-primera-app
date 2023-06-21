import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  name: string = 'Martin';
  lastname: string = 'Salcedo';
  //private age: number = 28;
  age: number = 28;
  /*
  getAge(): number {
    return this.age;
  }
  */

}
