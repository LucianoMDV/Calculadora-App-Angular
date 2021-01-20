import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora';
  operandoA = 0;
  operandoB = 0;
  resultado = 0;

  sumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

  operarCon(quien: string): void {
    let result = 0;
      // console.log((quien.target as HTMLElement).getAttribute('data-id'));
    console.log(quien);
    switch (quien) {
      case 'sumar':
        result = this.operandoA + this.operandoB;
        break;
      case 'restar':
        result = this.operandoA - this.operandoB;
        break;
      case 'dividir':
        result = this.operandoA / this.operandoB;
        break;
      case 'multiplicar':
        result = this.operandoA * this.operandoB;
        break;
    }
    this.resultado = !isNaN(result) ? result : 0;

  }
}
