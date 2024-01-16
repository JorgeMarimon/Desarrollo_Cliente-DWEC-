"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const laptop_1 = __importDefault(require("./laptop"));
const smartphone_1 = __importDefault(require("./smartphone"));
var laptop = new laptop_1.default("lenovo", true, "Yoga");
var smartphone = new smartphone_1.default("GT3", false, "Huawei");
laptop.toOpenProgramme();
laptop.turnOn();
laptop.turnOff();
smartphone.turnOff();
smartphone.turnOn();
smartphone.toCall();
