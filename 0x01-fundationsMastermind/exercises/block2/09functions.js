// Ejemplo - 1
console.log("------------------Example 1--------------------\n")
function proceso1(){
    console.log('Hago un cosa');
    console.log('Luego hago otra');
}

// Llamar / ejcutar la función
proceso1();

// Ejemplo - 2
console.log("\n------------------Example 2--------------------\n")
function generateFullName(name, last_name) {
    console.log(name + " " + last_name);
}

generateFullName('Martin', 'Castro');
generateFullName('Julian', 'Romero');


// Ejemplo - 3
console.log("\n------------------Example 3--------------------\n")
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(3, 7));
console.log(addTwoNumbers(10, -3));

// Ejemplo - 4
console.log("\n------------------Example 4--------------------\n")
/*var processClickEvent = function(event) {
    console.log("He recibido un click!");
}

var itemEnPantalla; // Algún item en la pantalla
itemEnPantalla.onClick(processClickEvent)*/

// Ejercicio - Multiplicar los elementos de un array por un número.
console.log("\n------------------Exercise---------------------\n")
function multArray (array, mult) {
    r_array = [];
    for (var num of array){
        r_array.push(num * mult);
    }
    return r_array;
}

console.log(multArray([1, 2, 3], 5));