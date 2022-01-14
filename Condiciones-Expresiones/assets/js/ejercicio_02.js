/*
Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado

*/
let fijo = 75;

var adivina = () => {
    numero = parseInt(document.getElementById('number').value);
    resta = Math.abs(fijo - numero);
    if(resta === 0){
        saludo.innerHTML = `Ganaste!!!`;
    }else if(resta <= 5) {
        saludo.innerHTML = `Calienteeeeeeeeeeeeeeeee`;
    }else if(resta <= 10) {
        saludo.innerHTML = `Calienteeeeeee`;
    }else if(resta <= 20) {
        saludo.innerHTML = `Tibioo`;
    }else if(resta <= 30) {
        saludo.innerHTML = `Frio`;
    }else {
        saludo.innerHTML = `Congelado`;
    }
} 