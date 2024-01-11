import Animal from "./animal";

export default class Perro extends Animal{
    private raza:string
    private adoptado:boolean

    constructor(nombre: string, edad: number, tipo: string, raza:string, adoptado:boolean){
        super(nombre,edad,tipo);
        this.raza=raza;
        this.adoptado=adoptado;
    }

    public getRaza(): string {
        return this.raza;
    }

    public setRaza(raza: string): void {
        this.raza = raza;
    }

    public getAdoptado(): boolean {
        return this.adoptado;
    }

    public setAdoptado(adoptado: boolean): void {
        this.adoptado = adoptado;
    }

    public sit():string{
        return this.getNombre+" se sienta."
    }

}
