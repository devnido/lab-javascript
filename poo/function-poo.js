// funcion constructora
// no usar arrow functions por que usan el 'this' del padre
const Animal = function(patas, clasificacion, sonido) {
    this.patas = patas;
    this.clasificacion = clasificacion;
    this.sonido = sonido

    this.emitirSonido = function() {
        return this.sonido
    }

    this.moverLaCola = function(mensaje) {
        console.log(mensaje);
    }
}

const perro = new Animal(4, 'mamifero', 'guau')

console.log(perro.emitirSonido())

const gato = new Animal(4, 'mamifero', 'miau')

console.log(gato.emitirSonido())

Animal.prototype.cola = function() {
    console.log('si');

}

console.log(gato.__proto__.cola())

console.log(perro.__proto__.cola())