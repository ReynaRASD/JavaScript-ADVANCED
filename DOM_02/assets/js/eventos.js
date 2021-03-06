let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document. querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

// addEventListener => agrega un evento al elemento
$btnMensaje.addEventListener('click', () => {
    // funcion anonima
    console.log('No me presiones');
});

$mensaje.addEventListener('keydown', (e) => {
    console.log(e.target.value);
    
    if(e.target.value.length < 3 ) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else{
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    }
    
    //console.log(e);
});

// Otra forma de hacerlo sin una funcion anonima [pero si externa es:
/* 
$mensaje.addEventListener('keydown', mostrarConsole);
function mostrarConsole() {
    console.log('Deja de escribir');
};
*/
