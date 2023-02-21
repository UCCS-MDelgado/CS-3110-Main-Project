let DECK_SIZE = 60
let INITIAL_HAND_SIZE = 5

function drawCards(deck, hand, cardNum) {
    for (let i = 0; i < cardNum; i++) {
        hand.push(deck.shift())
    }
    
    console.log("Deck")
    console.log(deck)

    console.log("Hand")
    console.log(hand)
}

function shuffleHand(deck, hand, cardNum) {
    let newDeck = deck.concat(hand)

    hand = []

    deck = newDeck
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    drawCards(deck, hand, cardNum)
}

let nums = []

for (let i = 0; i < DECK_SIZE; i++){
    nums.push(i)
}
let deckArray = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    deckArray.push(nums[j]);
    nums.splice(j,1);
}

console.log("Initial Deck")
console.log(deckArray)

let handArray = []

drawCards(deckArray, handArray, INITIAL_HAND_SIZE)
