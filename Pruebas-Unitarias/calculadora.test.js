const { sumar, restar, multiplicar, dividir } = require('./calculadora');

describe('Pruebas en el componente calculadora', () => {
    test('Pruebas en la funcion sumar', () => {
        expect(sumar(3,5)).toBe(8);
    });

    test('Pruebas en la funcion restar', () => {
        expect(restar(10,5)).toBe(5);
    });

    test('Pruebas en la funcion multiplicar', () => {
        expect(multiplicar(10,5)).toBe(50);
    });

    test('Pruebas en la funcion dividir', () => {
        expect(dividir(10,5)).toBe(2);
    });
});


    

