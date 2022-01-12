let saludo = document.getElementById('saludo');

function cambiarNombre() {
    let nombre = prompt ('Escribe tu nombre: ');
    if (nombre != null) {
        saludo.textContent = 'Hola  ' + nombre;
    }
    else{
        saludo.textContent = 'Hola';
    }
}
