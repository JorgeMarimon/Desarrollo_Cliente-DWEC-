import Animal from "./animal";

export default class Pajaro extends Animal {
    private raza: string
    private localizador: boolean
    private id?: number

    constructor(nombre: string, edad: number, tipo: string, raza: string, localizador: boolean, id?: number) {
        super(nombre, edad, tipo);
        this.raza = raza;
        this.localizador = localizador;
        this.id = id;
    }

    public getRaza(): string {
        return this.raza;
    }

    public setRaza(raza: string): void {
        this.raza = raza;
    }

    public getLocalizador(): boolean {
        return this.localizador;
    }

    public setlocalizador(localizador: boolean): void {
        this.localizador = localizador;
    }

    public getId(): number|undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public sit(): string {
        return this.getNombre() + " se sienta."
    }

    public rastrearPajaro(): string {
        if (this.localizador) {
            return "El pájaro se puede rastrear. Su ID de rastreo es: " + this.id
        } else {
            return "El pájaro no posee un rastreador. Se recomienda añadir uno primero."
        }
    }
}
