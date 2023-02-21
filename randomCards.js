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

function shuffleHand(deck, hand, cardNum) {
    let newDeck = deck.concat(hand)

    hand = []

    deck = newDeck
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    drawNewHand(deck, hand, cardNum)
    
    console.log("Deck after shuffle")
    console.log(deck)

    console.log("Hand after shuffle")
    console.log(hand)
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
