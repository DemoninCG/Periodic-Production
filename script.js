console.log("hello")
let game

function reset() {
	game = {
		protonAmount: new Decimal(0)
	}
}

reset()




function update() {
	document.getElementById("protonAmount").innerHTML = game.protonAmount
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
