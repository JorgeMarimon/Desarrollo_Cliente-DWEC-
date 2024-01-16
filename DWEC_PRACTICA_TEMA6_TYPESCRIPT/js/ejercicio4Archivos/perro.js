"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
class Perro extends animal_1.default {
    constructor(name, age, type, breed, adopted) {
        super(name, age, type);
        this.breed = breed;
        this.adopted = adopted;
    }
    getbreed() {
        return this.breed;
    }
    setbreed(breed) {
        this.breed = breed;
    }
    getadopted() {
        return this.adopted;
    }
    setadopted(adopted) {
        this.adopted = adopted;
    }
    toSit() {
        return this.getname + " se sienta.";
    }
}
exports.default = Perro;
