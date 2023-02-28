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

addCardToHand(deckArray, handArray, INITIAL_HAND_SIZE)

