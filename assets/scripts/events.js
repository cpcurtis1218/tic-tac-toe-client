'use strict'

const checkGameOver = function (gameArray) {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) {
    console.log('player ' + gameArray[0] + ' is the winner!')
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]) {
    console.log('player ' + gameArray[3] + ' is the winner!')
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8]) {
    console.log('player ' + gameArray[6] + ' is the winner!')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]) {
    console.log('player ' + gameArray[0] + ' is the winner!')
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7]) {
    console.log('player ' + gameArray[1] + ' is the winner!')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]) {
    console.log('player ' + gameArray[2] + ' is the winner!')
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) {
    console.log('player ' + gameArray[0] + ' is the winner!')
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) {
    console.log('player ' + gameArray[2] + ' is the winner!')
  }
}

module.exports = {
  checkGameOver
  // placePiece
}
