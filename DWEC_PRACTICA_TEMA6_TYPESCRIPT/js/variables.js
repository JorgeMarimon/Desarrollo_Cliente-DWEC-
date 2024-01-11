"use strict";
//String
let cadena = "JorgeMarimon";
//Múltiples tipos de datos 
let cadena2 = "JorgeMarimon";
let cadena3 = 4;
let cadena4 = "JorgeMarimon";
console.log(cadena);
//number
let numero = 12;
//booleano
let verdadero_falso = true;
//any
let cualquiera = "hola";
cualquiera = 14;
console.log(cualquiera);
//arrays
let lenguaje = ["PHP", "JS", "CSS"];
let arrayString = ["yo", "tu"];
let years = [23, 24, 25];
let cualesquiera = ["aa", 12, 23];
console.log(arrayString, lenguaje, years, cualesquiera);
let edad = 43;
let profesion = "profesor";
console.log(profesion);
let persona = ["jorge", 35];
console.log(persona);
var color;
(function (color) {
    color[color["verde"] = 0] = "verde";
    color[color["rojo"] = 1] = "rojo";
    color[color["amarillo"] = 2] = "amarillo";
})(color || (color = {}));
;
let c_index = color.rojo;
let c_name = color[1];
console.log(c_index);
console.log(c_name);
//funciones
function sumar(valor1, valor2) {
    return valor1 + valor2;
}
console.log(sumar(3, 4));
//función anónima
const funcSumar = function (valor1, valor2) {
    return valor1 + valor2;
};
console.log(funcSumar(4, 4));
//parámetros opcionales
function sumando(valor1, valor2, valor3) {
    if (valor3)
        return valor1 + valor2 + valor3;
    else
        return valor1 + valor2;
}
console.log(sumando(5, 4));
console.log(sumando(5, 4, 3));
//parámetro por defecto
function sumarPorDefecto(valor1, valor2, valor3 = 10) {
    return valor1 + valor2 + valor3;
}
console.log(sumarPorDefecto(5, 4));
console.log(sumarPorDefecto(5, 4, 3));
//OBJETOS
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
    }
}
let persona1 = new Persona('Juan', 45); //puedes hacerlo en dos lineas, let persona1:Persona; person1=new Persona...
persona1.imprimir();
class Car {
    constructor(engine, color) {
        this.engine = engine;
        this.color = color;
    }
    brake() {
        console.log("Frenando...");
    }
}
class PuntoPlano {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    } //por qué aquí hay que declarar donde se puede usar la variable y en el siguiente 
    //ejemplo se hace fuera antes del constructor?
    /**
     * private x:number;
     * private y:number;
     * constructor(x: number, y: number) {
     *      this.x=x;
     *      this.y=y;
     */
    imprimir() {
        console.log(`Punto en el plano: (${this.x},${this.y})`);
    }
}
class Coche {
    //Constructor
    constructor(color, modelo, marca, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
}
class PilaEnteros {
    constructor() {
        this.vec = [];
    }
    insertar(x) {
        this.vec.push(x);
    }
    extraer() {
        if (this.vec.length > 0)
            return this.vec.pop();
        else
            return null;
    }
}
class PilaStrings {
    constructor() {
        this.vec = [];
    }
    insertar(x) {
        this.vec.push(x);
    }
    extraer() {
        if (this.vec.length > 0)
            return this.vec.pop();
        else
            return null;
    }
}
let pila1 = new PilaEnteros();
pila1.insertar(20);
pila1.insertar(43);
pila1.insertar(1);
console.log(pila1); //Revisar esto en el console y hablarlo con María
console.log(pila1.extraer());
console.log(pila1);
let pila2 = new PilaStrings();
pila2.insertar('juan');
pila2.insertar('ana');
pila2.insertar('luis');
console.log(pila2); //Revisar esto en el console y hablarlo con María
console.log(pila2.extraer());
console.log(pila2);
