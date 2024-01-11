//Crear nuevos tipos de datos
type alfanumerico = string | number;
//String
let cadena: string = "JorgeMarimon";
//Múltiples tipos de datos 
let cadena2: string | number = "JorgeMarimon";
let cadena3: alfanumerico = 4;
let cadena4: alfanumerico = "JorgeMarimon";

console.log(cadena)

//number
let numero: number = 12;

//booleano
let verdadero_falso: boolean = true;

//any
let cualquiera: any = "hola";
cualquiera = 14;
console.log(cualquiera)

//arrays
let lenguaje: Array<any> = ["PHP", "JS", "CSS"];
let arrayString: string[] = ["yo", "tu"]
let years: number[] = [23, 24, 25];
let cualesquiera: any[] = ["aa", 12, 23];
console.log(arrayString, lenguaje, years, cualesquiera)

type alfanumero = string | number;
let edad: alfanumero = 43;
let profesion: alfanumero = "profesor";
console.log(profesion)

//tupla
type tupla2 = [string, number];
let persona: tupla2 = ["jorge", 35]
console.log(persona)

enum color { verde, rojo, amarillo };
let c_index: color = color.rojo;
let c_name: string = color[1];
console.log(c_index);
console.log(c_name);

//funciones
function sumar(valor1: number, valor2: number): number { //indicar el parámetro de salida es OPCIONAL (:number)
    return valor1 + valor2;
}
console.log(sumar(3, 4))


//función anónima
const funcSumar = function (valor1: number, valor2: number): number {
    return valor1 + valor2
}
console.log(funcSumar(4, 4))

//parámetros opcionales
function sumando(valor1: number, valor2: number, valor3?: number): number {
    if (valor3)
        return valor1 + valor2 + valor3;
    else
        return valor1 + valor2;
}
console.log(sumando(5, 4));
console.log(sumando(5, 4, 3));

//parámetro por defecto
function sumarPorDefecto(valor1: number, valor2: number, valor3: number = 10): number {
    return valor1 + valor2 + valor3;
}
console.log(sumarPorDefecto(5, 4));
console.log(sumarPorDefecto(5, 4, 3));


//OBJETOS

class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
    }
}
let persona1: Persona = new Persona('Juan', 45); //puedes hacerlo en dos lineas, let persona1:Persona; person1=new Persona...
persona1.imprimir();


//interfaces
interface ICar {
    engine: string;
    color: string;
    brake: () => void;
}

class Car implements ICar {
    constructor(public engine: string, public color: string) {
    }
    brake() {
        console.log("Frenando...")
    }
}

//otro ejemplo
interface Punto {
    imprimir(): void;
}
class PuntoPlano implements Punto {

    constructor(private x: number, private y: number) { } //por qué aquí hay que declarar donde se puede usar la variable y en el siguiente 
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
    //Propiedades
    private color: string;
    private modelo: string;
    public marca: string;
    private precio: number;
    //Constructor
    constructor(color: string, modelo: string, marca: string, precio:
        number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
    }
}

class PilaEnteros {
    private vec: number[] = [];
    insertar(x: number) {
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
    private vec: string[] = [];
    insertar(x: string) {
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
console.log(pila1) //Revisar esto en el console y hablarlo con María
console.log(pila1.extraer());
console.log(pila1)

let pila2 = new PilaStrings();
pila2.insertar('juan');
pila2.insertar('ana');
pila2.insertar('luis');
console.log(pila2) //Revisar esto en el console y hablarlo con María
console.log(pila2.extraer());
console.log(pila2)


