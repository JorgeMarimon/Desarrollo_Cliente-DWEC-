export default class Animal {
    private name: string;
    private age: number;
    private type: string;

    constructor(name: string, age: number, type: string) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    public getname(): string {
        return this.name;
    }

    public setname(name: string): void {
        this.name = name;
    }

    public getage(): number {
        return this.age;
    }

    public setage(age: number): void {
        this.age = age;
    }

    public gettype(): string {
        return this.type;
    }

    public settype(type: string): void {
        this.type = type;
    }

    public toMakeNoise():string{
        return "Ruido del animal"
    }

}
