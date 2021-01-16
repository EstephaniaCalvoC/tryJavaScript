// Ejemplo
console.log("------------------Global vs Local----------------------\n")
// Afuera del scope porque no se ha declarado anteriormente
//console.log(defHere); //Error

var defHere = 4 // Definida de forma globlal - scope global
// Adentro del scope porque ya fue definida
console.log(defHere); // 4

function printGlobal(){
		console.log(defHere); // 4
}

printGlobal();

function printLocal(){
		// Adentro del scope local de la función printLocal
		var local = 101;
		console.log(local); // 101

		var defHere = 56; // Definida de forma local
		console.log(defHere); // 56
}

printLocal(); 

// Afuera del scope porque local es una varible local de la funcón printLocal
//console.log(local); // Error

// Ejemplo
console.log("\n------------------var vs let---------------------------\n")
for (var i = 0; i < 10; ++i){
    continue;
}

console.log(i) // 10


for (let i = 0; i < 10; ++i){
    continue;
}

//console.log(i) // ReferenceError porque está afuera del scope del bloque