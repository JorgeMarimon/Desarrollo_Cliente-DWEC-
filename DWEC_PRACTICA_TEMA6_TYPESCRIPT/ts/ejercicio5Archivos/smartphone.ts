import DispositivoElectronico from "./interface";

export default class Smartphone implements DispositivoElectronico {
    constructor(public name: string, public on: boolean, public brand: string) {
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

    public getbrand(): string {
        return this.brand;
    }

    public setbrand(brand: string): void {
        this.brand = brand;
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

    toCall() {
        console.log("Teléfono sonando")
    }
}