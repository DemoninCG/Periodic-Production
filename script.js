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
		ingameSecondTime: Date.now(),
		ingameSecondBarHeight: 0,
		currentNotation: new ADNotations.StandardNotation(),

		baseCosts: [new Decimal(20), new Decimal(100)],
		elementAmounts: [],
		elementCosts: [],
	}

	game.elementAmounts.length = 119
	game.elementAmounts.fill(0)

	game.baseCosts.length = 117
	game.baseCosts.fill(new Decimal(69), 2, 117)

	document.getElementById("skills").style.display = "none"
	document.getElementById("statistics").style.display = "none"
	document.getElementById("options").style.display = "none"

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







// Stuff that needs to be updated every frame (16ms, 60 times/second)
function updateSmall() {
	if (document.getElementById("optionsNotation").value == "Standard") {
		game.currentNotation = new ADNotations.StandardNotation()
	}
	else if (document.getElementById("optionsNotation").value == "Scientific") {
		game.currentNotation = new ADNotations.ScientificNotation()
	}
	else if (document.getElementById("optionsNotation").value == "Engineering") {
		game.currentNotation = new ADNotations.EngineeringNotation()
	}
	else if (document.getElementById("optionsNotation").value == "Mixed Scientific") {
		game.currentNotation = new ADNotations.MixedScientificNotation()
	}
	else if (document.getElementById("optionsNotation").value == "Mixed Engineering") {
		game.currentNotation = new ADNotations.MixedEngineeringNotation()
	}
	else if (document.getElementById("optionsNotation").value == "Letters") {
		game.currentNotation = new ADNotations.LettersNotation()
	}
	else if (document.getElementById("optionsNotation").value == "Cancer") {
		game.currentNotation = new ADNotations.CancerNotation()
	}

	document.getElementsByClassName("protonAmount")[0].innerHTML = game.currentNotation.format(game.protonAmount, 2, 0)
	document.getElementsByClassName("protonAmount")[1].innerHTML = game.currentNotation.format(game.protonAmount, 2, 0)
	document.getElementsByClassName("protonAmount")[2].innerHTML = game.currentNotation.format(game.protonAmount, 2, 0)
	if (game.protonAmount == 0) {
		var protonAmountSeconds = new Decimal(0)
	}
	else {
		var protonAmountSeconds = new Decimal(game.protonAmount.log10())
	}
	if (protonAmountSeconds < 60) {
		document.getElementById("protonAmountSeconds").innerHTML = protonAmountSeconds.toFixed(1) + " seconds"
	}
	else if (protonAmountSeconds >= 60 && protonAmountSeconds < 3600) {
		document.getElementById("protonAmountSeconds").innerHTML = (protonAmountSeconds.divide(60)).toFixed(2) + " minutes"
	}
	else if (protonAmountSeconds >= 3600 && protonAmountSeconds < 86400) {
		document.getElementById("protonAmountSeconds").innerHTML = (protonAmountSeconds.divide(3600)).toFixed(2) + " hours"
	}
	else if (protonAmountSeconds >= 86400 && protonAmountSeconds < 31536000) {
		document.getElementById("protonAmountSeconds").innerHTML = (protonAmountSeconds.divide(86400)).toFixed(2) + " days"
	}
	else if (protonAmountSeconds >= 31536000) {
		document.getElementById("protonAmountSeconds").innerHTML = (protonAmountSeconds.divide(31536000)).toFixed(2) + " years"
	}

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
		if (game.elementAmounts[elementCostTemp+2] < 100) {
			game.elementCosts [elementCostTemp] = game.baseCosts [elementCostTemp] * Math.pow(elementCostTemp+2, game.elementAmounts[elementCostTemp+2])
		}
		else {
			game.elementCosts [elementCostTemp] = Infinity
		}
		var elementCostTemp2 = (elementCostTemp + 2) + "cost"
		document.getElementById(elementCostTemp2).innerHTML = game.currentNotation.format(game.elementCosts [elementCostTemp], 2, 0)
	}
}


