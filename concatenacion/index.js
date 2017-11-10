//este caso no cumple el objetivo por que no suma 2+7
var cadenaUno_ = "2 + 7 = ";
cadenaUno_ = cadenaUno_ + 2 + 7;
console.log(cadenaUno_);
//imprime 2 + 7 = 27

//como deberia ser...  
var cadenaUno = "2 + 7 = ";
cadenaUno += 2 + 7;
console.log(cadenaUno);
//pero esta solucion al utilizar el simbolo '+' consume mas recursos y tarda mas en ejecutarse


//es mucho mejor utilizar funcion concat o join 
var cadenaDos = "2 + 7 = ";
cadenaDos = cadenaDos.concat(2 + 7);
console.log(cadenaDos);


var ArrayTres = ["2 + 7 =", 2 + 7];
var cadenaTres = ArrayTres.join(' ');
console.log(cadenaTres);