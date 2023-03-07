let cardType = 0
let slotPlace = ''

let setPlay = false

let validArray = []

function findIndex(board_id) {
    let idIndexLen = idIndex.length
    let idIndexOfIndexLen = idIndex[0].length


    for (let i = 0; i < idIndexLen; i++){
        for (let j = 0; j < idIndexOfIndexLen; j++){
            if (idIndex[i][j] == board_id){
                return [i, j]
            }
        }
    }
}

function validSlots(num) {
    let validSlotArray = []
    let slotIndex = ''

    if (playField[3][0] == '') {
        slotIndex = slots[3][0]
        validSlotArray.push(slotIndex)
    }

    return validSlotArray
}

function highlightValid(num) {
    validArray = validSlots(num)
    let validArrayLen = validArray.length

    if (setPlay == false) {

        for (let i = 0; i < validArrayLen; i++) {
            for (let j = 0; j < eleIdLen; j++) {
                if (validArray[i] == eleId[j]) {
                    document.getElementById(ele[j].id).style.backgroundColor = 'rgba(98, 236, 248, 0.5)'
                    cardType = num
                }
            }
        }
    }
}

function noHighlight() {
    let whiteout = document.getElementsByClassName("Slot")
    let whiteoutLen = whiteout.length

    if (setPlay == false) {

        for (let i = 0; i < whiteoutLen; i++) {
            whiteout[i].style.backgroundColor = "white"
        }
    }
}

function getIntoPlay(board_id) {
    validArray = validSlots(cardType)
    let validArrayLen = validArray.length

    for (let i = 0; i < validArrayLen; i++) {
        if (validArray[i] == board_id) {
            slotPlace = board_id
            if (setPlay) {
                document.getElementById(board_id).innerHTML = cardType

                fillDiscard(cardType)
                discardFromPlay(handArray, cardType)
                createHand()

                let updateArray = findIndex(board_id)
                let row = updateArray[0]
                let col = updateArray[1]

                playField[row][col] = cardType

                setPlay = false

                noHighlight()
            }
        }
    }
}