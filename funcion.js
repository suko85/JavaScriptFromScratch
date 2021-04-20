 function suma(a,b) {
    var sum = a + b;
    console.log('La suma es :' + sum);
 }
 suma(8,4);

 //funciones retornables. Se declara con parametros vacios.
 function dato_trabajador() {
     var salario = 2550;
     //console.log('su salario es: '+ salario);
     return salario;
 }
 var obrero = dato_trabajador();
 console.log(`El salario del obrero es ${obrero}.`);

 //funciones anonimas(flecha). Arrow Function
 //Old way.
 var resta = function (n1, n2) {
     return n1 - n2;
 }
 console.log(resta(8,2));

 //arrow functions:
 var resta = (n1,n2) => n1 - n2;
 console.log(`Result of arrow function is ${resta(8,3)}.`);

 var nombre = () => "Victor";
 console.log(nombre());

 //funciones anidadas.
 function operacion() {
     const PI = 3.14;
     function area(radio) {
         var area = PI *  radio * radio;
         console.log(`El area del circulo es: ${area}`);
     }
     operacion.area = area;
 }
 var radio = 4;
 operacion();
 operacion.area(radio);
 