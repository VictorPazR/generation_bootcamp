
addEventListener('load',function(){
    this.alert('Se ha terminado de cargar la pagina');
});


function saludar(){
    alert('hola desde un manejador de eventos');
}

const $botonSemantico = document.getElementById('eventoSemantico');
const $botonMultiple = document.getElementById('eventoMultiple');


$botonMultiple.addEventListener('click',function(evento){
     console.log(evento.target);
});

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function(evento){
    //alert('hola desde una funcion anonima');
    console.log(evento);
    console.log(evento.target);
}

