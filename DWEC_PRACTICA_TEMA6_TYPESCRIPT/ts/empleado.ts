/**
 * Crea un nuevo archivo TS, llamado empleado.ts. En este se definirá una clase Employee con las
 *  siguientes características:
 * Tendrá varios atributos: nombre, apellido, edad, fecha de inicio del trabajo, una fecha de finalización 
 * (podrá ser nula) y la profesión.
 * Crea su constructor.
 * Crea los métodos get y set para cada uno de los atributos.
 * Crea dos empleados, uno que tenga fecha de finalización y otro que no la tenga ya que continúa 
 * trabajando, pinta por consola el nombre y la edad de cada uno de ellos.
 */
class Employee {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fechaInicioTrabajo: Date;
    private fechaFinTrabajo: Date | null;
    private profesion: string;


    constructor(nombre: string, apellido: string, edad: number, fechaInicioTrabajo: Date, fechaFinTrabajo: Date | null, profesion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicioTrabajo = fechaInicioTrabajo;
        this.fechaFinTrabajo = fechaFinTrabajo;
        this.profesion = profesion
    };

    public getnombre(): string {
        return this.nombre;
    }
    public setnombre(value: string) {
        this.nombre = value;
    }
    public getapellido(): string {
        return this.apellido;
    }
    public setapellido(value: string) {
        this.apellido = value;
    }
    public getedad(): number {
        return this.edad;
    }
    public setedad(value: number) {
        this.edad = value;
    }
    public getfechaInicioTrabajo(): any {
        return this.fechaInicioTrabajo;
    }
    public setfechaInicioTrabajo(value: any) {
        this.fechaInicioTrabajo = value;
    }
    public getfechaFinTrabajo(): any | null {
        return this.fechaFinTrabajo;
    }
    public setfechaFinTrabajo(value: any | null) {
        this.fechaFinTrabajo = value;
    }
    public getprofesion(): string {
        return this.profesion;
    }
    public setprofesion(value: string) {
        this.profesion = value;
    }

    public imprimir(): void {
        if (this.fechaFinTrabajo) {
            console.log("El nombre del empleado es " + this.nombre + " " + this.apellido + ". Su edad es de " + this.edad + " años. Empezó a trabajar como " + this.profesion + " en el " + this.fechaInicioTrabajo + ". Acabó de trabajar en el " + this.fechaFinTrabajo + ".")

        } else {
            console.log("El nombre del empleado es " + this.nombre + " " + this.apellido + ". Su edad es de " + this.edad + " años. Empezó a trabajar como " + this.profesion + " en el " + this.fechaInicioTrabajo + ". Sigue en activo.")

        }
    }
}

var empleado1: Employee = new Employee("Jorge", "Marimón", 35, new Date('03/01/2009'), null, "Programador")
var empleado2: Employee = new Employee("Francis", "Marimón", 34, new Date('15/01/2012'), new Date('03/01/2023'), "Comercial")

empleado1.imprimir();
empleado2.imprimir();

