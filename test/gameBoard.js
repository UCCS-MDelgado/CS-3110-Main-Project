let cardType = 0
let slotPlace = ''

let setPlay = false

let validArray = []
let color = 'salmon'

let discardHTML = 0

let winner = ''

function swapInnerHTML(element1, element2) {
    let temp = element1.innerHTML;
    element1.innerHTML = element2.innerHTML;
    element2.innerHTML = temp;
}

function toggleColor() {
    if (color === 'salmon') {
        color = 'lightblue'
        deckArray = p2Deck
        handArray = p2Hand

        p1Discard = discardArray
        discardArray = p2Discard

        winner = "BLUE"
    } else {
        color = 'salmon'
        deckArray = p1Deck
        handArray = p1Hand

        p2Discard = discardArray
        discardArray = p1Discard

        winner = "RED"
    }

    let discard1 = document.getElementById("Discard");
    let discard2 = document.getElementById("Opponent_Discard");

    swapInnerHTML(discard1, discard2)
}

function swapMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transformedMatrix = [];

    for (let i = numRows - 1; i >= 0; i--) {
        const row = [];
        for (let j = numCols - 1; j >= 0; j--) {
            row.push(matrix[i][j]);
        }
        transformedMatrix.push(row);
    }

    return transformedMatrix;
}

function updateBoard(matrix1, matrix2) {
    const rows = document.querySelectorAll('.Row');
    for (let i = 0; i < rows.length; i++) {
        const slots = rows[i].querySelectorAll('.Slot');
        for (let j = 0; j < slots.length; j++) {
            slots[j].innerHTML = matrix1[i][j];
            if (matrix2[i][j] === 'salmon') {
                slots[j].style.backgroundColor = 'salmon';
            } else if (matrix2[i][j] === 'lightblue') {
                slots[j].style.backgroundColor = 'lightblue';
            } else {
                slots[j].style.backgroundColor = 'white';
            }
        }
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
        }
    }

    if ((col + 1) > 4) {
        if (num < tileNum) {
            tileIndex = slots[row - 1][col]
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
            if (playFieldColors[i][j] == color) {
                validSlotArray.push(validMoves(num, i, j))
            }
        }
    }

    let validSlotArrayLen = validSlotArray.length
    let tempArray = []

    for (let i = 0; i < validSlotArrayLen; i++) {
        if (document.getElementById(validSlotArray[i]).style.backgroundColor != color) {
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
                for (let j = 0; j < 4; j++) {
                    for (let k = 0; k < 5; k++) {
                        document.getElementById(idIndex[j][k]).style.backgroundColor = playFieldColors[j][k]
                    }
                }

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

                playField = swapMatrix(playField)
                playFieldColors = swapMatrix(playFieldColors)

                updateBoard(playField, playFieldColors)

                setPlay = false
                noHighlight()

                if (playFieldColors[3][0] == playFieldColors[0][4]) {
                    document.getElementById("Overlay").style.display = "block";
                    document.getElementById("Game-Over-Screen").innerHTML = winner + " WINS!"
                }

                activateEffect(effect)

                toggleColor()

                for (let i = 0; i < handArray.length; i++){
                    let slotsValid = []
                    slotsValid.push(validSlots(handArray[i]))
                    
                    if (slotsValid. length == 0){
                        console.log("No valid moves")
                    }
                }

                if (playFieldColors[0][4] == color) {
                    highlightValid(0)
                }

                drawCards(1)
            }
        }
    }
}