let cardType = 0
let slotPlace = ''

let setPlay = false

let validArray = []
let color = 'salmon'

function toggleColor() {
    if (color === 'salmon') {
        color = 'lightblue'
    } else {
        color = 'salmon'
    }
}

function findIndex(board_id) {
    let idIndexLen = idIndex.length
    let idIndexOfIndexLen = idIndex[0].length


    for (let i = 0; i < idIndexLen; i++) {
        for (let j = 0; j < idIndexOfIndexLen; j++) {
            if (idIndex[i][j] == board_id) {
                return [i, j]
            }
        }
    }
}

function validMoves(num, row, col) {
    let tileNum = playField[row][col]

    let tileIndex = ''

    if ((row - 1) < 0) {
        if ((col + 1) > 4) {
            document.getElementById("Overlay").style.display = "block";
        }
        else {
            if (num > tileNum) {
                tileIndex = slots[row][col + 1]
            }

            return tileIndex
        }
    }

    if ((col + 1) > 4) {
        if (num < tileNum) {
            tileIndex = slots[row - 1][col]

            return tileIndex
        }
    }

    if (num > tileNum) {
        tileIndex = slots[row][col + 1]
    }
    else if (num < tileNum) {
        tileIndex = slots[row - 1][col]
    }

    return tileIndex
}

function validSlots(num) {
    let validSlotArray = []
    let slotIndex = ''

    if (playField[3][0] == '') {
        slotIndex = slots[3][0]
        validSlotArray.push(slotIndex)

        return validSlotArray
    }

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            if (playField[i][j] != '') {
                validSlotArray.push(validMoves(num, i, j))
            }
        }
    }

    let validSlotArrayLen = validSlotArray.length
    let tempArray = []

    for (let i = 0; i < validSlotArrayLen; i++) {
        if (document.getElementById(validSlotArray[i]).innerHTML.trim() == "") {
            tempArray.push(validSlotArray[i])
        }
    }

    validSlotArray = tempArray

    return validSlotArray
}

function highlightValid(num) {
    validArray = validSlots(num)
    let validArrayLen = validArray.length

    if (setPlay == false) {

        for (let i = 0; i < validArrayLen; i++) {
            for (let j = 0; j < eleIdLen; j++) {
                if (validArray[i] == eleId[j]) {
                    document.getElementById(ele[j].id).style.backgroundColor = 'rgba(96, 244, 132, 0.5)'
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
            if (whiteout[i].innerText == '') {
                whiteout[i].style.backgroundColor = "white"
            }
            else {
                // do nothing
            }
        }
    }
}


function activateEffect(effect) {
    let effectTextLen = effectText.length
    for (let i = 0; i < effectTextLen; i++) {
        if (effectText[i] == effect) {
            effects[i]()
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
                document.getElementById(board_id).innerText = cardType

                let effect = document.getElementById(cardType).getElementsByClassName("Card-Effect")[0].innerHTML

                discardFromPlay(handArray, cardType)

                const index = discardArray.indexOf(cardType);
                if (index > -1) {
                    discardArray.splice(index, 1)
                }

                createHand()

                let updateArray = findIndex(board_id)
                let row = updateArray[0]
                let col = updateArray[1]

                playField[row][col] = cardType
                document.getElementById(board_id).style.backgroundColor = color

                if (color == 'salmon') {
                    playFieldColors[row][col] = 'salmon'
                } else {
                    playFieldColors[row][col] = 'lightblue'
                }

                setPlay = false
                noHighlight()

                activateEffect(effect)

                toggleColor()

                if (playField[0][4] != '') {
                    highlightValid(0)
                }
            }
        }
    }
}