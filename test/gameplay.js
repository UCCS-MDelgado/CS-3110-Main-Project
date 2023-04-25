let DECK_SIZE = 60
let INITIAL_HAND_SIZE = 5

let playField = [], playFieldColors = []

let deckArray = [], handArray = [], discardArray = [], effectArray = []

let p1Deck = [], p1Hand = [], p1Discard = [], p1Effects = []
let p2Deck = [], p2Hand = [], p2Discard = [], p2Effects = []

let nums = []

let previewIndex = 0

let htmlArrays = []

for (let i = 1; i <= DECK_SIZE; i++) {
    nums.push(i)
}

for (let i = nums.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    p1Deck.push(nums[j]);
    nums.splice(j, 1);
}

for (let i = 1; i <= DECK_SIZE; i++) {
    nums.push(i)
}

for (let i = nums.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    p2Deck.push(nums[j]);
    nums.splice(j, 1);
}

deckArray = p1Deck

effectArray = p1Effects
p1Hand = handArray

addEffect(p1Effects)
addEffect(p2Effects)

for (let i = 0; i < INITIAL_HAND_SIZE; i++) {
    p2Hand.push(p2Deck.shift())
}

p2Hand = p2Hand.sort(function (a, b) { return a - b; });

drawCards(INITIAL_HAND_SIZE)

for (let i = 0; i < 4; i++) {
    playField.push(['', '', '', '', ''])
    playFieldColors.push(['white', 'white', 'white', 'white', 'white'])
}

let ele = document.getElementsByClassName("Slot")
let eleLen = ele.length

let eleId = []
let eleIdLen = 0

let idIndex = []

let temp = []

let slots = []
let row = []

for (let i = 0; i < eleLen; i++) {
    let slotID = ele[i].id
    eleId.push(slotID)
    eleIdLen = eleId.length

    if ((i + 1) % 5 == 0) {
        row.push(slotID)
        temp.push(slotID)

        slots.push(row)
        idIndex.push(temp)

        row = []
        temp = []
    }
    else {
        row.push(slotID)
        temp.push(slotID)
    }
}