
const $padre = document.querySelector('.padre');
console.log($padre);

const $parr = document.createElement('p');
$parr.textContent += 'Parrafo creado con js ';
$parr.textContent += 'Parrafo creado con js ';
$parr.textContent += 'Parrafo creado con js ';
$padre.appendChild($parr);

// Agregar elementos con innerHTML

const $cuadro = document.querySelector('.cuadro');
$cuadro.innerHTML='';

$cuadro.innerHTML=`<a href='https://www.google.com/' >Enlace JS</a>`;
$cuadro.innerHTML=
`<ol>
    <li class="clasePrueba">Elemento1</li>
    <li>Elemento2</li>
    <li>Elemento3</li>
</ol>`


const estaciones = ['Primavera','Verano','Otoño','Invierno'];
const $lista = document.createElement('ul');


estaciones.forEach(elemento => {
    const $li = document.createElement('li');
    $li.textContent = elemento;
    $lista.appendChild($li);
    
});
$cuadro.appendChild($lista);
//document.body.appendChild($lista);


const continentes = ['Africa','Asia','America','Europa','Oceania'];

const $ol = document.createElement('ol');
continentes.forEach(continente =>{
    $ol.innerHTML+=`<li>${continente}</li>`;

});

document.body.appendChild($ol);
