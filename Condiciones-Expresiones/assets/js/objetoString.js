//
let cadena1 ='Hola';
//document.write(cadena1);
console.log(cadena1);

let cadena2 = new String('Adios');
// Esta forma de crearlo es un objeto String
//document.write('<br>' + cadena2);
console.log(cadena2);

//let arreglo = new Array(1, 5);
//console.log(arreglo);

// includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes('a'));

//convierte a minusculas o mayusculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//cohersion y conversion

//  cohersion = JavaScript convierte en automatico un tipo de dato en otro

console.log(cadena1.toLowerCase());

////////////////////////////

/*            Split              */

/*    Funcion que recibe una palabra y la regresa invertida */


let palabra = "Hola Mundo";
let arreglo = palabra.split("");
console.log(arreglo);

let arregloInvertido = arreglo.reverse();
console.log(arregloInvertido);
console.log(arregloInvertido.reverse());



function invertirPalabra(cadena) {
    let arreglo = cadena.split(""); //convitiendo la cadena en un arreglo
    arreglo.reverse(); //invirtiendo el arreglo
    let cadenaInvertida = arreglo.join(""); //une los elementos de un arreglo
    return console.log(cadenaInvertida);
}

invertirPalabra("Generetion");




    