function area() {
    const PI = 3.14;
    var radio = document.getElementById("radio").value;
    var resultado = PI * radio * radio;
    document.getElementById("resultado").value = resultado;
}

//eval -> evalua una expresion.

var a = 10;
var b = 20;
var x = eval("a + b");
var y = eval("3 + 4");
var z = eval("a + 8");
var respt = a + z;
console.log(respt);

//pasefloat  
var a = parseFloat("10");
var b = parseFloat("20.5curso");  //-> retorna solo el numero en un valor alfanumerico.
var c = parseInt("10curso");    //

console.log(b);
console.log(c);

//date.parse()
// Fecha de inicio segun JS: 1 enero de 1970
var dato = "january 1, 1970 1:30 PM"
var resultado = Date.parse(dato);  //-> comprueba cuanto tiempo ha pasado desde la fecha de inicio a la seteada. 
console.log(resultado);