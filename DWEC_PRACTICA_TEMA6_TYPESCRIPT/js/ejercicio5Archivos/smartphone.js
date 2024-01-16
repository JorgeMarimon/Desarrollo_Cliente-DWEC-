"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Smartphone {
    constructor(nombre, encendido, marca) {
        this.nombre = nombre;
        this.encendido = encendido;
        this.marca = marca;
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
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
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
    llamar() {
        console.log("Teléfono sonando");
    }
}
exports.default = Smartphone;
