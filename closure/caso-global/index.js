//primer caso
//incrementar contador en una variable GLOBAL - esto no se debe hacer
var count = 0;
var increment = function () {
    count++;
    console.log(count);
}

increment();
increment();