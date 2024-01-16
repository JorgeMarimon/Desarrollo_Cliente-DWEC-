"use strict";
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
    constructor(name, surname, age, initialJobDate, finishJobDate, job) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.initialJobDate = initialJobDate;
        this.finishJobDate = finishJobDate;
        this.job = job;
    }
    ;
    getname() {
        return this.name;
    }
    setname(value) {
        this.name = value;
    }
    getsurname() {
        return this.surname;
    }
    setsurname(value) {
        this.surname = value;
    }
    getage() {
        return this.age;
    }
    setage(value) {
        this.age = value;
    }
    getinitialJobDate() {
        return this.initialJobDate;
    }
    setinitialJobDate(value) {
        this.initialJobDate = value;
    }
    getfinishJobDate() {
        return this.finishJobDate;
    }
    setfinishJobDate(value) {
        this.finishJobDate = value;
    }
    getjob() {
        return this.job;
    }
    setjob(value) {
        this.job = value;
    }
    toPrint() {
        if (this.finishJobDate) {
            console.log("El name del empleado es " + this.name + " " + this.surname + ". Su age es de " + this.age + " años. Empezó a trabajar como " + this.job + " en el " + this.initialJobDate + ". Acabó de trabajar en el " + this.finishJobDate + ".");
        }
        else {
            console.log("El name del empleado es " + this.name + " " + this.surname + ". Su age es de " + this.age + " años. Empezó a trabajar como " + this.job + " en el " + this.initialJobDate + ". Sigue en activo.");
        }
    }
}
var employee1 = new Employee("Jorge", "Marimón", 35, new Date('03/01/2009'), null, "Programador");
var employee2 = new Employee("Francis", "Marimón", 34, new Date('15/01/2012'), new Date('03/01/2023'), "Comercial");
employee1.toPrint();
employee2.toPrint();
