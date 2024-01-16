"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Laptop {
    constructor(nombre, encendido, modelo) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.modelo = modelo;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEncendido() {
        return this.encendido;
    }
    setEncendido(encendido) {
        this.encendido = encendido;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    encender() {
        if (this.encendido = true) {
            console.log("El dispositivo ya está encendido");
        }
        else {
            console.log("Dispositivo encendido");
        }
    }
    apagar() {
        if (this.encendido = false) {
            console.log("El dispositivo ya está apagado");
        }
        else {
            console.log("Dispositivo apagado");
        }
    }
    abrirPrograma() {
        console.log("Programa abierto");
    }
}
exports.default = Laptop;
