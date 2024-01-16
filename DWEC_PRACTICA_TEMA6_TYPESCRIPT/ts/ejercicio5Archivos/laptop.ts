import DispositivoElectronico from "./interface";

export default class Laptop implements DispositivoElectronico {
    constructor(public name: string, public on: boolean, public model: string) {

    }

    public getname(): string {
        return this.name;
    }

    public setname(name: string): void {
        this.name = name;
    }

    public geton(): boolean {
        return this.on;
    }

    public seton(on: boolean): void {
        this.on = on;
    }

    public getmodel(): string {
        return this.model;
    }

    public setmodel(model: string): void {
        this.model = model;
    }

    turnOn() {
        if (this.on = true) {
            console.log("El dispositivo ya está on")
        } else {
            console.log("Dispositivo on")
        }
    }

    turnOff() {
        if (this.on = false) {
            console.log("El dispositivo ya está apagado")
        } else {
            console.log("Dispositivo apagado")
        }
    }

    toOpenProgramme() {
        console.log("Programa abierto")
    }
}