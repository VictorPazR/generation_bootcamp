//importar
const { palindrome } = require('../para_probar');

//primer test unitario
test('palindrome de generation', () =>{
    const resultado = palindrome('generation');

    //comparar
    expect(resultado).toBe('noitareneg');
});