import DispositivoElectronico from "./interface";

export default class Laptop implements DispositivoElectronico {
    constructor(public nombre: string, public encendido: boolean, public modelo: string) {

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

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
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

    abrirPrograma() {
        console.log("Programa abierto")
    }
}