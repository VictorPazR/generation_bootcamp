function saludar(){
    alert('hola');
}

const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function(evento){
    //alert('Hola desde un manejador semantico');
    console.log(evento);
}

const $botonMultiple = document.getElementById('evento-multiple');

$botonMultiple.addEventListener('click',function(){
    alert('Hola desde un manejador semantico');
});