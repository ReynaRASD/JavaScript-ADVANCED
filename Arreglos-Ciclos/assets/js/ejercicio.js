let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let sum = 0;

for (let i =0; i < numeros.length; i ++){
    sum += numeros[i];
    prom = sum / numeros.length; 
}

document.write('Los numeros de tu arreglo son: ' + numeros + '.' + '<br>');

document.write('<br>' + 'En total son: ' + numeros.length + ' numeros.' + '<br>');

document.write('<br>' + 'La suma total de los numeros es: ' + sum + '.' + '<br>');

document.write('<br>' + 'El promedio de los numeros es: ' + prom + '.' + '<br>');


