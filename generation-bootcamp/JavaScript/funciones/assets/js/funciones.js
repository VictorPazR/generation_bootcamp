
// function saludar(nombre='panchito',apellido='Perez'){
//     let nombre = true;
//     console.log('Hola mi nombre es ',nombre,apellido);
//     console.log(`Hola mi nombre es: ${nombre?"Juseppe":"Desconocido"}`);
//     return `Mi nombre es ${nombre} ${apellido}`
// }

// let funcionSaludar = saludar("Eduardo","Juseppe");
// console.log(typeof(funcionSaludar));
// console.log(funcionSaludar);

// document.write(`<h1>Este es un h1</h1>`);
// console.log(`<h1>Este es un h1</h1>`);

// funcion declarada

// function suma(a,b){
//     return a+b;
// }

// console.log(suma(10,20));

// // funciones expresadas o funcion expresion

// const resta = function(a,b){
//     return a - b;
// }
// console.log(resta(30,10));

// // let valor=0;
// // valor=resta(10,20)
// setTimeout(()=>{

// },3000);

// // funcion flecha

// const multiplicacion =(a,b)=>{
//     return a*b;
// }

// console.log(multiplicacion(suma(10,20),resta(10,20)));

// let nombre = " "

// const invertirCadena =(nombre)=>{

//     if(nombre.length<1){
//         console.warn("No se ingreso texto");
//     }
//     else{
//         let cadenaInvertida="";
//         // console.log(nombre);
//         for(let x=(nombre.length)-1;x>=0;x--){
//             // console.log(x);
//             auxiliar=nombre.charAt(x); 
//             // console.log(auxiliar);
//             cadenaInvertida=cadenaInvertida.concat(auxiliar);
//             // console.log(cadenaInvertida)    
//         }
//     return cadenaInvertida;
//     }

    
// }
// console.log(nombre);
// let invertida =invertirCadena(nombre);
// console.log(invertida);



// const palindromo = (word) => {
//     let volteada;
//     nospaces = word.replace(/\s/g, '');
//     volteada = nospaces.split('').reverse().join('')
//       if (volteada.toLowerCase() == nospaces.toLowerCase()) {
//       return true
//     } else {
//       return false
//     }
//   }


// console.log(palindromo('salas'))


const repetirHolaMundo = (frase,repetir) => {
    let arregloFrase = [];
    for(let x=0;x<repetir;x++){
        arregloFrase.push(frase);
    }
    return arregloFrase.join(' ');

}

let frase = "Hola Mundo";
let repetir = prompt("Cuantas veces repetimos 'Hola Mundo'");
console.log(repetirHolaMundo(frase,repetir));

// const recortar = (frase,numero) => {
//     if(frase.length < numero){
//         console.error("No tenemos tantos caracteres");
//     }
//     else{
//         return frase.substring(0,numero);
//     }
// }

// let frase = "Hola Mundo";
// let numero = prompt("Cuantas letras tenemos que mostrar'");
// console.log(recortar(frase,numero));

// const factorial = (n) => {
//     if (n >= 0) {
//       var total = 1; 
//       for (i=1; i<=n; i++) {
//         total = total * i; 
//       }
//       return total;
//     } else {
//       console.error('Introduce un número mayor o igual a cero');
//     }
//   }
  
//   console.log(factorial(5));
  

