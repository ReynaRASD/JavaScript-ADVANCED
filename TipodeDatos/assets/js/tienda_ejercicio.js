//Producto
// TIENDA DE VESTIDOS

let precio = document.getElementById('precio');


let vestido = {
    tamaño: {
        Corto: 'Menor de 120 cm',
        Largo: 'Mayor a 120 cm'
    }, 

    Proposito:{
        FiestaDia: 'Colores claros',
        FiestaNoche: 'Colores oscuros',
        Graduacion: 'Colores oscuros',
        Damas: 'Todos los colores', 
        Boda: 'Colores claros'
    },

    Colores:{
        Todos:{
        Claros: ['Menta', 'Amarillo', 'Naranja', 'Fiusha', 'Blanco', 'Hueso', 'Turqueza'], 
        Oscuros: ['Vino', 'Azul', 'Negro', 'Rey', 'Marino']
    }
    },

    Tallas:{
        Chicas: ['0', '1', '3', '5'],
        Medianas: ['7', '9', '11'],
        Grandes: ['13', '15', '17'],
        Extras: ['19', '21', '23']
    }
}

console.log(vestido);
console.log(vestido.Colores.Todos.Claros[2]); //Naranja

function calcular() {

    let servicio = 100;
    //PRECIOS
    //tamano
    let corto = 500;
    let largo = 1000;
    
    let dato1 = parseInt(prompt ('¿Quieres vestido corto? Responde si (1) / no (2): '));
    
    if (dato1 === 1) {

        precio1 = servicio + corto;
        precio.textContent = 'El precio por vestido corto es: $' + precio1;
    }
    else{
        precio1 = servicio + largo;
        precio.textContent = 'El precio por vestido largo es: $' + precio1;

    }

}


function calcular1() {

        let servicio = 100;
        //PRECIOS
        //colores
        let claro = 400;
        let oscuro = 600;
        
        let dato2 = parseInt(prompt ('¿Quieres un color claro? Responde si (1) / no (2): '));
        
        if (dato2 === 1) {
    
            precio2 = servicio + claro;
            precioo.textContent = 'El precio por vestido claro es: $' + precio2;
        }
        else{
            precio2 = servicio + oscuro;
            precioo.textContent = 'El precio por vestido oscuro es: $' + precio2;
    
        }
    
}

function calcular2() {

        let servicio = 100;
        //PRECIOS
        //tallas
        let chica = 500;
        let mediana = 600;
        let grande = 700;
        let extra = 800;
        
        let dato3 = parseInt(prompt ('Escoge el numero segun la talla que te consideres: Chica (1), Mediana (2), Grande (3), Extra (4) '));
        
        if (dato3 === 1) {
    
            precio3 = servicio + chica;
            preciooo.textContent = 'El precio por vestido talla Chica es: $' + precio3;
        }
        else if (dato3 === 2) {
            precio3 = servicio + mediana;
            preciooo.textContent = 'El precio por vestido talla Mediana es: $' + precio3;
    
        }
        else if (dato3 === 3) {
            precio3 = servicio + grande;
            preciooo.textContent = 'El precio por vestido talla Grande es: $' + precio3;
    
        }
        else if (dato3 === 4) {
            precio3 = servicio + extra;
            preciooo.textContent = 'El precio por vestido talla Extra es: $' + precio3;
    
        }
    
}

function suma(){
    
    sumar = precio1 + precio2 + precio3;
    
    total.textContent = 'El Total de tu expectativa de vestido es: $' + sumar;
}

