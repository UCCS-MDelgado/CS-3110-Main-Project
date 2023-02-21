import { drawCards } from "/cardFunctions.js"
import { shuffleDeck } from "/cardFunctions.js"
import { shuffleHand } from "/cardFunctions.js"
import { moveIntoPlay } from "/cardFunctions.js"
import { discardFromPlay } from "/cardFunctions.js"
import { discardToHand } from "/cardFunctions.js"
import { discardToDeck } from "/cardFunctions.js"

let DECK_SIZE = 60
let INITIAL_HAND_SIZE = 5

let deckArray = [], handArray = [], playField = [], discardArray = []

let nums = []

for (let i = 1; i <= DECK_SIZE; i++) {
    nums.push(i)
}
let i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    deckArray.push(nums[j]);
    nums.splice(j, 1);
}

console.log("Initial Deck")
console.log(deckArray)

drawCards(deckArray, handArray, INITIAL_HAND_SIZE)

let handArrayNum = handArray.length

for (let i = 0; i < handArrayNum; i++){
    const para = document.createElement("div");
    para.className = 'Card'

    para.innerHTML = handArray.shift()
    document.getElementById("Hand").appendChild(para);
}
