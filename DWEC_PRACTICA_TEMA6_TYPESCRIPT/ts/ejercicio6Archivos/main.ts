import Almacen from "./almacen";

const almacenNumeros: Almacen<number> = new Almacen<number>();
almacenNumeros.agregarElemento(7);
almacenNumeros.agregarElemento(88);
almacenNumeros.listarElementos();
console.log("Elemento en la posición 1:", almacenNumeros.obtenerElemento(0));
console.log("Elemento en la posición 2:", almacenNumeros.obtenerElemento(1));


const almacenCoches: Almacen<string> = new Almacen<string>();
almacenCoches.agregarElemento("Renault");
almacenCoches.agregarElemento("Skoda");
almacenCoches.listarElementos();
console.log("Elemento en la posición 1:", almacenCoches.obtenerElemento(0));
console.log("Elemento en la posición 2:", almacenCoches.obtenerElemento(1));


const almacenAlumnos: Almacen<{ nombre: string, edad: number }> = new Almacen<{ nombre: string, edad: number }>();
almacenAlumnos.agregarElemento({ nombre: "Jose", edad: 16 });
almacenAlumnos.agregarElemento({ nombre: "Marta", edad: 31 });
almacenAlumnos.listarElementos();
console.log("Elemento en la posición 1:", almacenAlumnos.obtenerElemento(0));
console.log("Elemento en la posición 2:", almacenAlumnos.obtenerElemento(1));