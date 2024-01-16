import Almacen from "./almacen";

const almacenNumeros: Almacen<number> = new Almacen<number>();
almacenNumeros.toAddElement(7);
almacenNumeros.toAddElement(88);
almacenNumeros.toListElement();
console.log("Elemento en la posición 1:", almacenNumeros.toGetElement(0));
console.log("Elemento en la posición 2:", almacenNumeros.toGetElement(1));


const almacenCoches: Almacen<string> = new Almacen<string>();
almacenCoches.toAddElement("Renault");
almacenCoches.toAddElement("Skoda");
almacenCoches.toListElement();
console.log("Elemento en la posición 1:", almacenCoches.toGetElement(0));
console.log("Elemento en la posición 2:", almacenCoches.toGetElement(1));


const almacenAlumnos: Almacen<{ nombre: string, edad: number }> = new Almacen<{ nombre: string, edad: number }>();
almacenAlumnos.toAddElement({ nombre: "Jose", edad: 16 });
almacenAlumnos.toAddElement({ nombre: "Marta", edad: 31 });
almacenAlumnos.toListElement();
console.log("Elemento en la posición 1:", almacenAlumnos.toGetElement(0));
console.log("Elemento en la posición 2:", almacenAlumnos.toGetElement(1));