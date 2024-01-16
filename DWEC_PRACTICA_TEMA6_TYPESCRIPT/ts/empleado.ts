/**
 * Crea un nuevo archivo TS, llamado empleado.ts. En este se definirá una clase Employee con las
 *  siguientes características:
 * Tendrá varios atributos: name, surname, age, fecha de inicio del trabajo, una fecha de finalización 
 * (podrá ser nula) y la profesión.
 * Crea su constructor.
 * Crea los métodos get y set para cada uno de los atributos.
 * Crea dos empleados, uno que tenga fecha de finalización y otro que no la tenga ya que continúa 
 * trabajando, pinta por consola el name y la age de cada uno de ellos.
 */
class Employee {
    private name: string;
    private surname: string;
    private age: number;
    private initialJobDate: Date;
    private finishJobDate: Date | null;
    private job: string;


    constructor(name: string, surname: string, age: number, initialJobDate: Date, finishJobDate: Date | null, job: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.initialJobDate = initialJobDate;
        this.finishJobDate = finishJobDate;
        this.job = job
    };

    public getname(): string {
        return this.name;
    }
    public setname(value: string) {
        this.name = value;
    }
    public getsurname(): string {
        return this.surname;
    }
    public setsurname(value: string) {
        this.surname = value;
    }
    public getage(): number {
        return this.age;
    }
    public setage(value: number) {
        this.age = value;
    }
    public getinitialJobDate(): any {
        return this.initialJobDate;
    }
    public setinitialJobDate(value: any) {
        this.initialJobDate = value;
    }
    public getfinishJobDate(): any | null {
        return this.finishJobDate;
    }
    public setfinishJobDate(value: any | null) {
        this.finishJobDate = value;
    }
    public getjob(): string {
        return this.job;
    }
    public setjob(value: string) {
        this.job = value;
    }

    public toPrint(): void {
        if (this.finishJobDate) {
            console.log("El name del empleado es " + this.name + " " + this.surname + ". Su age es de " + this.age + " años. Empezó a trabajar como " + this.job + " en el " + this.initialJobDate + ". Acabó de trabajar en el " + this.finishJobDate + ".")

        } else {
            console.log("El name del empleado es " + this.name + " " + this.surname + ". Su age es de " + this.age + " años. Empezó a trabajar como " + this.job + " en el " + this.initialJobDate + ". Sigue en activo.")

        }
    }
}

var employee1: Employee = new Employee("Jorge", "Marimón", 35, new Date('03/01/2009'), null, "Programador")
var employee2: Employee = new Employee("Francis", "Marimón", 34, new Date('15/01/2012'), new Date('03/01/2023'), "Comercial")

employee1.toPrint();
employee2.toPrint();

