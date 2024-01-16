"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
const perro_1 = __importDefault(require("./perro"));
const pajaro_1 = __importDefault(require("./pajaro"));
var gato = new animal_1.default("Suki", 7, "MeinKun");
var perro = new perro_1.default("Jero", 14, "perro", "mestizo", true);
var pajaro = new pajaro_1.default("Perico", 3, "pajaro", "canario", true, 77);
var pajaro2 = new pajaro_1.default("Ramoncín", 6, "pajaro", "loro", false);
console.log(gato.toMakeNoise());
console.log(perro.toSit());
console.log(pajaro.toSearchBird());
console.log(pajaro2.toSearchBird());
