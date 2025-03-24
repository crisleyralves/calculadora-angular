import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent {
  display = '';
  operator = '';
  firstOperand: number | null = null;

  appendToDisplay(value: string) {
    this.display += value;
    console.log(this.display);
  }

  clearDisplay() {
    this.display = '';
    this.operator = '';
    this.firstOperand = null;
  }

  setOperator(operator: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.display);
      this.display = '';
    }
    this.operator = operator;
  }

  calculate() {
    if (this.operator && this.firstOperand !== null) {
      const secondOperand = parseFloat(this.display);
      let result = 0;

      switch (this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
      }

      this.display = String(result);
      this.operator = '';
      this.firstOperand = null;
    }
  }
}