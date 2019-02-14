'use strict'

const ui = require('./ui.js')

const alreadyClicked = function () {
  $('.user-message').html('').html('Invalid Move')

  setTimeout(function () {
    $('.user-message').html('')
  }, 2000)
}

const resetBoard = function (turn, gameArray) {
  gameArray = ['', '', '', '', '', '', '', '', '']
  turn = 1
  $('.game').css('background-color', 'white')
  $('.game').on()
}

const disableGame = function () {
  $('.game').off()
}

const checkGameOver = function (turn, gameArray) {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) {
    $('.user-message').html('player ' + gameArray[0] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]) {
    $('.user-message').html('player ' + gameArray[3] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8]) {
    $('.user-message').html('player ' + gameArray[6] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]) {
    $('.user-message').html('player ' + gameArray[0] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7]) {
    $('.user-message').html('player ' + gameArray[1] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]) {
    $('.user-message').html('player ' + gameArray[2] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) {
    $('.user-message').html('player ' + gameArray[0] + ' is the winner!')
    disableGame()
    ui.playAgain()
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) {
    $('.user-message').html('player ' + gameArray[2] + ' is the winner!')
    disableGame()
    ui.playAgain()
  }
}

module.exports = {
  checkGameOver,
  resetBoard,
  alreadyClicked
}
