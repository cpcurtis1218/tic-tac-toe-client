'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const events = require('./events.js')

$(() => {
  let currentTurn = 1
  const currentGame = ['', '', '', '', '', '', '', '', '']

  $('#index-0').on('click', function () {
    // using currentTurn, determine if next click is 'o'
    if (currentTurn % 2 === 0) {
    // turn background red
      $(this).css('background-color', 'red')
      // assign currentGame[0] value 'o'
      currentGame[0] = 'o'
      // if next click is 'x'
    } else {
      // turn background blue
      $(this).css('background-color', 'blue')
      // assign currentGame[0] value 'x'
      currentGame[0] = 'x'
    }
    // increment currentTurn variable
    currentTurn++
    // log currentGame array
    console.log(currentGame)
    // disable event handler for this div
    $(this).off()
  })
  $('#index-1').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[1] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[1] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-2').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[2] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[2] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-3').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[3] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[3] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-4').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[4] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[4] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-5').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[5] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[5] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-6').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[6] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[6] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-7').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[7] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[7] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
  $('#index-8').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
      currentGame[8] = 'o'
    } else {
      $(this).css('background-color', 'blue')
      currentGame[8] = 'x'
    }
    currentTurn++
    console.log(currentGame)
    $(this).off()
  })
})
