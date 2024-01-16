"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
class Pajaro extends animal_1.default {
    constructor(name, age, type, breed, locator, id) {
        super(name, age, type);
        this.breed = breed;
        this.locator = locator;
        this.id = id;
    }
    getbreed() {
        return this.breed;
    }
    setbreed(breed) {
        this.breed = breed;
    }
    getlocator() {
        return this.locator;
    }
    setlocator(locator) {
        this.locator = locator;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    sit() {
        return this.getname() + " se sienta.";
    }
    toSearchBird() {
        if (this.locator) {
            return "El pájaro se puede rastrear. Su ID de rastreo es: " + this.id;
        }
        else {
            return "El pájaro no posee un rastreador. Se recomienda añadir uno primero.";
        }
    }
}
exports.default = Pajaro;
