function sumarDosNumeros(numUno, numDos) {
    //validaciones
    var numeroUnoEsNumber = typeof numUno == "number"; //verdadero
    var numeroDosEsNumber = typeof numDos == "number"; //verdadero

    if (numeroUnoEsNumber && numeroDosEsNumber) {

        return numUno + numDos;

    }
    else {

        return 0;
    }

    return numUno + numDos;
}

//console.log( );

//envio otro parametros
console.log(sumarDosNumeros('a', null));

//no envio   parametros
console.log(sumarDosNumeros());

//envio parametros extras
console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6)); //3


//envio parametros  correctos
console.log(sumarDosNumeros(5, 6));

//no es 100% confiable

function saluar() {
    console.log('hola a todos');

}

console.log(saluar()); //undefined = void

sumarNumeros(1, 2, 3, 4, 5, 6, 7);


//...parametros un arreglo al principo no, al final
function sumarNumeros(...parametros) {
    console.log(parametros);

}

sumarNumeros(1, 2, 3, 4);

//"Vinicio", "Hola vinicio"


function saludar(nombre, funcionMensajeria) {
    //toUpperCase mayuscula
    var saludo = `Hola ${nombre.toUpperCase()}`;
    funcionMensajeria(saludo);
    return saludo;

}

saludar("vinicio",imprimirEnConsola())

function imprimirEnConsola(texto) {
    console.log("texto");

}