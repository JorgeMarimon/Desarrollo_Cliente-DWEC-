/**
 * Se define un tipo llamado ranking, que es una tupla que contiene tres elementos: un número, 
 * una cadena de texto y un booleano. Esta tupla representará un registro en el ranking de un juego.
 */
type ranking = [number, string, boolean];

/**
 * Se declaran varias variables: 
position: como un número, que almacenará la posición del jugador en el ranking.
playerName: como una cadena de texto, que contendrá el nombre del jugador.
finishedGame: como un booleano, indicando si el jugador ha finalizado el juego o no.
ranking: como una variable del tipo ranking, que almacenará temporalmente la información de posición, 
nombre y estado del juego del jugador.
hallOfranking: como un array de ranking inicializado como vacío, que representará el conjunto de rankings 
de los jugadores.
 */
var position: number;
var playerName: string;
var finishedGame: boolean;
var hallOfranking: Array<ranking> = [];

/**
 * Se crea un ranking para dos jugadores específicos:
Se asignan valores a position, playerName y finishedGame.
Se crea la tupla ranking con estos valores.
Se añade esta tupla al array hallOfranking utilizando el método push().
 */
position = 7;
playerName = "Jorge";
finishedGame = true;
var jugador1: ranking = [position, playerName, finishedGame];

position = 11;
playerName = "Paco";
finishedGame = false;
var jugador2: ranking = [position, playerName, finishedGame];

hallOfranking.push(jugador1, jugador2);

/**
 * Se define una función llamada printrankings que recibe un array de ranking como parámetro. 
 * Esta función no devuelve ningún valor (void). Su objetivo es imprimir en la consola cada 
 * ranking del array proporcionado.
 */
function printrankings(valor1: ranking[]): void {
    valor1.forEach(element => {
        console.log(element)
    });
}

/**
 * Se invoca la función printrankings pasando como argumento el arreglo hallOfranking, lo que dará como 
 * resultado en la consola de los rankings de los jugadores almacenados en dicho array.
 */
printrankings(hallOfranking)