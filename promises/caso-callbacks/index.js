var primeraFuncion = function (cb) {
    console.log("yo soy la primera funcion");
    cb("yo soy la segunda funcion");
}

var segundaFuncion = function (texto, cb) {
    console.log(texto);
    cb("se han mostrado las dos funciones");
}

primeraFuncion(function (texto) {
    segundaFuncion(texto, function (textoFinal) {
        console.log(textoFinal);
    });
});