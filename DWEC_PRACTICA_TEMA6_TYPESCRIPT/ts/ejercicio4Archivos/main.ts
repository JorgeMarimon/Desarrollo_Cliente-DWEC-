import Animal from "./animal";
import Perro from "./perro";
import Pajaro from "./pajaro";

var gato:Animal=new Animal("Suki",7,"MeinKun")

var perro:Perro=new Perro("Jero",14,"perro","mestizo",true)
var pajaro:Pajaro=new Pajaro("Perico",3,"pajaro","canario",true,77)
var pajaro2:Pajaro=new Pajaro("Ramoncín",6,"pajaro","loro",false)

console.log(gato.toMakeNoise());
console.log(perro.toSit());
console.log(pajaro.toSearchBird())
console.log(pajaro2.toSearchBird())
