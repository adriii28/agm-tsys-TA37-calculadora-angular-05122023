import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  display: string = '';
  display2: string = '';
  result : boolean = false;

  appendNumber(num: string): void {
    if (this.result) {
      this.display ='';
      this.display2 ='';
      this.display2 += num;
      this.result = false
    } else {
      this.display2 += num;
    }
  }

  appendOperator(operator: string): void {
    this.display2 += operator;
  }

  calculate() : void {
    console.log(this.display);

    const match = this.display2.match(/(\d+)([+-/*])(\d+)/);

    if (match) {
      let numero1 = parseInt(match[1]);
      let operador = match[2];
      let numero2 = parseInt(match[3]);
    
      console.log("Número 1:", numero1);
      console.log("Operador:", operador);
      console.log("Número 2:", numero2);

      this.operation(numero1, numero2, operador);
      this.result = true;

    } else {
      alert('La expresion no es valida')
      this.display = '';
    }
    
  }

  operation(num1: number, num2: number, operator : string) : void {
    switch (operator) {
      case '+':
        this.display2 = (num1 + ' + ' +num2)
        this.display = (num1 + num2).toString();
        break;
      case '-':    
      this.display2 = (num1 + ' - ' +num2)   
      this.display = (num1 - num2).toString();
      break;
      case '*':
        this.display2 = (num1 + ' * ' +num2)
        this.display = (num1 * num2).toString();
        break;
      case '/':
        this.display2 = (num1 + ' / ' +num2)
        this.display = (num1 / num2).toString();
        break;
      default:
        break;
    }
  }

  clear(): void {
    this.display = '';
    this.display2 = '';
  }
  
}
