//arrays

var numeros = [1,2,3,4,5];
console.log(numeros.unshift(8));
console.log(numeros);


var estudiantes = ["Carlos", "Maria", "Jose"];
console.log(estudiantes[2]);
console.log(estudiantes.length);
console.log(estudiantes.reverse());
console.log(estudiantes.sort());
console.log(estudiantes.push("Luis")); 
//console.log(estudiantes.shift()); 
console.log(estudiantes.pop());
console.log(estudiantes.indexOf("Jose"));
console.log(estudiantes.unshift("Sara"));
console.log(estudiantes);


var grupo_a = [1,2,3];
var grupo_b = [4,5,6];
console.log(grupo_a.concat(grupo_b));