/*    Operadores aritmeticos    */

//     + - / * % 

let operacion = 3 * 5 + (10 - 5);

document.write(operacion);

let operacion2 = 3 - 5 / 2 * 4;

document.write('<br>' + operacion2);


/*    Operadores relacionales    */
//    <, >, >=, <=, ==, ===, !=, !==
//  Dan como resultado un booleano (true or false)

document.write('<br>' + (7 < 7));
document.write('<br>' + (7 <= 7));
document.write('<br>' + (7 == '7')); // Compara solo el valor, no el tipo de dato, por eso da true.
document.write('<br>' + (7 === '7'));  //El estricto si compara el tipo de dato, por eso da false.

document.write('<br>' + (7 != '7'));  // Operador de diferencia
document.write('<br>' + (7 !== '7'));  // Operador de diferencia estricto

/*    Incremento y decremento    */
//   +=, -=, *=, /=

let incremento = 5;
incremento += 5;  // incremento = incremento + 5;
document.write('<br>' + incremento);  //10

incremento -= 5;
document.write('<br>' + incremento);  //5

incremento *= 5;
document.write('<br>' + incremento);  //25

incremento /= 5;
document.write('<br>' + incremento);  //25


/*    Operador unario     */
//    ++,  --
//    sumar uno, restar uno

let sumar = 0;
document.write('<br>' + sumar); // 0
sumar ++;
document.write('<br>' + sumar); // 1
sumar ++;
document.write('<br>' + sumar); // 2

sumar --;
sumar --;
document.write('<br>' + sumar); // 0
sumar --;
document.write('<br>' + sumar); // -1



/*   */
for (let i = 0; i < 10; i++){
    //document.write('<br>' + i);
}


/* 
++variable = preincremento-primero modifica el valor y ya despues hace uso de la variable

variable++ = postincremento - usando la variable y despues hace el incremento
*/


let num = 5;
document.write('<br>' + (num++));  // 5
document.write('<br>' + (++num));  // 7

for (let i = 0; i < 5; i++) {
    // iteracion
    // primer ietracion, se detiene
    document.write('<br>' + 'Este es el ciclo padre.' + '<br>');
    for(let j = 0; j < 5; j++){
        // hace sus iteraciones(repeticiones) propias
        document.write('<br>' + 'Este es el ciclo hijo.');
    }
}