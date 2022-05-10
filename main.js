const cardArray=[    //Array que contiene todos los objetos
    {
        name:'Jinx',
        img:'images/Jinx.jpg',
    },
    {
        name:'Jayce',
        img:'images/jayce.jpg',
    },
    {
        name:'Vi',
        img:'images/vi.jpg',
    },
    {
        name:'Victor',
        img:'images/victor.jpg',
    },
    {
        name:'Silco',
        img:'images/silco.jpg',
    },
    {
        name:'Heimerdinger',
        img:'images/heimerdonger.jpg',
    },
    {
        name:'Jinx',
        img:'images/Jinx.jpg',
    },
    {
        name:'Jayce',
        img:'images/jayce.jpg',
    },
    {
        name:'Vi',
        img:'images/vi.jpg',
    },
    {
        name:'Victor',
        img:'images/victor.jpg',
    },
    {
        name:'Silco',
        img:'images/silco.jpg',
    },
    {
        name:'Heimerdinger',
        img:'images/heimerdonger.jpg',
    },
]

//Función que utiliza el Método (sort) para clacificar todo de forma aleatoria
cardArray.sort(()=> 0.5 - Math.random())


const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]
function createBoard (){
    for(i=0; i<12; i++){
        const card= document.createElement('img') //Método que crea elementos, en este caso, etiquetas <img></img>
        card.setAttribute('src','images/Blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)//Llamada a la función que da velta las cartas
        gridDisplay.appendChild(card)

    }
}

createBoard();

function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenIds[0]
    const optionTwoId=cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','images/Blank.png')
        cards[optionTwoId].setAttribute('src','images/Blank.png')
        console.log('You have clicked de same image !')
    }

    if (cardsChosen[0]==cardsChosen[1]){ //Si esto es verdad, entoces las cartas coinciden 
        
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else{ //cada vez que las imagenes concuerden quedarán en blanco
        cards[optionOneId].setAttribute('src','images/Blank.png')
        cards[optionTwoId].setAttribute('src','images/Blank.png')
        
    }   
    resultDisplay.textContent=cardsWon.length;
    cardsChosen=[]
    cardsChosenIds=[]
    

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent='Felicidades, completaste todas!'
    }
}

function flipCard(){  //Función para girar las cartas 
    
    const cardId=  this.getAttribute('data-id') //Aplicar el id de cada carta
    cardsChosen.push(cardArray[cardId].name)//Método para meter objetos en  el array cardChosen
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length===2){
        setTimeout(checkMatch,500) 
            
        
    }
}