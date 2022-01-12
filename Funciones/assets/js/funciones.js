/*       FUNCIONES
Bloque de codigo reutilizable
Puede tener o no parametros de entrada
Puede devolver o no un valor.
*/

function sumar(numero1, numero2){
    //Operaciones o codigo a ejecutar
    return numero1 + numero2;
    console.log('Hola desde la Funcion');
}

function restar(numero1, numero2){
    
    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
}


let numero1 = parseInt(prompt('Numero 1: '));
let numero2 = parseInt(prompt('Numero 2: '));
let sumaNumeros = sumar(numero1,numero2); 

document.write(`La suma de ${numero1} y ${numero2} es ${sumaNumeros} <br>`);
//template string
// ` comilla invertida o backstick

restar(numero1, numero2);

//Equivala a esto, pero es mas practica la de arriba.
document.write('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + sumaNumeros);

