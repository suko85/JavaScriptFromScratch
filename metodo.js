//foreach

let numero = [1,2,3,4,5,6,7];   //<-- array
numero.forEach((value) => {
    console.log(value == 5);
})

console.log("*****************************");
//for
for(i=0; i< numero.length;i++){
    console.log(numero[i]);
}

console.log("*****************************");
//function
numero.forEach(function(i){ //using forEach to execute an internal action in the array.
    console.log(i);
})

//some (always return booleans values,usually used to verifications.)

let numeros = [1,2,3,-4,5]

console.log(numeros.some((value) => {  // value represent all values in to the array.
    return(value < 0); //return true.
}));   

// every (is the opposite to some. Every element in the array must meet the condition)
console.log(numeros.every((value) => {
    return(value == 5); //verifying this condition in the array.
}))

//Map

let numb = [1,2,3,4,5,6];

let duplicar = numb.map(value => {
   return value * 2;
});

console.log(duplicar);

//filter (creates a subset of the filtered array.)

let numbers = [1020, 3340, 7046, 2550, 1092]
let numeros_grandes = numbers.filter((value) => {
    return (value > 2500);
});
console.log(numeros_grandes);

//Reduce

let digitos = [4,3,5,2,1];
let respuesta = digitos.reduce((suma, dato_act) => 
     suma + dato_act, 0);
console.log(respuesta);
