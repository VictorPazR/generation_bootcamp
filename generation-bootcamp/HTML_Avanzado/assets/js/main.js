// let formulario = document.querySelector("#formularioDatos");
// let boton = document.querySelector("#btn-enviar");
        
// boton.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log(formulario);          
// });

const formulario = document.querySelector("#formularioDatos");
console.log(formulario);

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    const datos = Object.fromEntries(
        new FormData(event.target)
    )
    console.log(datos.nombre);
});
