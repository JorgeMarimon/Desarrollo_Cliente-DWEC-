"use strict";
/**
 * Crea un nuevo archivo TS, llamado empleado.ts. En este se definirá una clase Employee con las
 *  siguientes características:
 * Tendrá varios atributos: nombre, apellido, edad, fecha de inicio del trabajo, una fecha de finalización
 * (podrá ser nula) y la profesión.
 * Crea su constructor.
 * Crea los métodos get y set para cada uno de los atributos.
 * Crea dos empleados, uno que tenga fecha de finalización y otro que no la tenga ya que continúa
 * trabajando, pinta por consola el nombre y la edad de cada uno de ellos.
 */
class Employee {
    constructor(nombre, apellido, edad, fechaInicioTrabajo, fechaFinTrabajo, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicioTrabajo = fechaInicioTrabajo;
        this.fechaFinTrabajo = fechaFinTrabajo;
        this.profesion = profesion;
    }
    ;
    getnombre() {
        return this.nombre;
    }
    setnombre(value) {
        this.nombre = value;
    }
    getapellido() {
        return this.apellido;
    }
    setapellido(value) {
        this.apellido = value;
    }
    getedad() {
        return this.edad;
    }
    setedad(value) {
        this.edad = value;
    }
    getfechaInicioTrabajo() {
        return this.fechaInicioTrabajo;
    }
    setfechaInicioTrabajo(value) {
        this.fechaInicioTrabajo = value;
    }
    getfechaFinTrabajo() {
        return this.fechaFinTrabajo;
    }
    setfechaFinTrabajo(value) {
        this.fechaFinTrabajo = value;
    }
    getprofesion() {
        return this.profesion;
    }
    setprofesion(value) {
        this.profesion = value;
    }
    imprimir() {
        if (this.fechaFinTrabajo) {
            console.log("El nombre del empleado es " + this.nombre + " " + this.apellido + ". Su edad es de " + this.edad + " años. Empezó a trabajar como " + this.profesion + " en el " + this.fechaInicioTrabajo + ". Acabó de trabajar en el " + this.fechaFinTrabajo + ".");
        }
        else {
            console.log("El nombre del empleado es " + this.nombre + " " + this.apellido + ". Su edad es de " + this.edad + " años. Empezó a trabajar como " + this.profesion + " en el " + this.fechaInicioTrabajo + ". Sigue en activo.");
        }
    }
}
var empleado1 = new Employee("Jorge", "Marimón", 35, new Date('03/01/2009'), null, "Programador");
var empleado2 = new Employee("Francis", "Marimón", 34, new Date('15/01/2012'), new Date('03/01/2023'), "Comercial");
empleado1.imprimir();
empleado2.imprimir();
