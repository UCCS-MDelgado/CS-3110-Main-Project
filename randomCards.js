let DECK_SIZE = 60
let HAND_SIZE = 5

function drawCard(deck, hand) {
    let newCard = deck.shift()
    hand.push(newCard)

    console.log("Deck after draw")
    console.log(deck)

    console.log("Hand after draw")
    console.log(hand)
}

let deckArray = Array.from({ length: DECK_SIZE }, () => Math.floor(Math.random() * DECK_SIZE));

console.log("Initial Deck")
console.log(deckArray)

let handArray = []

for (let i = 0; i < HAND_SIZE; i++) {
    handArray.push(deckArray.shift())
}

console.log("Cards in Hand")
console.log(handArray)

console.log("Cards Left in Deck")
console.log(deckArray)
