//Coleccion o estructura de informaacion
/*

let miObjeto = {
// pares de clave valor
    //clave: 'valor'
    nombre: 'Reyna Solis'
}

*/

let nombre = 'Reyna Solis';
//String=conjunto de caracteres
let caracter = 'a';
let string = 'Varios a';
let edad = 25;
let direccion = 'CDMX';
let numero = 123456;

console.log(nombre);

let persona = {
    nombre: {
        Apaterno: 'Solis',
        Amaterno: 'Duran',
        nombre: 'Reyna A.'
    }, 

    edad: 25, 
    direccion: {
        pais: 'Mexico',
        ciudad: 'CDMX', 
        cp: '09100'
    },
    numero: [
        'cel: ', 5554926321,
        'casa: ', 5577710501
    ]
};

// arreglos vs objetos
// almacenar informacion

//   ['valor1', 'valor2', 'valor3'];
//   arreglo[1];

/*
let otroObjeto = {
    nombre: 'Reyna',
    apellidos: 'RASD'
}
*/

otroObjeto.nombre;
console.log(persona);
console.log(persona.nombre);