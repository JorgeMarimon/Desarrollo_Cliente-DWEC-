"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Laptop {
    constructor(name, on, model) {
        this.name = name;
        this.on = on;
        this.model = model;
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
    geton() {
        return this.on;
    }
    seton(on) {
        this.on = on;
    }
    getmodel() {
        return this.model;
    }
    setmodel(model) {
        this.model = model;
    }
    turnOn() {
        if (this.on = true) {
            console.log("El dispositivo ya está on");
        }
        else {
            console.log("Dispositivo on");
        }
    }
    turnOff() {
        if (this.on = false) {
            console.log("El dispositivo ya está apagado");
        }
        else {
            console.log("Dispositivo apagado");
        }
    }
    toOpenProgramme() {
        console.log("Programa abierto");
    }
}
exports.default = Laptop;
