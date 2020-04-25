/* global Decimal*/
/* global Notation*/
/* global ADNotations*/

console.log("Hello there! This is a test console message to ensure the JS file works.")
let game

function reset() {
	game = {
		protonAmount: new Decimal(0),
		backgroundPosition: 0,
		tabBarOut: false,
		tabBarX: 0,
		ingameSecond: 1000,
		ingameSecondBarHeight: 0,

		baseCosts: [20, 100, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 
		69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 
		69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 
		69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 
		69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69],
		elementAmounts: [],
		elementCosts: [],
	}

	currentNotation = new ADNotations.StandardNotation()

	var givenWidthMessage = false
	if (screen.width != 1920 && givenWidthMessage == false) {
		givenWidthMessage = true
		widthMessage()
	}
	else if (screen.height != 1080 && givenWidthMessage == false) {
		givenWidthMessage = true
		widthMessage()
	}
}

reset()





function updateSmall() {
	document.getElementById("protonAmount").innerHTML = currentNotation.format(game.protonAmount, 2, 0)
	document.getElementById("tabBar").style.width = (Math.sin(game.tabBarX / 25) * 160 + 40) + "px"
	document.getElementById("tabLogo").style.right = (Math.sin(game.tabBarX / 25) * 160 - 156) + "px"
	document.getElementById("versionText").style.right = (Math.sin(game.tabBarX / 25) * 160 - 105) + "px"
	document.getElementById("tableTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 70) + "px"
	document.getElementById("prestigeTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 90) + "px"
	document.getElementById("skillsTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 90) + "px"
	document.getElementById("neutronsTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 90) + "px"
	document.getElementById("tachyonsTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 90) + "px"
	document.getElementById("optionsTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 90) + "px"
	document.getElementById("statisticsTab").style.width = (Math.sin(game.tabBarX / 25) * 250 - 90) + "px"
	document.getElementById("tabBarText").style.lineHeight = (window.innerHeight / 1.5 + 210) + "px"

	if (game.tabBarOut == true && game.tabBarX < 40) {
		game.tabBarX += 1
	}
	if (game.tabBarOut == false && game.tabBarX > 0) {
		game.tabBarX -= 1
	}

	if ((Math.sin(game.tabBarX / 25) * 250 - 90) > 0) {
		document.getElementById("prestigeTab").style.display = "block"
		document.getElementById("skillsTab").style.display = "block"
		document.getElementById("neutronsTab").style.display = "block"
		document.getElementById("tachyonsTab").style.display = "block"
		document.getElementById("optionsTab").style.display = "block"
		document.getElementById("statisticsTab").style.display = "block"
	}
	else {
		document.getElementById("prestigeTab").style.display = "none"
		document.getElementById("skillsTab").style.display = "none"
		document.getElementById("neutronsTab").style.display = "none"
		document.getElementById("tachyonsTab").style.display = "none"
		document.getElementById("optionsTab").style.display = "none"
		document.getElementById("statisticsTab").style.display = "none"
	}

	if ((Math.sin(game.tabBarX / 25) * 250 - 70) > 0) {
		document.getElementById("tableTab").style.display = "block"
	}
	else {
		document.getElementById("tableTab").style.display = "none"
	}

	var elementCostTemp
	for (elementCostTemp = 0; elementCostTemp <= 116; elementCostTemp++) {
		game.elementCosts [elementCostTemp] = game.baseCosts [elementCostTemp]
		var elementCostTemp2 = (elementCostTemp + 2) + "cost"
		document.getElementById(elementCostTemp2).innerHTML = game.elementCosts [elementCostTemp]
	}
}

function updateLarge() {
	game.ingameSecondBarHeight = 0
	document.getElementById("ingameSecondBar").style.height = game.ingameSecondBarHeight + "%"
}

setInterval(updateSmall, 16)
setInterval(updateLarge, game.ingameSecond)







function IngameSecondBarUp() {
	game.ingameSecondBarHeight += (1000 / game.ingameSecond)
	document.getElementById("ingameSecondBar").style.height = game.ingameSecondBarHeight + "%"
}

setInterval(IngameSecondBarUp, 10)

function widthMessage() {
	document.getElementById("widthMessage").style.display = "block"
	setTimeout(widthMessageHide, 3000)
}

function widthMessageHide() {
	document.getElementById("widthMessage").style.display = "none"
}

function tabBarOpen() {
	game.tabBarOut = true
	document.getElementById("tabBarText").style.display = "none"
}

function tabBarClose() {
	game.tabBarOut = false
	document.getElementById("tabBarText").style.display = "block"
}

function backPos() {
	game.backgroundPosition += 1
	document.body.style.backgroundPosition = game.backgroundPosition + "px " + game.backgroundPosition + "px"
}

setInterval(backPos, 50)

function protonAdd() {
	game.protonAmount = game.protonAmount.add(1)
}