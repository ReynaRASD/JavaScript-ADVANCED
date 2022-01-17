let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');

$texto.id = 'texto';
//Este texto ya tiene un id, a traves de JS.
//$texto.style = 'color: blue; font-size: 24px';
//Es muy poco comun cambiar el estilo desde JS
//Es mas comun hacer hacer clases y hacer diseño en CSS
$texto.className = 'bg-purple h3';
//Si quieres colocar mas de una clase, solo es separada entre espacios, si la aumentas abajo solo remplazara la clase anteior

$texto.classList.add('text-center');
//Esto es para añadir una clase y no borrar las demas

$texto.classList.remove('h3');