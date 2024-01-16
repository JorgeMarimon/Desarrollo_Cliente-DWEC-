"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Smartphone {
    constructor(name, on, brand) {
        this.name = name;
        this.on = on;
        this.brand = brand;
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
    getbrand() {
        return this.brand;
    }
    setbrand(brand) {
        this.brand = brand;
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
    toCall() {
        console.log("Teléfono sonando");
    }
}
exports.default = Smartphone;
