"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
class Pajaro extends animal_1.default {
    constructor(nombre, edad, tipo, raza, localizador, id) {
        super(nombre, edad, tipo);
        this.raza = raza;
        this.localizador = localizador;
        this.id = id;
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    getLocalizador() {
        return this.localizador;
    }
    setlocalizador(localizador) {
        this.localizador = localizador;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    sit() {
        return this.getNombre() + " se sienta.";
    }
    rastrearPajaro() {
        if (this.localizador) {
            return "El pájaro se puede rastrear. Su ID de rastreo es: " + this.id;
        }
        else {
            return "El pájaro no posee un rastreador. Se recomienda añadir uno primero.";
        }
    }
}
exports.default = Pajaro;
