import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  operandoA: number;
  operandoB: number;

  @Output() resultadoOperacion = new EventEmitter<number>();

  // resultadoPadre: number;

  // sumar(): void {
    // this.resultadoPadre = this.operandoA + this.operandoB;
  //   const result = this.operandoA + this.operandoB;
  //   this.resultadoOperacion.emit(result);
  // }

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
    // this.resultadoPadre = !isNaN(result) ? result : 0;
    result = !isNaN(result) ? result : 0;
    this.resultadoOperacion.emit(result);
  }
}
