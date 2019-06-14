var cifra ="";
var acumulado=0;
var sumar=false;
var restar=0;

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
	sumar=true;

}

function resta(){

	if(sumar){
		acumulado = acumulado+parseInt(cifra);
		document.getElementById("display").value=acumulado;
	}
	else
	{
		acumulado = acumulado - parseInt(cifra);
		document.getElementById("display").value=acumulado;
	}
		cifra = "";
		sumar=false;
		restar=true;
}

function igual(){

	if(sumar){

		document.getElementById("display").value=acumulado+parseInt(cifra);

	}
	else if(restar)
	{

		document.getElementById("display").value=acumulado-parseInt(cifra);

	}

}



window.addEventListener("load", inicio, false);


