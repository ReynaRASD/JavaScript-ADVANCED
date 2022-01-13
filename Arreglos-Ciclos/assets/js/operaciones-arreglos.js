
let numeros = new Array();
numeros = [1, 45, 41, 85, 63, 87, 65, 20, 80, 563, 8798];

numeros.forEach(function (numero, indice) {
    document.write(numero + ' - ' + indice + '<br>');
});

//Lo de arriba, es equivalente a lo de abajo:

/* 
for(let i = 0; i < numeros.length ; i = i + 2) {
    document.write(`Segunda forma: ${numeros[i]}<br/><br>`);
}
*/

////////
numeros.forEach( elemento => {
    document.write('<br>' + elemento + '<br>');
});



/////////////////////////////////////////////////

// Funcion map nos permite crear un arreglo a partir de otro arreglo

let numeros2 = numeros.map(function(elemento){
    return elemento;
});

document.write('<br>' + 'Otra forma: ' + numeros2 + '<br>');

/////////////   Ejemplo:
/* 

let frutas = ['Mango', 'Manzana', 'Uva', 'Platano'];
let frutas2 = frutas;

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('Pera'); //Aparece pera en ambas porque apuntan a la misma direccion de memoria
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

*/
// =============

//   Equivale lo de arriba a lo de abajo con la funcion map

let frutas = ['Mango', 'Manzana', 'Uva', 'Platano'];

let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

frutas2.push('Pera');
document.write('<br>' + frutas + '<br>');
document.write('<br>' + frutas2 + '<br>');

///////////////////////////////////////////////////

let precio = [10, 20, 30, 40, 50]

let precios2 = precio.map(function(elemento){
    return elemento * 10;
});

document.write('<br>' + precios2 + '<br>');


///////////////////////////////

/* Includes */

document.write('<br>' + numeros.includes(563) + '<br>'); //Nos data un verdadero porque el elemento si esta dentro de nuestro arreglo.
// Solo para saber si esta el elemento o no.
// true o false

/////////////////////////////////

/* filter */

let numerosPares = numeros.filter((elemento) => {
    if(elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
//cuando el residuo sea 0 de dividir el "elemento" entre 2, lanza un true, de lo contrario lanza un false.
document.write('<br>' + numerosPares + '<br>');

// Otra manera, en vez de usar el if, solo usas el return, lo haremos con numeros mayores a 100.

let numeroMayor = numeros.filter((elemento) => {
    if(elemento > 100 ) {
        return true;
    }
});

document.write('<br>' + numeroMayor + '<br>');


//// Otro ejemplo

let cocktel = ['Platano', 'Papaya', 'Mango', 'Naranja', 'Ponche', 'Tejocote', 'ApruebA', 'Mango2'];

let cocktelFiltro = cocktel.filter((elemento) => {
    if(elemento.includes('a') == true) {
        return true;
    } else {
        return false;
    }
});

document.write('<br>' + cocktelFiltro + '<br>');

////  Si el elemento incluye la letra "a", lo va imprimir. 


///   Otra manera mas corta de hacerlo, es la que sigue:

let cocktelFil = cocktel.filter((elemento) => {
    // return elemento.includes('T');
    return elemento.toLowerCase().includes('a');
});

// toLowerCase es para que sin importar si es mayuscula, tomar en cuenta la letra buscada en minuscula. 
//  Lo contrario es el toUpperCase, cada minuscula la transformara en mayuscula.

document.write('<br>' + cocktelFil + '<br>');


//////////////////////////


/* Sort */

// Ordena los elementos segun la primer cifra. 
// Pero no sirve en si. 

let otrosNumeros =[25, 85, 78, 63, 98, 10, 23, 52, 2365];

document.write('<br>' + otrosNumeros.sort() + '<br>');

/* Reverse */

//Es el sort al reves, invierte el orden de los elementos.
// Pero no sirve en si. 

document.write('<br>' + otrosNumeros.reverse() + '<br>');

/* find */

// Es parecido al filter pero el Find solo devuelve un elemento, el primero que encuentre.
// Tampoco me devuelve un arreglo, me devuelve un string. 

let cocktelEncontrada = cocktel.find((elemento) => {
    return elemento.includes('g');
});

document.write('<br>' + cocktelEncontrada + '<br>');

