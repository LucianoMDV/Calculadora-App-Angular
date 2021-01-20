import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }

  operarCon(quien: Event): void {
      console.log((quien.target as HTMLElement).getAttribute('data-id'));
    switch ((quien.target as HTMLElement).getAttribute('data-id')) {
      case "sumar":
        this.resultado = this.operandoA + this.operandoB;
        break;
      case "restar":
        this.resultado = this.operandoA - this.operandoB;
        break;
      case "dividir":
        this.resultado = this.operandoA / this.operandoB;
        break;
      case "multiplicar":
        this.resultado = this.operandoA * this.operandoB;
        break;
    }

  }
}
