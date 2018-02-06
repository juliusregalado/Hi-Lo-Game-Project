console.log("JS is linked")
///////////////////////////////////////////
////Objects,Arrays and variables(Global)///
///////////////////////////////////////////
//deck of cards
//cards in play (one flipped one is not)
//streak counter
//chips counter
//buttons
let chips = 100;
let cards = [];
let cardsInPlay = 0;
const cardOutput = document.getElementById('cardOutput');
const scoreOutput = document.getElementById('scoreOutput');
const message = document.getElementById('message');
const myChips = document.getElementById('myChips');
const bet = document.getElementById('bet');
const start = document.getElementById('start');
const btnstart = document.getElementById('btnstart')
const highLow = document.getElementById('highLow');
const suits = ['spades', 'hearts', 'clubs', 'diams'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//giphy varibles
const correct = document.getElementById('correct');
const inCorrect = document.getElementById('inCorrect');
const gamOver = document.getElementById('gamOver')
///////////////////////////////////////////
///////////Functions / Statements//////////
///////////////////////////////////////////
//Create Deck/ gameSart / checkwin
function gameStart() {
	chips = 100;
	cardsInPlay = 0;
	message.innerHTML = 'Game Started!';
	cardOutput.innerHTML = '';
	start.style.display = 'none';
	highLow.style.display = 'block';
	buildCards();
	shuffleCards(cards);
	cardOutput.innerHTML += showCards();	
}
function hilo(pressedButton){
	let win = false;
	let oldCard = cards[cardsInPlay].cardValue;
	let myBetAmount = parseInt(bet.value);
	cardsInPlay++;
	cardOutput.innerHTML += showCards();
	let newCard = cards[cardsInPlay].cardValue;
	if(pressedButton === 'high' && oldCard < newCard) {
		win = true;
		chips += myBetAmount;
		message.innerHTML = 'You were Right! :)';
		//correct.style.display = 'block'
		//setTimeout(function () {
		//	correct.style.display = 'none'
		//}, 1000)
	} else if(pressedButton === 'low' && oldCard > newCard) {
		win = true;	
		chips += myBetAmount;
		message.innerHTML = 'You were Right! :)';
		//correct.style.display = 'block'
		//setTimeout(function () {
		//	correct.style.display = 'none'
		//}, 1000)
	} else if(oldCard === newCard) {
		message.innerHTML = 'Tie!'
	}else {
		win = false;
		chips -= myBetAmount;
		message.innerHTML = 'You were WRONG!:(';
		//inCorrect.style.display = 'block';
		//setTimeout(function () {
		//	inCorrect.style.display = 'none';
		//}, 2000)
		if(chips === 0) {
			message.innerHTML = 'GAME OVER!';
			endPLay();
		}
	}
}

function endPLay() {
	highLow.style.display = 'none';
	message.innerHTML = 'Game over. You have $' + chips;
	start.style.display = 'block';
	btnstart.innerHTML = 'Restart?';
	scoreOutput.style.display = 'none';
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
	var hpos = (cardsInPlay > 0) ? cardsInPlay * 80 + 30 : 30;
          return '<div class="icard ' + c.suit + '" style="left:' + hpos + 'px;"> <div class="cardtop suit">' + c.num + 
          		 '<br></div> <div class="cardmid suit"></div>  <div class="cardbottom suit">' + c.num + '<br></div></div>';
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

function checkBet() {
	if(this.value > chips) {
		this.value = chips;
	}
	if(this.value < 0) {
		this.value = 0;
	}
	message.innerHTML = "Bet changed to $" + this.value;
}
///////////////////////////////////////////
//////////////Eventlisteners///////////////
///////////////////////////////////////////
btnstart.addEventListener('click', gameStart);
//bet.addEventListener('change', checkBet);
//bet.addEventListener('blur', checkBet);


















