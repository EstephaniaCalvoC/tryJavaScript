// Ejemplo
console.log("------------------Error handler---------------------\n")
error_status = -1;

switch (error_status) {
		case 0:
				console.log("El programa se ha ejecutado con exito!");
				break;
		case 1:
				console.log("TypeError: Se debe ingresar un string");
				break;
		case -1:
				console.log("ValueError: Todo el texto debe estar en minúsculas");
				break;
}

//Ejercicio if - else if - else
console.log("\n------------------if - else if - else---------------\n")
var month = "Enero";

is31 = month === "Enero" || month === "Marzo" || month === "Mayo" || month === "Julio" || month === "Agosto" || month === "Octubre" || month === "Diciembre";

if (is31){
		console.log("El mes de", month, "tiene 31 días");
} else if (month === "Febrero"){
		console.log("El mes de", month, "tiene 28/29 días");
} else {
		console.log("El mes de", month, "tiene 30 días");
}

//Ejercicio switch
console.log("\n------------------switch----------------------------\n")
var month = "Enero";

switch (month){
		case "Enero":
				console.log("El mes de", month, "tiene 31 días");
				break;
		case "Febrero":
				console.log("El mes de", month, "tiene 28/29 días");
				break;
		case "Marzo":
				console.log("El mes de", month, "tiene 31 días");
				break;
		case "Abril":
				console.log("El mes de", month, "tiene 30 días");
				break;
		case "Mayo":
				console.log("El mes de", month, "tiene 31 días");
				break;
		case "Junio":
				console.log("El mes de", month, "tiene 30 días");
				break;
		case "Julio":
				console.log("El mes de", month, "tiene 31 días");
				break;
		case "Agosto":
				console.log("El mes de", month, "tiene 31 días");
				break;
		case "Septiembre":
				console.log("El mes de", month, "tiene 30 días");
				break;
		case "Octubre":
				console.log("El mes de", month, "tiene 31 días");
				break;
		case "Noviembre":
				console.log("El mes de", month, "tiene 30 días");
				break;
		case "Diciembre":
				console.log("El mes de", month, "tiene 31 días");
				break;
}