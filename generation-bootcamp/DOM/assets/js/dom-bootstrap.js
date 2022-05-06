const db = [
    {
        url:'https://placeimg.com/200/200/animals',
        title: 'Animales',
        description: 'Imagen de animales' 
    },
    {
        url:'https://placeimg.com/200/200/tech',
        title: 'Tecnología',
        description: 'Imagen de Tecnologia' 
    },
    {
        url:'https://placeimg.com/200/200/people',
        title: 'Personas',
        description: 'Imagen de Personas' 
    },
    {
        url:'https://placeimg.com/200/200/nature',
        title: 'Natureleza',
        description: 'Imagen de Naturaleza' 
    },
    {
        url:'https://placeimg.com/200/200/arch',
        title: 'Arquitectura',
        description: 'Imagen de Arquitectura'
    }
]

// console.log(db);

const $cards = document.getElementById('cards');
// console.log($cards);
$cards.innerHTML='';


db.forEach(objeto =>{
    $cards.innerHTML +=
    `
    <div class="col mb-4">
    <div class="card">
        <img src="${objeto.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${objeto.title}</h5>
                <p class="card-text">${objeto.description}</p>
            </div>
        </div>
    </div>

    `
});



const dbJson = JSON.stringify(db);

console.log(db);
console.log(dbJson);

JSON.parse(dbJson);
console.log(dbJson);



