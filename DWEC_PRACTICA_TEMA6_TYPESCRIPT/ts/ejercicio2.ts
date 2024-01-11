/**
 * Se necesita una función llamada contarPalabras que reciba una cadena de texto como parámetro y 
 * cuente la cantidad de palabras que contiene. Se considera que una palabra está delimitada por 
 * espacios en blanco.
 * La función deberá devolver un número que represente la cantidad de palabras presentes en la cadena 
 * de texto proporcionada. Invócala con diferentes textos.
 */
function contarPalabras(valor1: string): number {
    let cantidad: number = 0;
    valor1.split(" ").forEach(element => {
        cantidad++
    });
    return cantidad;
}

console.log(contarPalabras('Me llamo jorge'))
console.log(contarPalabras('La profesora es Maria y tiene un hermano y una hermana'))
console.log(contarPalabras('La hermana de María estudia en Medac'))

/**
 * Crea una función llamada getAvenger que reciba tres parámetros:
Nombre: obligatorio.
Poder opcional.
Arma: por defecto “arco”.
Esta función devuelve un mensaje que describe las habilidades y armamento del superhéroe basado en los parámetros proporcionados. Si se proporciona un poder, se muestra junto con el nombre y el arma. En caso contrario, se indica únicamente el nombre.
Invoca la función varias veces para comprobar que funciona.
 */
function getAvenger(nombre: string, poder?: string, arma: string = "arco"): string {
    if (poder) {
        return "El superhéroe " + nombre + " utiliza siempre la siguiente arma: " + arma + ". Su superpoder es "+poder
    } else {
        return "El superhéroe " + nombre + " utiliza siempre la siguiente arma: " + arma + "."
    }
}

console.log(getAvenger("PitoMan"));
console.log(getAvenger("PitoMan","embarazar con la mirada"));