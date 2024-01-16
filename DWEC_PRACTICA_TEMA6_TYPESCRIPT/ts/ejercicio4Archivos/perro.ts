import Animal from "./animal";

export default class Perro extends Animal{
    private breed:string
    private adopted:boolean

    constructor(name: string, age: number, type: string, breed:string, adopted:boolean){
        super(name,age,type);
        this.breed=breed;
        this.adopted=adopted;
    }

    public getbreed(): string {
        return this.breed;
    }

    public setbreed(breed: string): void {
        this.breed = breed;
    }

    public getadopted(): boolean {
        return this.adopted;
    }

    public setadopted(adopted: boolean): void {
        this.adopted = adopted;
    }

    public toSit():string{
        return this.getname+" se sienta."
    }

}
