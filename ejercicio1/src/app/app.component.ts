// 1- (app.component.html) Realizar:
// una aplicacion que se le ingresen dos edades en dos cuadro de textos
// edadUno, EdadDos
// mostrar el promedio y la suma en dos cuadros de textos nuevos
// botones "calcular" y "limpiar cuadros de textos"

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';

  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  calcular() {
    this.suma = Number(this.edadUno) + Number(this.edadDos);
    this.promedio = this.suma / 2;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
