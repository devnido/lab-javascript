var Q = require('q');

var primeraFuncion = function () {

    var deferred = Q.defer();

    console.log("yo soy la primera funcion");

    deferred.resolve("yo soy la segunda funcion");

    return deferred.promise;
};


var segundaFunction = function (texto) {
    var deferred = Q.defer();
    console.log(texto);

    deferred.resolve("se acabo")

    return deferred.promise;
};

primeraFuncion()
    .then(segundaFunction)
    .then(function (msg) {
        console.log(msg);
    })
    .fail(function (err) {
        console.log(err);
    })
    .done();