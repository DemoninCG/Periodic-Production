console.log("Hello there! This is another test console message to ensure the news file works.")

var news = [
"I'd like to thank you for playing my game: Antimatter Di- Wait crap sorry, Periodic Production.",
"Local laboratory synthesizes new element, discovers it has a mass of over 100 NStQuMC-DSeOeMI-TVgQu. In unrelated news, Earth is now gone.",
"You will die in " + (getRandomInt(10)+1) + " days",
'"Create some news tickers" they said. "It will be fun" they said. I think I may be the least imaginative person on the planet.',
"Today's word of the day is: Defenestration. This is the word of the day for every day, because it is the only good word.",
"A woodchuck would chuck as much as a woodchuck could chuck if a woodchuck could chuck wood.",
"If it's your birthday: Happy birthday! If it's not, just ignore this message.",
"What even are sushi beans?",
"The plural of house is actually hice. Write it down.",
"if (newsTickers < enough) {newsTickers += 1}",
"If you're having trouble progressing, try pressing one of the buttons.",
"I have no clue why oganesson comes last. After all, it is the Og element.",
'"Oh, you\'re approaching me? Instead of getting more antiprotons, you\'re coming right to me? Even though your progress has slowed down over 10 times?" "I can\'t unlock the sh*t out of you without getting closer."',
"Sorry but you\'ve hit your proton limit for this month! Please upgrade your payment plan to continue.",
"*burp*",
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setNews() {
	document.getElementById("news").innerHTML = news[getRandomInt(news.length)]
	var timeUntilNextNews = 2000 + (document.getElementById("news").innerHTML.length * 60)
	setTimeout(setNews, timeUntilNextNews)
}

setTimeout(setNews, 6000)