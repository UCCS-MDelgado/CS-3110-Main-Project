let DECK_SIZE = 60
let INITIAL_HAND_SIZE = 5

let deckArray = [], handArray = [], discardArray = [], playField = [], effectArray = [], playFieldColors = []

let nums = []

let previewIndex = 0

let htmlArrays = []

for (let i = 1; i <= DECK_SIZE; i++) {
    nums.push(i)
}
let i = nums.length, j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    deckArray.push(nums[j]);
    nums.splice(j, 1);
}

addEffect(effectArray)

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