// Example
console.log("------------------Example----------------------\n")
function createMultFunction(obj){

  function errorInput(mul){
return "ErrorInput:\n    - obj must be a number or array of numbers.\n    - mult must be a number.";
  }

  function numMult(mul){
if (typeof(mul) !== 'number'){
    return errorInput();
}
return obj * mul;
  }

  function arrayMult(mul){
if (typeof(mul) !== 'number'){
    return errorInput();
}
r_array = []
for (let i of obj){r_array.push(i * mul)}
return r_array
  }

  // Find fuction
  if (typeof(obj) === 'number'){
return numMult;
  } else if (typeof(obj) === 'object'){
for (let i of obj){
    if (typeof(i) != 'number'){
  return errorInput;
    }
}
return arrayMult;
  } else {
return errorInput;
  }
}

// test
console.log("\n------test1: Array 1 - 10 * 2:\n")
var table_1_10 = createMultFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(table_1_10(2));
console.log("\n------test2: Number 3 * 22:\n")
var mul_3 = createMultFunction(3);
console.log(mul_3(22));

console.log("\n------test3: Error mult =! number:\n")
console.log(mul_3("g"));

console.log("\n------test4: Error obj =! number or array:\n")
var mul_err = createMultFunction("gatos");
console.log(mul_err(98));