import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.models';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  //alumno: Alumno = new Alumno('Jorge', 'Marimón', 35,'',[9,10,9,8,7.9,9.4],true,'https://www.linkedin.com/in/jorgemarimon/',0 );
  alumnos: Alumno[] = [
    new Alumno('Jorge', 'Marimón', 35, [9, 10, 9, 8, 7.9, 9.4], true, 'https://www.linkedin.com/in/jorgemarimon/', 0),
    new Alumno('Marta', 'Marimón', 31, [5, 6, 9, 7, 2.9, 9.4], true, 'https://www.linkedin.com/in/martamarimon/', 0),
    new Alumno('Francis', 'Marimón', 35, [7, 0, 4, 8, 7.2, 7.4], false, 'https://www.linkedin.com/in/francismarimon/', 0),
    new Alumno('Lidia', 'Marimón', 37, [9, 10, 10, 8.8, 9, 9.1], true, 'https://www.linkedin.com/in/lidiamarimon/', 0),
    new Alumno('Sara', 'Marimón', 30, [9.2, 8.3, 9.8, 8, 7.9, 6.4], false, 'https://www.linkedin.com/in/saramarimon/', 0),
  ]

  calcularMediaNotas(alum: Alumno): number {
    if (alum.notas.length === 0) {
      return 0;
    }
    var sumaNotas = alum.notas.reduce((suma, nota) => suma + nota, 0);
    return parseFloat((sumaNotas / alum.notas.length).toFixed(2));
  }







  /*aumentasDias(): void {
    this.alumno.diasFaltas++;
  }
  disminuirDias(): void {
    if (this.alumno.diasFaltas > 0) {
      this.alumno.diasFaltas--;
    }
  }*/
  /*crearCorreo(): void {
    this.alumno.email = this.alumno.nombre + "_" + this.alumno.apellido + "@alu.medac.es"
  }*/

}
