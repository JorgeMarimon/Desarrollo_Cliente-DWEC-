"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
class Perro extends animal_1.default {
    constructor(nombre, edad, tipo, raza, adoptado) {
        super(nombre, edad, tipo);
        this.raza = raza;
        this.adoptado = adoptado;
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    getAdoptado() {
        return this.adoptado;
    }
    setAdoptado(adoptado) {
        this.adoptado = adoptado;
    }
    sit() {
        return this.getNombre + " se sienta.";
    }
}
exports.default = Perro;
