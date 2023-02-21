let deckSize = 60
let handSize = 5

let deckArray = Array.from({ length: deckSize }, () => Math.floor(Math.random() * deckSize));

let handArray = []

for (let i = 0; i < handSize; i++) {
    handArray.push(deckArray[i])
}

console.log(deckArray)
console.log(handArray)