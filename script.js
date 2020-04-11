/* global Decimal*/
/* global Notation*/
/* global ADNotations*/

console.log("Hello there! This is a test console message to ensure the JS file works.")
let game

function reset() {
	game = {
		protonAmount: new Decimal(0),
		backgroundPosition: 0,
	}
	currentNotation = new ADNotations.MixedScientificNotation()
}

reset()







function update() {
	document.getElementById("protonAmount").innerHTML = currentNotation.format(game.protonAmount, 2, 0)
	if (window.innerWidth >= 1340) {
		document.getElementById("periodicTable").style.left = (window.innerWidth - 1330) / 2 + "px"
	}
	else {
		document.getElementById("periodicTable").style.left = "5px"
	}
}

setInterval(update, 10)





function backPos() {
	game.backgroundPosition += 1
	if (game.backgroundPosition >= 600) {
		game.backgroundPosition = 0
	}
	document.body.style.backgroundPosition = game.backgroundPosition + "px " + game.backgroundPosition + "px"
}

setInterval(backPos, 50)

function darkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

function protonAdd() {
	game.protonAmount = game.protonAmount.add(1)
}
function protonDouble() {
	game.protonAmount = game.protonAmount.multiply(2)
}
function protonPow() {
	game.protonAmount = game.protonAmount.pow(2)
}
