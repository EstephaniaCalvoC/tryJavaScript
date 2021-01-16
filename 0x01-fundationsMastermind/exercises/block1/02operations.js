// Aritmeticos
var num1 = 10;
var num2 = 2;

// --Operadores básicos
var suma = num1 + num2;
var resta = num1 - num2;
var mult = num1 * num2;
var divi = num1 / num2;
var modulo = num1 % num2;
var potencia = num1 ** num2;

// --Operadores acumulados
num2++; // Suma 1 a la variable num2
num1--; // Resta 1 a la va'nun
console.log('num1 ahora es ' + num1 + ' y num2 es ' + num2);

num2 -= 1; // num2--
num1 += 1; // num1++
console.log('num1 ahora es ' + num1 + ' y num2 es ' + num2);

num2 *= 3; // num2 = num2 * 3
num1 /= 5; // num1 = num1 / 5
console.log('num1 ahora es ' + num1 + ' y num2 es ' + num2);

// Concatenación
str1 = 'Hola ';
str2 = 'Mundo!';

str3 = str1 + str2;
console.log(str3);

// --⚠️Cuidado!
str1 = '23';
num1 = 7;

result = str1 + num1;
console.log(str3); // > 237

//Ejercicio: Programa que nos diga los buenos dias
// Resultado: 'Buenos dias NOMBRE'
var name = 'Anya'
console.log('Buenos dias ' + name);
