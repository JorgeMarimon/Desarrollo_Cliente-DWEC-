import Animal from "./animal";

export default class Pajaro extends Animal {
    private breed: string
    private locator: boolean
    private id?: number

    constructor(name: string, age: number, type: string, breed: string, locator: boolean, id?: number) {
        super(name, age, type);
        this.breed = breed;
        this.locator = locator;
        this.id = id;
    }

    public getbreed(): string {
        return this.breed;
    }

    public setbreed(breed: string): void {
        this.breed = breed;
    }

    public getlocator(): boolean {
        return this.locator;
    }

    public setlocator(locator: boolean): void {
        this.locator = locator;
    }

    public getId(): number|undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public sit(): string {
        return this.getname() + " se sienta."
    }

    public toSearchBird(): string {
        if (this.locator) {
            return "El pájaro se puede rastrear. Su ID de rastreo es: " + this.id
        } else {
            return "El pájaro no posee un rastreador. Se recomienda añadir uno primero."
        }
    }
}
