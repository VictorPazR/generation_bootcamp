

const $parr = document.querySelector('p');
const $titulo = document.querySelector('h1');
const $card = document.querySelector('.card');
// nodeName
console.log($parr.nodeName);
console.log($titulo.nodeName);

// textContent
console.log($parr.textContent);
//$parr.textContent += " Hola Mundo";
console.log($parr.textContent);

$titulo.textContent = "Modificando elementos con JavaScript"
//innerText --- mejor no usarla 

console.log($parr.innerHTML);
//$parr.innerHTML = '<a href="#"> Estes es un enlace </a>';

// Remplaza todo, incluido el elemento que seleccionamos
//$parr.outerHTML = '<a href="#"> Estes es un enlace </a>';

// Crear elementos de html



// function crearElemento(){
//     const img = document.createElement('img')
//     img.src="https://gcdn.lanetaneta.com/wp-content/uploads/2020/05/1589724465_El-director-de-la-Torre-de-Dios-habla-sobre-los-780x470.jpeg"
//     // appendChild
//     $card.appendChild(img);
// }

// crearElemento();