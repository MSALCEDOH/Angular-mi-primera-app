import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  
  operando1: number = 0;
  operando2: number = 0;
  suma: number = 0;
  
  Sum(){
    this.suma = this.operando1 + this.operando2;
  }
}
