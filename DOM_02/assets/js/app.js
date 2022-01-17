/*
let titulo = document.getElementById("titulo");
titulo.textContent = 'Desde JavaScript';
*/

let $titulo = document.querySelector('h1');
//En este caso podemos poner h1, #titulo, o el nombre de la clase, parecido a CSS
// clase, id, etiqueta
$titulo.textContent = 'Desde JavaScript 2';

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);

/*
$parrafos.forEach((parrafo1,indice)=>{
    parrafo1.textContent = `Parrafo modificado ${indice}`;
})
*/



// PASO 1
//permite crear un elemento en memoria
let subtitulo = document.createElement('h3');
// PASO 2
// esto lo modifica
subtitulo.textContent = 'Este es un subtitulo desde JS';
//PASO 3
//lo agregas al body del HTML
//document.body.append(subtitulo);
// Paso 3.1
$titulo.insertAdjacentElement("afterend", subtitulo);
//Esto es para posicionamiento

$titulo.remove();
//esto es para borrar



////////////////////
let $contenido = document.querySelector('#contenido');
//console.log($contenido.textContent = 'Hola');
//el textContent no nos permite etiquetas HTML como <br>, es para exclusivamente texto
//console.log($contenido.innerHTML = 'Hello');
//console.log($contenido.outerHTML = 'Hello 2');

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);