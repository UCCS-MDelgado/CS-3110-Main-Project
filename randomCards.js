let DECK_SIZE = 60
let INITIAL_HAND_SIZE = 5

function drawCard(deck, hand) {
    let newCard = deck.shift()
    hand.push(newCard)

    console.log("Deck after draw")
    console.log(deck)

    console.log("Hand after draw")
    console.log(hand)
}

function drawNewHand(deck, hand, cardNum) {
    for (let i = 0; i < cardNum; i++) {
        hand.push(deck.shift())
    }
}

let deckArray = Array.from({ length: DECK_SIZE }, () => Math.floor(Math.random() * DECK_SIZE));

console.log("Initial Deck")
console.log(deckArray)

let handArray = []

drawNewHand(deckArray, handArray, INITIAL_HAND_SIZE)

console.log("Cards in Hand")
console.log(handArray)

console.log("Cards Left in Deck")
console.log(deckArray)
