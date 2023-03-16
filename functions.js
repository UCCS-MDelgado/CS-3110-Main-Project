function trackDeckSize() {
    document.getElementById('Inner').innerHTML = '';

    const deckCount = document.createElement("Count");
    deckCount.id = 'Num'

    deckCount.innerHTML = deckArray.length
    document.getElementById('Inner').appendChild(deckCount);

    if (deckArray.length == 0) {
        document.getElementById("Inner").style.backgroundColor = "white"
    }
    else {
        document.getElementById("Inner").style.backgroundColor = "#6ebcd6"
    }

    return deckArray.length
}

function checkIfEnoughCards(num) {
    let amount = deckArray.length

    if (amount == 0) {
        document.getElementById("Overlay").style.display = "block";
    }

    if (amount >= num) {
        return num
    }
    else {
        let cardsLeft = num - (num - amount)
        return cardsLeft
    }
}

function drawCards(cardNum) {
    let cardDraws = checkIfEnoughCards(cardNum)

    for (let i = 0; i < cardDraws; i++) {
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
    let cardDraws = checkIfEnoughCards(cardNum)

    shuffleDeck()

    drawCards(cardDraws)

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

function addEffect(array) {
    for (let i = 0; i < DECK_SIZE; i++) {
        let effect = effectText[Math.floor(Math.random() * effectText.length)]

        if (Math.floor(Math.random() * 2) == 0) {
            array.push([i, effect, true])
        }
        else {
            array.push([i, effect, false])
        }
    }
}

function createCard(num) {
    const newCard = document.createElement("div");
    newCard.className = "Playing-Card"
    newCard.id = num

    newCard.addEventListener("click", function () { playCard(num) })
    newCard.addEventListener("mouseover", function () { highlightValid(num) })
    newCard.addEventListener("mouseout", function () { noHighlight() })

    const trim = document.createElement("div");
    trim.className = "Trim"
    const content = document.createElement("div");
    content.className = "Content"

    newCard.appendChild(trim)
    trim.appendChild(content)

    const cardValue = document.createElement("div");
    cardValue.className = "Card-Value"
    const cardEffect = document.createElement("div")
    cardEffect.className = "Card-Effect"

    cardValue.innerHTML = num

    for (let i = 0; i < DECK_SIZE; i++) {
        if ((effectArray[i][0] == num) && (effectArray[i][2])) {
            cardEffect.innerHTML = effectArray[i][1]
        }
    }

    content.appendChild(cardValue)
    content.appendChild(cardEffect)

    document.getElementById('Hand').appendChild(newCard)
}

function createHand() {
    let handArrayNum = handArray.length

    document.getElementById('Hand').innerHTML = '';

    for (let i = 0; i < handArrayNum; i++) {
        createCard(handArray[i])
    }
}

function fillDiscardUsingIndex(index) {
    const list = document.getElementsByClassName("Card-Value")

    discarded = list[index].innerHTML

    fillDiscard(discarded)
}

function fillDiscard(num) {
    let list = document.getElementsByClassName("Card-Value")

    let index = 0

    for (let i = 0; i < handArray.length; i++) {
        if (list[i].innerHTML == num) {
            index = i
        }
    }

    document.getElementById("Discard").innerHTML = ''
    document.getElementById("Discard").appendChild(document.getElementsByClassName("Content")[index])
}

function playCard(num) {
    setPlay = false

    noHighlight()
    highlightValid(num)

    cardType = num

    setPlay = true

    let cardList = document.getElementsByClassName("Playing-Card")
    let handArrayNum = handArray.length

    for (let i = 0; i < handArrayNum; i++) {
        cardList[i].style.borderColor = 'black'
    }

    document.getElementById(num).style.borderColor = 'rgba(98, 183, 248)'
}
