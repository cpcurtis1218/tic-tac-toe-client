'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)

  let currentTurn = 1
  const currentGame = ['', '', '', '', '', '', '', '', '']

  $('#index-0').on('click', function () {
    // using currentTurn, determine if next click is blue (x) or red(o)
    if (currentTurn % 2 === 0 && currentGame[0] === '') {
    // turn background red
      $(this).css('background-color', 'red')
      // assign currentGame[0] value 'o'
      currentGame[0] = 'o'
      // if next click is 'x'
      currentTurn++
    } else if (currentGame[0] === '') {
      // turn background blue
      $(this).css('background-color', 'blue')
      // assign currentGame[0] value 'x'
      currentGame[0] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    // log currentTurn
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-1').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[1] === '') {
      $(this).css('background-color', 'red')
      currentGame[1] = 'o'
      currentTurn++
    } else if (currentGame[1] === '') {
      $(this).css('background-color', 'blue')
      currentGame[1] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-2').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[2] === '') {
      $(this).css('background-color', 'red')
      currentGame[2] = 'o'
      currentTurn++
    } else if (currentGame[2] === '') {
      $(this).css('background-color', 'blue')
      currentGame[2] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-3').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[3] === '') {
      $(this).css('background-color', 'red')
      currentGame[3] = 'o'
      currentTurn++
    } else if (currentGame[3] === '') {
      $(this).css('background-color', 'blue')
      currentGame[3] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-4').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[4] === '') {
      $(this).css('background-color', 'red')
      currentGame[4] = 'o'
      currentTurn++
    } else if (currentGame[4] === '') {
      $(this).css('background-color', 'blue')
      currentGame[4] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-5').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[5] === '') {
      $(this).css('background-color', 'red')
      currentGame[5] = 'o'
      currentTurn++
    } else if (currentGame[5] === '') {
      $(this).css('background-color', 'blue')
      currentGame[5] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-6').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[6] === '') {
      $(this).css('background-color', 'red')
      currentGame[6] = 'o'
      currentTurn++
    } else if (currentGame[6] === '') {
      $(this).css('background-color', 'blue')
      currentGame[6] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-7').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[7] === '') {
      $(this).css('background-color', 'red')
      currentGame[7] = 'o'
      currentTurn++
    } else if (currentGame[7] === '') {
      $(this).css('background-color', 'blue')
      currentGame[7] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })
  $('#index-8').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[8] === '') {
      $(this).css('background-color', 'red')
      currentGame[8] = 'o'
      currentTurn++
    } else if (currentGame[8] === '') {
      $(this).css('background-color', 'blue')
      currentGame[8] = 'x'
      currentTurn++
    } else {
      $(this).on('click', events.alreadyClicked())
    }
    console.log('current turn is ', currentTurn)
    // run win condition
    console.log(events.checkGameOver(currentTurn, currentGame))
  })

  $('.play-again-button').on('click', events.resetBoard)
})
