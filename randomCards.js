let deckSize = 60

let deckArray = Array.from({length: deckSize}, () => Math.floor(Math.random() * deckSize));

console.log(deckArray)