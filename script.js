alert("JS is linked")

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
let count = 0;
let score = 0;
let lives = 3;
const cardOutput = document.getElementById('cards');
const scoreOutput = document.getElementById('score');
const message = document.getElementById('message');
const suits = ['spades', 'hearts', 'clubs', 'diams'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
///////////////////////////////////////////
///////////Funcions / Statements///////////
///////////////////////////////////////////
//Create Deck/ gameSart
function gameStart() {
	message.innerHTML = 'Game Started!';
	document.getElementById('start').style.display = 'none';
	document.getElementById('highLow').style.display = 'block';
	buildCards();
	shuffleArray(cards);
	cardOutput.innerHTML += showCards();
	scoreOutput.innerHTML= 'SCORE:'+score +" LIVES:("+lives+")";
}
function hilo(a){
	let win = false;
	let oldCard = cards[count].cardValue;
	count++;
	cardOutput.innerHTML += showCards();
	let newCard = cards[count].cardValue;
	if(a === 'high' && oldCard < newCard) {
		win = true;
		score++;
		message.innerHTML = 'You were Right! :)';
	} else if(a === 'low' && oldCard > newCard) {
		win = true;
		score++;
		message.innerHTML = 'You were Right! :)';
	}else {
		message.innerHTML = 'You were WRONG!:(';
		lives--;
		if(lives<1) {
			endPLay();
		}
	}
	scoreOutput.innerHTML= 'SCORE:'+score +" LIVES:("+lives+")";
}
function endPLay(){
	document.getElementById('highLow').style.display='none'
	message.innerHTML='Game over your score was ' +score;
}
function shuffleArray(array) {
	for(let i = array.length -1; i >0 ; i--){
		let holder = Math.floor(Math.random()*(i+1));
		let temp = array[i];
		array[i] = array[holder];
		array[holder] = temp;
	}
	return array;
}
function showCards(){
	let c = cards[count]
	let bgColor = (c.icon === "H" || c.icon === "D") ? 'red':'black';
	return '<span class="icard" style="color:'+bgColor+'">'+cards[count].num+'&'+cards[count].suit+';</span>';
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
	console.log(cards);
}
