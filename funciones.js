var cifra ="";
var acumulado=0;

function inicio(){

	document.getElementById("display").value=0;

}
function display_numeros(numero){

	//display = document.getElementById("display").value=cifra+numero;

	document.getElementById("display").value=cifra+numero;

	cifra = document.getElementById("display").value;

}

function suma(){

	acumulado += parseInt(cifra);
	cifra = "";
	document.getElementById("display").value=acumulado;
}

window.addEventListener("load", inicio, false);


