var miObjeto = function () {
    this.propiedad = "uno"
    this.get = function () {
        console.log(this.propiedad)
    }
}

instancia = new miObjeto();

instancia;

instancia.get();

//lo mismo de arriba pero usando prototype 
var otroObjeto = function () {
    this.propiedad = "uno";
}

//creamos la funcion en el prototype
otroObjeto.prototype.get = function () {
    console.log(this.propiedad);
}

otraInstancia = new otroObjeto();

//tambien se le puede entregar un objeto

otroObjeto.prototype = {
    hola: function () {
        console.log('hola' + this.propiedad);
    }
}

//simulando herencia con prototype una clase objeto

//se define la clase vehiculo
var vehiculo = function (ruedas) {
    this.ruedas = ruedas;
    this.getRuedas = function () {
        console.log(this.ruedas);
    }
}

//se define la clase coche
var coche = function (modelo) {
    this.modelo = modelo;
    this.getModelo = function () {
        console.log(this.modelo);
    }
}

//se establece coche hereda de vehiculo a traves del prototype
coche.prototype = new vehiculo(4);