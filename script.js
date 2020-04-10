/* global Decimal*/
/* global Notation*/
/* global ADNotations*/

console.log("hello")
let game


function darkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

function reset() {
	game = {
		protonAmount: new Decimal(0)
	}
	currentNotation = new ADNotations.ScientificNotation()
}

reset()


function update() {
	document.getElementById("protonAmount").innerHTML = currentNotation.format(game.protonAmount.toString(), 2, 0)
}

setInterval(update, 10)




function protonAdd() {
	game.protonAmount = game.protonAmount.add(1)
}
function protonDouble() {
	game.protonAmount = game.protonAmount.multiply(2)
}
function protonPow() {
	game.protonAmount = game.protonAmount.pow(2)
}
