"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
    getage() {
        return this.age;
    }
    setage(age) {
        this.age = age;
    }
    gettype() {
        return this.type;
    }
    settype(type) {
        this.type = type;
    }
    toMakeNoise() {
        return "Ruido del animal";
    }
}
exports.default = Animal;
