const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById('imagenPerrito');
const imagen2 = document.getElementById('imagenPerrito2');
const btnMichi = document.querySelector('.btn-michi');
console.log(btnMichi);


btnMichi.addEventListener('click',(e)=>{
    e.preventDefault;
    fetch(url).then(respuesta => respuesta.json()).then(datos =>{
        imagen.src = datos[0].url;
    });
});




// async function obtenerPerrito(){
//     const infoPerritos = await fetch(url);
//     console.log(infoPerritos);
//     const perrito = await infoPerritos.json();
//     console.log(perrito);
//     imagen.src= perrito.message;

//     const infoPerritos2 = await fetch(url);
//     console.log(infoPerritos2);
//     const perrito2 = await infoPerritos2.json();
//     console.log(perrito2);
//     imagen2.src= perrito2.message;
// }

// obtenerPerrito();