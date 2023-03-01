let DECK_SIZE = 60
let INITIAL_HAND_SIZE = 5

let deckArray = [], handArray = [], discardArray = [], playField = [] 

let nums = []

for (let i = 1; i <= DECK_SIZE; i++) {
    nums.push(i)
}
let i = nums.length, j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    deckArray.push(nums[j]);
    nums.splice(j, 1);
}

drawCards(INITIAL_HAND_SIZE)

for (let i = 0; i < 2; i++) {
    playField.push(['', '', '', '', ''])
}