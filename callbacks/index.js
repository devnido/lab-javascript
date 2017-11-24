var saludar = function (nombre, callback) {
    var saludo = "hola " + nombre;
    callback(saludo);
}

var getSaludo = function (saludo) {
    console.log(saludo);
}

saludar("luis", getSaludo);