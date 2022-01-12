/*
flujo orden en que se ejecutan las delcaraciones
*/

let miVariable = 10;
console.log(miVariable);

/*
Estructuras de control de flujo
 */

let edad = 19;
let tienesINE = false;

console.log(edad);

if(edad >= 18 || tienesINE == true) {
    console.log('Puedes entrar.');
} /*
    else{
    console.log('Puedes entrar, pero no le digas a nadie.');
}
*/




/*
             Operador ternario u operador Elvis:


(Condicion a evaluar) 
? se ejecuta si es verdadero 
: se ejecuta si es falso;

*/

//Ejemplo:

let edad1 = 17;

(edad >= 18) 
    ? console.log('Mayor de edad.')  //se ejecuta si cumple la condicion
    : console.log('Menor de edad.'); //se ejecuta si la condicion es falsa




let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? "Mayor" : "Menor"} de edad`;

console.log(preguntaEdad);


// Otro:

let dia = 5;

if(dia === 0){
    console.log('Domingo');
}
else if(dia === 1){
    console.log('Lunes');
}
else if(dia === 2){
    console.log('Martes');
}
else if(dia === 3){
    console.log('Miercoles');
}
else if(dia === 4){
    console.log('Jueves');
}
else if(dia === 5){
    console.log('Viernes');
}
else if(dia === 6){
    console.log('Sabado');
}else{
    console.log('No es un dia.');
}


//HACER LO DE ARRIBA PERO MAS SIMPLE:

//                         Switch - case

/*

switch(variable a evaluar){
    case valor:
        - codigo a ejecutar -
    break;
    case valor:
        - codigo a ejecutar -
    break;
    default:
        -codigo a ejecutar si sale de las opciones -
        break;
}

*/

let day = 2;

switch(day){
case 0:
    console.log('Domingo');
break;
case 1:
    console.log('Lunes');
break;
case 2:
    console.log('Martes');
break;
case 3:
    console.log('Miercoles');
break;
case 4:
    console.log('Jueves');
break;
case 5:
    console.log('Viernes');
break;
case 6:
    console.log('Sabado');
break;
default:
    console.log('No es un dia.');
break;
}

// Otro ejemplo:


let cuponDescuento = "Plata";
let descuento;

//console.log(descuento);  mostrara un Undefined

switch(cuponDescuento){
    case 'Bronce':
    descuento = 5;
    break;
    case 'Plata':
        descuento = 10;
    break;
    case 'Oro':
        descuento = 15;
        break;
    default:
        console.log('Cupon invalido');
    break;
}

console.log(descuento);