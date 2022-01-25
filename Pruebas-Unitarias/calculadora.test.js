const { sumar } = require('./calculadora');

describe('Pruebas en el componente calculadora', () => {
    test('Pruebas en la funcion sumar', () => {
        expect(sumar(3,5)).toBe(8);
    });
});


const { restar } = require('./calculadora');

describe('Pruebas en el componente calculadora', () => {
    test('Pruebas en la funcion restar', () => {
        expect(restar(10,5)).toBe(5);
    });
});
