console.log("JS is linked")
////////////////////////////////////////////////////////////////////////////
////////////////////Objects,Arrays and variables(Global)////////////////////
////////////////////////////////////////////////////////////////////////////
//deck of cards
//cards in play (one flipped one is not)
//streak counter
//chips counter
//buttons
let chips = 100;
let cards = [];
let cardsInPlay = 0;
let myChips = document.getElementById('myChips');
let bet = document.getElementById('bet');
const cardOutput = document.getElementById('cardOutput');
const betOutput = document.getElementById('betOutput');
const betInput = document.getElementById('betInput');
const message = document.getElementById('message');
const start = document.getElementById('start');
const btnstart = document.getElementById('btnstart')
const highLow = document.getElementById('highLow');
const maxBet= document.getElementById('maxBet')
const suits = ['spades', 'hearts', 'clubs', 'diams'];
const numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//giphy varibles
//const correct = document.getElementById('correct');
//const inCorrect = document.getElementById('inCorrect');
//const gamOver = document.getElementById('gamOver')
///////////////////////////////////////////////////////////////////////////// 
/////////////////////////////Functions / Statements//////////////////////////
/////////////////////////////////////////////////////////////////////////////
//Create Deck/ gameSart / checkwin
function gameStart() {
	cardsInPlay = 0;
	chips = 100;
	bet.value = 0;
	myChips.innerHTML = chips;
	message.innerHTML = 'Game Started!';
	betOutput.style.display = 'block';
	betInput.style.display = 'block';
	cardOutput.innerHTML = '';		
	start.style.display = 'none';
	highLow.style.display = 'block';
	buildCards();
	shuffleCards(cards);
	cardOutput.innerHTML += showCards();	
}
function hilo(pressedButton){
	let oldCard = cards[cardsInPlay].cardValue;
	cardsInPlay++;
	cardOutput.innerHTML += showCards();
	let newCard = cards[cardsInPlay].cardValue;
	if(pressedButton === 'high' && oldCard < newCard) {
		chips += parseInt(bet.value);
		myChips.innerHTML = chips;
		message.innerHTML = 'You were Right! :)';
		/*correct.style.display = 'block'
		setTimeout(function () {
			correct.style.display = 'none'
		}, 1000)*/
	} else if(pressedButton === 'low' && oldCard > newCard) {	
		chips += parseInt(bet.value);
		myChips.innerHTML = chips;
		message.innerHTML = 'You were Right! :)';
		/*correct.style.display = 'block'
	*setTimeout(function () {
			correct.style.display = 'none'
		}, 1000)*/
	} else if(oldCard === newCard) {
		message.innerHTML = 'Tie!'
	}else {
		chips -= parseInt(bet.value);
		myChips.innerHTML = chips;
		message.innerHTML = 'You were WRONG!:(';
		/*inCorrect.style.display = 'block';
		setTimeout(function () {
			inCorrect.style.display = 'none';
		}, 2000)*/
		if(chips === 0) {
			message.innerHTML = 'GAME OVER!';
			endPLay();
		}if (cardsInPlay === 25) {
			endPlay();
		}
	}
}

function endPLay() {
	highLow.style.display = 'none';
	message.innerHTML = 'Game over. You have $' + chips;
	start.style.display = 'block';
	btnstart.innerHTML = 'Restart?';
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
	var hpos = (cardsInPlay > 0) ? cardsInPlay * 50 + 40 : 40;
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
function maximumBet() {
	bet.value = chips;
}
function checkBet() {
	if(this.value > chips) {
		this.value = chips;
		message.innerHTML = 'Bet adjusted to $ ' + this.value;
	}	
	if(this.value < 0) {
		this.value = 0;
		message.innerHTML = 'Bet adjusted to $ ' + this.value;
	}
	
}
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Eventlisteners//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
btnstart.addEventListener('click', gameStart);
bet.addEventListener('change', checkBet);
bet.addEventListener('input', checkBet);
bet.addEventListener('blur', checkBet);
maxBet.addEventListener('click', maximumBet);

















