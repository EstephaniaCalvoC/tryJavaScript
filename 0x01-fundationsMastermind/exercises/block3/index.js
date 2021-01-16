// Ejemplo - 0
console.log("------------------Example 0--------------------\n")

//importar la librería
const readline = require('readline')

/* Usar la función 'createInterface' y pasarle como parámetro un objeto con la 
	propiedad 'input' y 'output' */

const rl = readline.createInterface(
		{input: process.stdin, // El input proviene del standar input
		output: process.stdout} // El output proviene del standar output
);

/* Usar la función 'question' de la interfaz y pasarle como parámetro el mesaje 
	para solicitar la información y una función para procesar y/o devolver una 
	salida y finalmente cerrar la interfaz*/

rl.question('Ingresa tu edad: ', function(answer) {
		console.log('Tu edad es: ' + answer);
		rl.close(); // Cerrar la interfaz
});

// Ejemplo - 1
console.log("\n------------------Example 1--------------------\n")

// const readline = require('readline');

// const rl = readline.createInterface({
// 		input: process.stdin,
// 		output: process.stdout
// });

// rl.question('¿Que edad tienes?: ', function(answer) {
// 		if (answer < 18){
// 				console.log('No está permitido el paso.');
// 		} else {
// 				console.log('Bienvenido.');
// 		}

// 		rl.close();
// });

// Ejemplo - 2
console.log("\n------------------Example 2--------------------\n")

// const readline = require('readline');

// const rl = readline.createInterface({
// 		input: process.stdin,
// 		output: process.stdout
// });

// rl.question('¿Que edad tienes?: ', function(answerAge) {
// 		rl.question('¿Cual es tu nombre?: ', function(answerName) {
// 				if (answerAge < 18){
// 						console.log(answerName +' no está permitido el paso.');
// 				} else {
// 						console.log('Hola ' + answerName + ' pasa.');
// 				}
// 				rl.close();
// 		});
// });

// Ejemplo - 3
console.log("\n------------------Example 3--------------------\n")

// const readline = require('readline');

// const rl = readline.createInterface({
// 		input: process.stdin,
// 		output: process.stdout
// });

// rl.question('¿Cunatas iteraciones quieres hacer?: ', function(iterations) {
// 		for (let i = 0; i < iterations; ++i) {
// 				console.log(i);
// 		}
// 		rl.close();
// });
