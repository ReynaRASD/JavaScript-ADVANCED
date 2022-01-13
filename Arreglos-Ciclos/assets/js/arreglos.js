/*
const numeros = [5];
*/

let numeros = new Array();
numeros = [1, 45, 41, 85, 63, 87, 65, 20, 80, 563, 8798];

document.write('Primer forma:' + numeros[6] + '<br>' + '<br>');

for(let i = 0; i < numeros.length ; i = i + 2) {
    document.write(`Segunda forma: ${numeros[i]}<br/><br>`);
}

//Otra manera

for(let i = 0; i < numeros.length ; i++) {
    const numero = numeros[i];
    document.write('Tercer forma: ' + numero + '<br>');
}