function trackDeckSize() {
    document.getElementById('Inner').innerHTML = '';

    const deckCount = document.createElement("Count");
    deckCount.id = 'Num'

    deckCount.innerHTML = deckArray.length
    document.getElementById('Inner').appendChild(deckCount);

    return deckArray.length
}

function drawCards(cardNum) {
    for (let i = 0; i < cardNum; i++) {
        handArray.push(deckArray.shift())
    }

    handArray = handArray.sort(function (a, b) { return a - b; });

    createHand()

    trackDeckSize()
}

function shuffleDeck() {
    deckArray = deckArray.sort((a, b) => 0.5 - Math.random());
}

function shuffleHand(cardNum) {
    let newDeck = deckArray.concat(handArray)

    handArray = []

    deckArray = newDeck

    shuffleDeck()

    drawCards(cardNum)

    createHand()
}

function moveIntoPlay(num) {
    playField.push(num)

    const index = handArray.indexOf(num);
    if (index > -1) {
        handArray.splice(index, 1);
    }
}

function discardFromPlay(array, num) {
    discardArray.push(num)

    const index = array.indexOf(num);
    if (index > -1) {
        array.splice(index, 1);
    }
}

function discardToHand(num) {
    handArray.push(num)

    const index = discardArray.indexOf(num);
    if (index > -1) {
        discardArray.splice(index, 1);
    }

    handArray = handArray.sort(function (a, b) { return a - b; });
}

function discardToDeck(num) {
    deckArray.push(num)

    const index = discardArray.indexOf(num);
    if (index > -1) {
        discardArray.splice(index, 1);
    }

    shuffleDeck()
}

function createHand() {
    let handArrayNum = handArray.length

    document.getElementById('Hand').innerHTML = '';

    for (let i = 0; i < handArrayNum; i++) {
        const cardValue = document.createElement("div");
        cardValue.className = 'Card-ID'

        let cardID = handArray[i]
        cardValue.innerHTML = cardID

        cardValue.addEventListener("click", function () { playCard(cardID) })

        document.getElementById('Hand').appendChild(cardValue);
    }
}

function playCard(num) {
    discardFromPlay(handArray, num)

    createHand()
}
