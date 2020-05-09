console.log("Hello there! This is another test console message to ensure the news file works.")

var starters=[
"Welcome back!",
"Welcome back to Periodic Production! I'll be your news ticker for today.",
"Oh hi! Didn't see you there. Welcome back!",
"Welcome back, player!",
"Heeey! You're back!",
"Oh, look how big you've grown now! It's been too long!",
"Oh, it's you again.",
"Please take your seat, the exam begins now.",
"It's been a long time. How have you been?",
]

if (game.started == true) {
	document.getElementById("news").innerHTML = starters[getRandomInt(starters.length)]
}

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
"Sorry but you've hit your proton limit for this month! Please upgrade your payment plan to continue.",
"*burp*",
"Where is Jessica Hyde?",
"You know, for a news ticker I give very little news.",
"News tickers are an elite job, given only to those with high skill and a large repertoire of knowledge. As for me? I just kind of snuck in the back.",
"Pfft. Time, I laugh at the concept. I can spend a whole day without even trying.",
"BREAKING NEWS: literally. I just dropped my plate and it broke. Hey, could you buy me a new plate?",
"Why don't you tell me the news for once? How's your life going? ... ... Okay... ... Oh, I'm sorry to hear that.",
"YOU ARE NOW BEING TRACKED FOR SUSPICIOUS ACTIVITY. PLEASE DO NOT LEAVE YOUR COMPUTER",
"It's okay to have this much matter in one place because black holes are disabled by default.",
"Oh, you're a geologist? Then tell me: Is 'The Rock' igneous, sedimentary, or metamorphic?",
"THERE IS NO ELEMENT 119",
"Nice proton bro. A little on the small side, but overall a nice shape. 8/10",
"Neutrons? Never heard of them. Not even real. Only protons are real.",
"Copper? I barely know her!",
"Thank you for playing ♥",
"Periodic Production is coming to VR in 2028! Stay tuned!",
"Now where could my pipe be? Garfield!!",
"Hey Vsauce, Michael here! Where are your protons?",
"hehe big numbre go up",
"I'm gonna go ahead and say you are looking sodium fine today.",
"Guys what does 'sodium nitrogen' mean please why is it in my code",
'Sir, I\'m very sorry to say your friend has died. I have here his final words for you: "My ex still misses me... BUT HER AIM IS GETTING BETTE-"',
"Editor's note: Ignore that last news ticker.",
'"Did you know that thulium is element 69? You know what that means riiiight?" "...That it\'s a lanthanide?"',
"So is H2O 40,000,000,002 protons now?",
"Periodic Production: Because physics can suck it!™",
"Do other news tickers treat their players right? No! This is what makes Periodic Production so good. I care about you, Whatever-your-name-is.",
"Today's tarot reading for you: Uncaught TypeError: Cannot read property 'style' of null",
"What's all this drama about 1.79e308 being equal to infinity? It's not even that big. What's wrong with you people?",
"After 1e100 years in development, hopefully it will have been worth the wait. Thanks, and have fun.",
"16 people now dead at the antiverse accelerator department, chief engineer claims 'It's just too damn entrancing to look at'",
"So what color are antiprotons, really? Well, one scientist claims to know the answer: 'They're sort of an orangey-bluish-blackish-white'",
"Local pro-neutron group finally silenced after months of riots. Neutrons don't exist. Everything is protons.",
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setNews() {
	document.getElementById("news").innerHTML = news[getRandomInt(news.length)]
	var timeUntilNextNews = 2000 + (document.getElementById("news").innerHTML.length * 100)
	setTimeout(setNews, timeUntilNextNews)
}

var timeUntilNextNews = 3500 + (document.getElementById("news").innerHTML.length * 100)
setTimeout(setNews, timeUntilNextNews)