// Stuff that needs to be updated every ingame second (starts at 1 second, decreases with tachyons)
function updateLarge() {
	game.protonAmount = game.protonAmount.add(new Decimal(game.elementAmounts[2]).multiply(game.elementAmounts[3] + 1))

	game.ingameSecondBarHeight = 0
	document.getElementById("ingameSecondBar").style.height = game.ingameSecondBarHeight + "%"
	setTimeout(updateLarge, game.ingameSecond)
	game.ingameSecondTime = Date.now()
}

setInterval(updateSmall, 16)
setTimeout(updateLarge, game.ingameSecond)




// Buying elements
function buyElement(x) {
	if (game.protonAmount >= game.elementCosts[x-2]) {
		game.protonAmount = game.protonAmount.subtract(game.elementCosts[x-2])
		game.elementAmounts[x] += 1
	}
}

// Switching tabs
function tableTabSwitch() {
	document.getElementById("table").style.display = "block"
	document.getElementById("skills").style.display = "none"
	document.getElementById("statistics").style.display = "none"
	document.getElementById("options").style.display = "none"

	var rowNumbers = document.getElementsByClassName("rowNumber")
	var rowNumberTemp
	for (rowNumberTemp = 0; rowNumberTemp < 7; rowNumberTemp++) {
		rowNumbers[rowNumberTemp].style.display = "block"
	}

	document.body.style.backgroundImage = "url('assets/back2.jpg')"
}

function skillsTabSwitch() {
	document.getElementById("table").style.display = "none"
	document.getElementById("skills").style.display = "block"
	document.getElementById("statistics").style.display = "none"
	document.getElementById("options").style.display = "none"

	var rowNumbers = document.getElementsByClassName("rowNumber")
	var rowNumberTemp
	for (rowNumberTemp = 0; rowNumberTemp < 7; rowNumberTemp++) {
		rowNumbers[rowNumberTemp].style.display = "none"
	}

	document.body.style.backgroundImage = "url('assets/back.jpg')"
}

function statisticsTabSwitch() {
	document.getElementById("table").style.display = "none"
	document.getElementById("skills").style.display = "none"
	document.getElementById("statistics").style.display = "block"
	document.getElementById("options").style.display = "none"

	var rowNumbers = document.getElementsByClassName("rowNumber")
	var rowNumberTemp
	for (rowNumberTemp = 0; rowNumberTemp < 7; rowNumberTemp++) {
		rowNumbers[rowNumberTemp].style.display = "none"
	}

	document.body.style.backgroundImage = "url('assets/back.jpg')"
}

function optionsTabSwitch() {
	document.getElementById("table").style.display = "none"
	document.getElementById("skills").style.display = "none"
	document.getElementById("statistics").style.display = "none"
	document.getElementById("options").style.display = "block"

	var rowNumbers = document.getElementsByClassName("rowNumber")
	var rowNumberTemp
	for (rowNumberTemp = 0; rowNumberTemp < 7; rowNumberTemp++) {
		rowNumbers[rowNumberTemp].style.display = "none"
	}

	document.body.style.backgroundImage = "url('assets/back.jpg')"
}

// Increase the height of the ingame second bar
function IngameSecondBarUp() {
	game.ingameSecondBarHeight = (Date.now() - game.ingameSecondTime) / (game.ingameSecond / 100)
	document.getElementById("ingameSecondBar").style.height = game.ingameSecondBarHeight + "%"
}

setInterval(IngameSecondBarUp, 10)


// Gives the player a message if their screen is not 1920x1080
function widthMessage() {
	document.getElementById("widthMessage").style.display = "block"
	setTimeout(widthMessageHide, 3000)
}

function widthMessageHide() {
	document.getElementById("widthMessage").style.display = "none"
}

// Smooth tab bar animations
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

// Add 1 proton, wow amazing
function protonAdd() {
	game.protonAmount = game.protonAmount.add(1)
}