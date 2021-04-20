var a = 3;
if (a > 5) {
    console.log('SI ES MAYOR A 5');
} else {
    console.log('SI ES MENOR A 5');
}
console.log("//////////////////////");

var c = 12;
var d = 20;
if (c > d) {
    console.log(`${c} es mayor que ${d}`);
} else{
    console.log(`${c} es menor que ${d}`);
}
console.log("//////////////////////");

var e = 80;
var f = 80;
if (e > f) {
    console.log(`${e} es mayor que ${f}`);
}else if (e == f) {
    console.log("e y f son iguales")
} 
else{
    console.log(`${e} es menor que ${f}`);
}

console.log("//////////////////////");

var x = true;
var y = false;
console.log(x && y);
console.log(x || y);

console.log("//////////////////////");

var p = 8;
var g = 4;
var m = 6;
if (p > m && p > g) {
    console.log(`${p} es mayor a ${g}`);
} else{
    console.log(`${p} es mayor a ${m}`);
}

console.log("//////////////////////");

let curso = "javascript";
switch (curso) {
    case 'java':
        console.log("es java");
        break;
    case 'python':
        console.log("es python");
        break;

    case 'javascript':
        console.log("es javascript");
        break;    
    default:
        console.log("no disponible");
        break;
}
