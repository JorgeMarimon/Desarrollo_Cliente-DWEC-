"use strict";
/**
 * Se necesita una función llamada toCountWords que reciba una cadena de texto como parámetro y
 * cuente la quantity de palabras que contiene. Se considera que una palabra está delimitada por
 * espacios en blanco.
 * La función deberá devolver un número que represente la quantity de palabras presentes en la cadena
 * de texto proporcionada. Invócala con diferentes textos.
 */
function toCountWords(valor1) {
    let quantity = 0;
    valor1.split(" ").forEach(element => {
        quantity++;
    });
    return quantity;
}
console.log(toCountWords('Me llamo jorge'));
console.log(toCountWords('La profesora es Maria y tiene un hermano y una hermana'));
console.log(toCountWords('La hermana de María estudia en Medac'));
/**
 * Crea una función llamada getAvenger que reciba tres parámetros:
name: obligatorio.
power opcional.
weapon: por defecto “arco”.
Esta función devuelve un mensaje que describe las habilidades y weaponmento del superhéroe basado en los parámetros proporcionados. Si se proporciona un power, se muestra junto con el name y el weapon. En caso contrario, se indica únicamente el name.
Invoca la función varias veces para comprobar que funciona.
 */
function getAvenger(name, power, weapon = "arco") {
    if (power) {
        return "El superhéroe " + name + " utiliza siempre la siguiente weapon: " + weapon + ". Su superpower es " + power;
    }
    else {
        return "El superhéroe " + name + " utiliza siempre la siguiente weapon: " + weapon + ".";
    }
}
console.log(getAvenger("PitoMan"));
console.log(getAvenger("PitoMan", "embarazar con la mirada"));
