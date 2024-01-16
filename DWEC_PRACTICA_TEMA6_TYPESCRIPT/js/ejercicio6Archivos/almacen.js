"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Se requiere implementar una clase genérica llamada Almacen que funcione como un contenedor para
 * almacenar diferentes tipos de elementos. Esta clase debe ser capaz de almacenar y recuperar elementos
 * de cualquier tipo de manera segura.


La clase Almacen debe tener una estructura genérica para manejar diferentes tipos de elementos. Debe incluir
al menos los siguientes métodos:
agregarElemento: Método para agregar un elemento al almacén.
obtenerElemento: Método para obtener un elemento del almacén por su posición.
listarElementos: Método para listar todos los elementos almacenados en el almacén.

Debes crear instancias de la clase Almacen con diferentes tipos de elementos (números, cadenas, objetos, etc.)
y mostrar ejemplos de uso de los métodos implementados, agregando elementos, recuperándolos y listándolos.

 */
class Almacen {
    constructor() {
        this.elementos = [];
    }
    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }
    obtenerElemento(posicion) {
        if (posicion >= 0 && posicion < this.elementos.length) {
            return this.elementos[posicion];
        }
        return undefined;
    }
    listarElementos() {
        console.log("Elementos en el almacén:");
        this.elementos.forEach((elemento, index) => {
            console.log(`${index + 1}. ${elemento}`);
        });
    }
}
exports.default = Almacen;
