import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion calculadora';

  resultadoPadre: number;

  procesarResultado(resultado: number): void {
    this.resultadoPadre = resultado;
  }
}
