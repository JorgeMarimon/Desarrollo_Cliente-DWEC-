import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOFertas'
})
export class FilterOFertasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    /*Value equivale a todos nuestros ofertas*/
    const resultOfertas: Array<any> = [];
    for (const oferta of value) {
      if (oferta.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultOfertas.push(oferta);
        //Almacenamos el oferno que coincida con esa búsqueda.
      }
    }
    return resultOfertas;
  }

}
