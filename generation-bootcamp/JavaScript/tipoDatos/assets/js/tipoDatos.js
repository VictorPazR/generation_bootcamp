// let nombre = "Juseppe"
// let edad = 23
// let tienesTrabajo1 = true;
// let tienesTrabajo2 = false;
// let variableNull = null;
// let variableIndefinida;
// console.log(typeof(nombre));
// console.log(typeof(edad));

// console.log(typeof(variableNull));
// console.log(typeof(variableIndefinida));

// if(true){
//     let numero = 10;
//     console.log(numero);
// }

let btnCapturar = document.querySelector("#btn-edad");
let edad = document.querySelector("#input-texto");
let edadMostrar = document.querySelector("#input-edad");

let anhos = prompt("¿Cuantos anhos tienes?");
anhos=2022-anhos;
edadMostrar.value = anhos;

btnCapturar.addEventListener("click",function(event){
    event.preventDefault();
    edadMostrar.value = ""
    let tuEdad = edad.value;
    edadMostrar.value = tuEdad;
});



