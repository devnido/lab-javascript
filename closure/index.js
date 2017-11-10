//segundo caso
//incrementar contador en una variable dentro de la funcion - esto no funciona (envolver el caso global en una funcion)

var counter = function () {

    var count = 0;
    var increment = function () {
        count++;
        console.log(count);
    }
    increment();

}
console.log("segundo caso");
counter();
counter();
//esto no funciona por que la variable count se crea cada vez que se ejecuta la funcion counter()






//tercer caso
//la misma funcion anterior pero en este caso retorna la funcion increment SIN EJECUTAR

var counterDos = function () {

    var count = 0;
    var increment = function () {
        count++;
        console.log(count);
    }
    return increment;

}
console.log("tercer caso");
c = counterDos();

console.log(c);

c();
c();

//cuarto caso
//ejemplo mas comun de closure

var sumatoria = function (inicio) {
    var total = inicio;
    var sumar = function (constante) {
        total = total + constante;
        console.log(total);
    };
    return sumar;
}

console.log("cuarto caso");

var inicio10 = sumatoria(10);
var inicio15 = sumatoria(15);

inicio10(5) //15
inicio10(5) //20
inicio10(5) //25

inicio15(5) //20
inicio15(5) //25
inicio15(5) //30