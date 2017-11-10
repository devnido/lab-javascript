//caso con objeto {}
var objetoUno = {
    x: "objeto uno",
    show: function () {
        console.log(this.x);
    }
}
//En este caso la variable x se encuentr adentro de un objeto y para acceder a ella 
//sin que se confunda con la variable x de la libreria adjunta debemos utiliza 'this'
//de todas maneras podría haber conflicto si no se utiliza 'this'


//para ver lo que contiene
console.log(objetoUno);


//para ejecutar
objetoUno.show();





//caso objeto function
var objetoDos = function () {
    var x = "objeto dos";
    return {
        show: function () {
            console.log(x);
        }
    }
}

//para ver lo que contiene
console.log(objetoDos);

//
//para ejecutar
objetoDos().show();

//si creamos una variable  para no tener que ejecutar con doble ()

var y = objetoDos();
y.show();

//pero tenemos 2 variables globales 

// como solucion a lo anterior es posible hacer que la funcion se auto ejecute al momento de declararla
var objetoTres = (function () {
    var x = "objeto tres";
    return {
        show: function () {
            console.log(x);
        }
    }
})();

//en este caso la variable 'x' es privada y no se puede acceder desde fuera

//para ver lo que contiene
console.log(objetoTres);

//
//para ejecutar
objetoTres.show();




// tambien es posible pasar una variable como parametro 
var objetoCuatro = (function (x_param) {
    var x = "objeto cuatro";
    return {
        show: function () {
            console.log(x_param);
        }
    }
})(x); //<- esa 'x' es la que esta enla libreria.js

//en este caso la variable 'x' es privada y no se puede acceder desde fuera

//para ver lo que contiene
console.log(objetoCuatro);

//para ejecutar
objetoCuatro.show();



// es posible dejar la declaración de la funcion show privada  
var objetoCinco = (function (x_param) {
    var x = "objeto cinco";

    var show = function () {
        console.log(x); //<- esa variable es la privada y se llama sin this
    }

    return {
        show: show
    }
})(x); //<- esa 'x' es la que esta enla libreria.js

//en este caso la variable 'x' es privada y no se puede acceder desde fuera

//para ver lo que contiene
console.log(objetoCinco);

//para ejecutar
objetoCinco.show();