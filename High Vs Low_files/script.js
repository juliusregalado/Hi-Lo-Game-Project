console.log("JS is linked")
///////////////////////////////////////////
////Objects,Arrays and variables(Global)///
///////////////////////////////////////////
//deck of cards
//cards in play (one flipped one is not)
//streak counter
//chips counter
//buttons
const myChips = 100;
let cards = [];
let cardsInPlay = 0;
let score = 0;
let lives = 3;
const cardOutput = document.getElementById('cardOutput');
const scoreOutput = document.getElementById('scoreOutput');
const message = document.getElementById('message');
const start = document.getElementById('start');
const btnstart = document.getElementById('btnstart')
const highLow = document.getElementById('highLow');
const btnhigh = document.getElementById('btnhigh');
const btnlow = document.getElementById('btnlow');
const suits = ['spades', 'hearts', 'clubs', 'diams'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
///////////////////////////////////////////
///////////Functions / Statements//////////
///////////////////////////////////////////
//Create Deck/ gameSart / checkwin
function gameStart() {
	lives = 3;
	score = 0;
	message.innerHTML = 'Game Started!';
	start.style.display = 'none';
	highLow.style.display = 'block';
	btnhigh.style.display= 'block';
	btnlow.style.display= 'block';
	buildCards();
	shuffleCards(cards);
	cardOutput.innerHTML = '';
	cardOutput.innerHTML += showCards();
	scoreOutput.innerHTML= 'SCORE:'+score +" LIVES:("+lives+")";
}
function hilo(pressedButton){
	let win = false;
	let oldCard = cards[cardsInPlay].cardValue;
	cardsInPlay++;
	cardOutput.innerHTML += showCards();
	let newCard = cards[cardsInPlay].cardValue;
	if(pressedButton === 'high' && oldCard < newCard) {
		win = true;
		score++;
		message.innerHTML = 'You were Right! :)';
	} else if(pressedButton === 'low' && oldCard > newCard) {
		win = true;	
		score++;
		message.innerHTML = 'You were Right! :)';
	}else {
		message.innerHTML = 'You were WRONG!:(';
		lives--;
		if(lives === 0) {
			endPLay();
		}
	}
	scoreOutput.innerHTML= 'SCORE:'+score +" LIVES:("+lives+")";
}

function endPLay() {
	start.style.display = 'block';
	btnstart.innerHTML = 'Restart?'
	highLow.style.display='none'
}
function shuffleCards(array) {
	for(let i = array.length -1; i >0 ; i--){
		let holder = Math.floor(Math.random()*(i+1));
		let temp = array[i];
		array[i] = array[holder];
		array[holder] = temp;
	}
	return array;
}
function showCards(){
	let c = cards[cardsInPlay]
	let bgColor = (c.icon === "H" || c.icon === "D") ? 'red':'black';
	return '<span class="icard" style="color:'+bgColor+'">'+cards[cardsInPlay].num+'&'+cards[cardsInPlay].suit+';</span>';
}
function buildCards() {
	cards = [];
	for(s in suits){
		let suit = suits[s][0].toUpperCase();
		for(n in numbers){
			let card = {
				suit: suits[s],
				num: numbers[n],
				cardValue: parseInt(n)+2,
				icon: suit
			}
		cards.push(card);
		}
	}
}
///////////////////////////////////////////
//////////////Eventlisteners///////////////
///////////////////////////////////////////
document.getElementById('btnstart').addEventListener('click', gameStart);




















