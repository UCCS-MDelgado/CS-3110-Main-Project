let cardType = 0
let slotPlace = ''

let setPlay = false
let checkValid = false

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
    let validArray = validSlots(num)
    let validArrayLen = validArray.length

    for (let i = 0; i < validArrayLen; i++) {
        for (let j = 0; j < eleIdLen; j++) {
            if (validArray[i] == eleId[j]) {
                document.getElementById(ele[j].id).style.backgroundColor = 'rgba(98, 236, 248, 0.5)'
                cardType = num
            }
        }
    }
}

function noHighlight() {
    let whiteout = document.getElementsByClassName("Slot")
    let whiteoutLen = whiteout.length

    for (let i = 0; i < whiteoutLen; i++) {
        whiteout[i].style.backgroundColor = "white"
    }
}

function getIntoPlay(board_id) {
    let validArray = validSlots(cardType)
    let validArrayLen = validArray.length

    for (let i = 0; i < validArrayLen; i++) {
        if (validArray[i] == board_id) {
            checkValid == true
            slotPlace = board_id
        }
    }
}