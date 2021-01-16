console.log(".................== vs ===................\n");

num1 = 5;
num2 = 5;
str1 = '5';

esIgual = num1 == num2;
console.log('¿El valor num1 es igual que num2?', esIgual); // > true
esIgual = num1 == num2;
console.log('¿El valor y el tipo num1 es igual que num2?', esIgual); // > ture

esIgual = num1 == str1;
console.log('¿El valor num1 es igual que str1?', esIgual); // > ture
esIgual = num1 === str1;
console.log('¿El valor y el tipo num1 es igual que str1?', esIgual); // > false

// Ejercicio:
// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan

var a = 5;
var b = 20;
var c = 10;
var d = 25;
//------a--------c------b------d---------

var haySolape = !(a > d || b < c);
console.log("\n-----------------Exercice-----------------\n");
console.log("R//:", haySolape);
