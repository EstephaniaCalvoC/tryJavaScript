// Ejemplo while
console.log("------------------while---------------------\n")
var contador = 0;
var N = 10;

while (contador < N){
		console.log(contador);
		contador += 1;
}

// Ejemplo do while
console.log("\n------------------do while------------------\n")
var contador = 0;
var N = 10;

do {
		console.log(contador);
		contador += 1;
} while(contador < N)

// Ejemplo for
console.log("\n------------------for-----------------------\n")
var N = 50;

for (var i = 0; i < 50; ++i){
		console.log(i);
}

// --Ejemplo for of
console.log("\n------------------for of--------------------\n")
var estudiantes = [
    {
            nombre: 'Estudiante 1',
            nota: 5
    },
    {
            nombre: 'Estudiante 2',
            nota: 8
    },
    {
            nombre: 'Estudiante 3',
            nota: 1
    },
]

/*
for (var i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i].nombre, estudiantes[i].nota);
}
*/

for (var estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}

// --Ejemplo for in
console.log("\n------------------for in--------------------\n")
var estudianteAuxiliar = {
    nombre: 'Estudiante 1',
    nota: 5
}

// Imprimir los atributos del objeto estudianteAuxiliar
for (let key in estudianteAuxiliar) {
    console.log(key);
}

// Imprimir los valores del objeto estudianteAuxiliar
for (let key in estudianteAuxiliar) {
    console.log(key, estudianteAuxiliar[key]);
    // Sintaxis invalida -> estudianteAuxiliar.key
}

// Ejercicio arbol de navidad
console.log("\n------------------Exercice------------------\n")
var pisos = 6;

var n_esp = (2 * pisos - 2) / 2;
var ast = '*';

for (var piso = 1; piso <= pisos; piso += 1) {
		// Crear espacios
    var esp = '';
    for (var i = 0; i < n_esp; i += 1) {
        esp += ' ';
    }

    console.log(esp + ast + esp);
    n_esp -= 1;
    ast += '**'
}