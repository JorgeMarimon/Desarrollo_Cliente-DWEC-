/**
 * Se necesita modelar una interfaz para definir la estructura de objetos que representan dispositivos electrónicos. Se solicita crear una interfaz llamada DispositivoElectronico que describa los atributos y métodos comunes a todos los dispositivos electrónicos. La interfaz debe incluir al menos los siguientes elementos:
Atributos:
name: Tipo string para representar el name del dispositivo.
on: Tipo boolean para indicar si el dispositivo está on o apagado.
Métodos:
encender: Método para encender el dispositivo.
apagar: Método para apagar el dispositivo.

 */

export default interface DispositivoElectronico{
    name:string;
    on:boolean;

    turnOn:()=>void;
    turnOff:()=>void;
}