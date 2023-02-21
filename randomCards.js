let DECK_SIZE = 60
let HAND_SIZE = 5

let deckArray = Array.from({ length: DECK_SIZE }, () => Math.floor(Math.random() * DECK_SIZE));

let handArray = []

for (let i = 0; i < HAND_SIZE; i++) {
    handArray.push(deckArray[i])
}

console.log(deckArray)
console.log(handArray)