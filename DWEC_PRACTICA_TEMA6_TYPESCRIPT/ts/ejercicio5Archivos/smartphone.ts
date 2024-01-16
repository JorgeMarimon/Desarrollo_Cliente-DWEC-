import DispositivoElectronico from "./interface";

export default class Smartphone implements DispositivoElectronico {
    constructor(public nombre: string, public encendido: boolean, public marca: string) {
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEncendido(): boolean {
        return this.encendido;
    }

    public setEncendido(encendido: boolean): void {
        this.encendido = encendido;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    encender() {
        if (this.encendido = true) {
            console.log("El dispositivo ya está encendido")
        } else {
            console.log("Dispositivo encendido")
        }
    }

    apagar() {
        if (this.encendido = false) {
            console.log("El dispositivo ya está apagado")
        } else {
            console.log("Dispositivo apagado")
        }
    }

    llamar() {
        console.log("Teléfono sonando")
    }
}