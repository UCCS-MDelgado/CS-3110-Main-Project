export function drawCards(deck, hand, cardNum) {
    for (let i = 0; i < cardNum; i++) {
        hand.push(deck.shift())
    }

    hand = hand.sort(function (a, b) { return a - b; });
}

export function shuffleDeck(deck) {
    deck = deck.sort((a, b) => 0.5 - Math.random());
}

export function shuffleHand(deck, hand, cardNum) {
    let newDeck = deck.concat(hand)

    hand = []

    deck = newDeck
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    drawCards(deck, hand, cardNum)
}

export function moveIntoPlay(field, hand, num) {
    field.push(num)

    const index = hand.indexOf(num);
    if (index > -1) {
        hand.splice(index, 1);
    }
}

export function discardFromPlay(array, num, discard) {
    discard.push(num)

    const index = array.indexOf(num);
    if (index > -1) {
        array.splice(index, 1);
    }
}

export function discardToHand(hand, discard, num) {
    hand.push(num)

    const index = discard.indexOf(num);
    if (index > -1) {
        discard.splice(index, 1);
    }

    hand = hand.sort(function (a, b) { return a - b; });
}

export function discardToDeck(deck, discard, num){
    deck.push(num)

    const index = discard.indexOf(num);
    if (index > -1) {
        discard.splice(index, 1);
    }

    shuffleDeck(deck)
}