console.log('\n--------Tipos de variables------------------\n');

// Variables numéricas
var num1 = 5;
var num2 = 10.5;
console.log(num1, 'es de tipo:' + typeof num1);
console.log(num1, 'es de tipo:' + typeof num2);

// Variables de texto
var str1 = 'Hola mundo';
console.log(str1, 'es de tipo:' + typeof str1);

// Varaibles booleanas
var bool = num1 > num2;
console.log('¿num1 es mayor que num2?', bool);
console.log(bool, 'es de tipo:' + typeof bool);

// Arrays
var array = [num1, num2, str1, bool, [3, 9]];
console.log(array, 'es de tipo:' + typeof array);

// Objetos
var object = {
    nombre: 'Estephania',
    apellido: 'Calvo',
    edad: '24'
}
console.log(object, 'es de tipo:' + typeof object);









