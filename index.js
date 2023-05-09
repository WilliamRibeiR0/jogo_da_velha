let currentPlayer = 'x'
const gameSpaces = Array.from(document.querySelectorAll('.game-space'))
let gameSpacesValues = [
    null, null, null, 
    null, null, null,
    null, null, null
]

function setPlayerSpace(gameSpace, index) {
    if (gameSpace.dataset.player === undefined) {
        gameSpace.dataset.player = currentPlayer
        gameSpacesValues[index] = currentPlayer
        if (checkWin()) {
            setTimeout(() => alert(currentPlayer.toUpperCase() + ' Wins!!!') , 200);

            return
        }

        changePlayer()
    }
}

function changePlayer() {
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
    document.querySelector('.turn-img').style.backgroundImage = `url('img/$ {currentPlayer}.png')`
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ]

    for (let counter = 0; counter < winConditions.length; counter++) {
        const [a, b, c] = winConditions[counter]

        if (gameSpacesValues[a] === currentPlayer
            && gameSpacesValues[b] === currentPlayer
            && gameSpacesValues[c] === currentPlayer) {
            return true
        }
    }

    return false
}

function addPlayerInteraction() {
    gameSpaces.map((gameSpace, index) => {
        gameSpace.addEventListener('click', () => {
            setPlayerSpace(gameSpace, index)
        })
    })
}

addPlayerInteraction()