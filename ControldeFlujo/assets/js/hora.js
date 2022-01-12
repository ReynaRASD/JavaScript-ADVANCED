/* 
Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
*/

function calcular() {

    let dato1 = parseInt(prompt ('Proporciona la hora del lugar en el que te encuentras. En un formato de 24 hrs.'));
    
    if (dato1 >= 6 && dato1 <= 11) {

        let dato = 'Buenos dias!'
        hora.textContent = 'Hola! ' + dato;
    }
    else if (dato1 >= 12 && dato1 <= 18) {
        let dato = 'Buenas tardes!'
        hora.textContent = 'Hola! ' + dato;

    }
    else if(dato1 >= 19 && dato1 <= 23){
        let dato = 'Buenas noches!'
        hora.textContent = 'Hola! ' + dato;
    }
    else if(dato1 >= 0 && dato1 <= 5){
        let dato = 'Dejame y vete a dormir.'
        hora.textContent = 'Ok, ' + dato;
    }
    else if(dato1 >= 24) {
        hora.textContent = 'Aqui no hacemos eso. Vuelve a intentarlo.';
    }

}