let nombre = 'Reyna Solis';
let edad = 25;
let tienesTrabajo = false;
let variableNull = null;
let variableUndefined;

console.log(typeof(nombre)); //String o cadena
console.log(typeof(edad)); //Number
console.log(typeof(tienesTrabajo)); //Boolean
console.log(typeof(variableNull)); //Null
console.log(typeof(variableUndefined)); //Undefined

console.log(variableNull === variableUndefined);
console.log('1' === 1);
//operador estricto
console.log(0 === false);

console.log(typeof(10 + 10)); //number
console.log(typeof('10' + true)); //string
console.log(typeof('11')); //string
console.log(typeof(parseInt('1234'))); //number

let numero = 15; //convertir numbero a un string
console.log(numero.toString()); //string