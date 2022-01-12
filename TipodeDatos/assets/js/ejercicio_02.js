

//1. Almacenar el año actual en una variable. Pedirle al usuario su año de nacimiento y calcular su edad.

let saludo = document.getElementById('saludo');
let borrar = document.getElementById('borrar');

function calcularEdad() {

    let actual = 2022;
    let anio = parseInt(prompt ('Año de Nacimiento: '));
    if (anio < 2022) {
        saludo.textContent = 'Tu edad es: ' + (actual - anio) + ' , o estas a unos meses de cumplirlos.';
        borrar.textContent = '¡Vuelve pronto!';
    }
    else{
        saludo.textContent = 'Dato no valido. Ingresa un numero menor a 2022, que es el año actual.';
        borrar.textContent = 'Intentalo de nuevo.';
    }
}