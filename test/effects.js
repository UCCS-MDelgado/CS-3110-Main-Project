const DRAW_TWO = "Draw two cards."
const DRAW_UNTIL_FIVE = "Draw cards until there are five cards in your hand."
const SHUFFLE_UNTIL_FIVE = "Shuffle your hand into your deck, then draw five cards."
const DISCARD_HAND = "Discard all cards in your hand, then draw six cards."

const effectText = [DRAW_TWO, DRAW_UNTIL_FIVE, SHUFFLE_UNTIL_FIVE, DISCARD_HAND ]

const effects = [drawTwo, drawUntilFive, shuffleUntilFive, discardHand]

function drawTwo() {
    drawCards(2)
}

function drawUntilFive() {
    if (handArray.length < 5) {
        let cardsToDraw = 5 - handArray.length

        for (let i = 0; i < cardsToDraw; i++) {
            drawCards(1)
        }
    }
}

function shuffleUntilFive() {
    shuffleHand(5)
}

function discardHand() {
    handSize = handArray.length

    fillDiscardUsingIndex(handSize - 1)

    let cardDraws = checkIfEnoughCards(6)

    for (let i = 0; i < handSize; i++) {
        let discarded = handArray[0]
        discardFromPlay(handArray, discarded)
    }

    drawCards(cardDraws)
}

function bothShuffleToThree() {
    shuffleHand(3)
}

function shuffleToBottom() {
    handArray = handArray.sort((a, b) => 0.5 - Math.random());

    deckArray = deckArray.concat(handArray)

    handArray = []

    drawCards(4)
}