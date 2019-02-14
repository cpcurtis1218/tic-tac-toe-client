'use strict'

let currentTurn = 1

const placePiece = function () {
  if (currentTurn % 2 === 0) {
    $(this).css('background-color', 'red')
  } else {
    $(this).css('background-color', 'blue')
  }
  currentTurn++
  $(this).off()
}

module.exports = {
  placePiece
}
