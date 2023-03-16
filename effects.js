const DRAW_TWO = "Draw Two Cards."
const DRAW_UNTIL_FIVE = "Draw Cards Until there are five cards in your hand."
const SHUFFLE_UNTIL_FIVE = "Shuffle your hand into your deck, then draw five cards."
const DISCARD_HAND = "Discard all cards in your hand, then draw six cards."
const BOTH_SHUFFLE_TO_THREE = "Both players shuffle their hands into their deck, then both players draw three cards."
const SHUFFLE_TO_BOTTOM = "Both players shuffle their hands and place the cards at the bottom of the deck. Draw four cards and your opponent draws two cards."

const DISCARD_CARD = "Discard one random card from your opponent's hand."
const DISCARD_TOP = "Discard the top two cards of the opponent's deck."

const HALVE_VALUE = "Select one card on the field, that card's value is now half."
const DOUBLE_VALUE = "Select one card on the field, that card's value is now double."
const SWAP_CARDS = "Select one card in your hand and one of your card's in play, swap the cards from field to hand and hand to field. (Only valid moves)."

const SHUFFLE_DISCARD_INTO_DECK = "Shuffle three cards in the discard pile into the deck."
const DISCARD_TO_HAND = "Add one card from the discard pile into your hand."

const effectText = [DRAW_TWO, DRAW_UNTIL_FIVE, SHUFFLE_UNTIL_FIVE, DISCARD_HAND, BOTH_SHUFFLE_TO_THREE, SHUFFLE_TO_BOTTOM, DISCARD_CARD, DISCARD_TOP, HALVE_VALUE, DOUBLE_VALUE, SWAP_CARDS, SHUFFLE_DISCARD_INTO_DECK, DISCARD_TO_HAND]

const effects = [drawTwo, drawUntilFive, shuffleUntilFive, discardHand, bothShuffleToThree]

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