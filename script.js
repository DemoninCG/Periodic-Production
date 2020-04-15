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

	currentNotation = new ADNotations.StandardNotation()

	var givenWidthMessage = false
	if (screen.width != 1920 && givenWidthMessage == false) {
		givenWidthMessage = true
		widthMessage()
	}
}

reset()







function update() {
	document.getElementById("protonAmount").innerHTML = currentNotation.format(game.protonAmount, 2, 0)
}

setInterval(update, 10)






function widthMessage() {
	document.getElementById("widthMessage").style.display = "block"
	setTimeout(widthMessageHide, 3000)
}

function widthMessageHide() {
	document.getElementById("widthMessage").style.display = "none"
}


onmousemove = function(e) {
	if (e.clientX > window.innerWidth - 200) {
		document.getElementById("tabBar").style.width = "200px"
	}
	else {
		document.getElementById("tabBar").style.width = "40px"
	}
}

function backPos() {
	game.backgroundPosition += 1
	document.body.style.backgroundPosition = game.backgroundPosition + "px " + game.backgroundPosition + "px"
}

setInterval(backPos, 50)

function protonAdd() {
	game.protonAmount = game.protonAmount.add(1)
}
function protonDouble() {
	game.protonAmount = game.protonAmount.multiply(100)
}
function protonPow() {
	game.protonAmount = game.protonAmount.pow(2)
}
