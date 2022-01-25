import{ sumar, mostrarResultado, multiplicar } from './calculadora.js';

let resultado = sumar(10,20);
console.log(resultado);

let resultadoMultiplicar = multiplicar(12, 20);
mostrarResultado('multiplicacion', 12, 20, resultadoMultiplicar);