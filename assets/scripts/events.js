'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('./store.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  console.log('form:', form)
  const formData = getFormFields(form)
  console.log('formData', formData)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpInFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  console.log('form:', form)
  const formData = getFormFields(form)
  console.log('formData', formData)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signUpInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  console.log('form:', form)
  const formData = getFormFields(form)
  console.log('formData', formData)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onCreateGame = event => {
  console.log('game created!')

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const alreadyClicked = function () {
  $('.user-message').html('Invalid Move').removeClass('message-success').addClass('message-failure')
  ui.resetUserMessage()
}

const disableGame = function () {
  $('.game').off()
}

const checkGameOver = function (turn, gameArray) {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) {
    $('.user-message').html('player ' + gameArray[0] + ' is the winner!')
    disableGame()
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]) {
    $('.user-message').html('player ' + gameArray[3] + ' is the winner!')
    disableGame()
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8]) {
    $('.user-message').html('player ' + gameArray[6] + ' is the winner!')
    disableGame()
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]) {
    $('.user-message').html('player ' + gameArray[0] + ' is the winner!')
    disableGame()
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7]) {
    $('.user-message').html('player ' + gameArray[1] + ' is the winner!')
    disableGame()
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]) {
    $('.user-message').html('player ' + gameArray[2] + ' is the winner!')
    disableGame()
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) {
    $('.user-message').html('player ' + gameArray[0] + ' is the winner!')
    disableGame()
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) {
    $('.user-message').html('player ' + gameArray[2] + ' is the winner!')
    disableGame()
  } else if (turn === 10) {
    $('.user-message').html(`It's a draw!`)
    disableGame()
  }
}

const playGame = function () {
  disableGame()
  $('.game').addClass('blank').removeClass('skier').removeClass('snowboarder')
  let currentTurn = 1
  const currentGame = ['', '', '', '', '', '', '', '', '']

  $('#index-0').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[0] === '') {
      ui.onOSuccess(this)
      currentGame[0] = 'o'
      api.reportTurnO(0)
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[0] === '') {
      ui.onXSuccess(this)
      currentGame[0] = 'x'
      api.reportTurnX(0)
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
    console.log(store.game.cells)
  })
  $('#index-1').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[1] === '') {
      ui.onOSuccess(this)
      currentGame[1] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[1] === '') {
      ui.onXSuccess(this)
      currentGame[1] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-2').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[2] === '') {
      ui.onOSuccess(this)
      currentGame[2] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[2] === '') {
      ui.onXSuccess(this)
      currentGame[2] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-3').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[3] === '') {
      ui.onOSuccess(this)
      currentGame[3] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[3] === '') {
      ui.onXSuccess(this)
      currentGame[3] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-4').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[4] === '') {
      ui.onOSuccess(this)
      currentGame[4] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[4] === '') {
      ui.onXSuccess(this)
      currentGame[4] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-5').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[5] === '') {
      ui.onOSuccess(this)
      currentGame[5] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[5] === '') {
      ui.onXSuccess(this)
      currentGame[5] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-6').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[6] === '') {
      ui.onOSuccess(this)
      currentGame[6] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[6] === '') {
      ui.onXSuccess(this)
      currentGame[6] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-7').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[7] === '') {
      ui.onOSuccess(this)
      currentGame[7] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[7] === '') {
      ui.onXSuccess(this)
      currentGame[7] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
  $('#index-8').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[8] === '') {
      ui.onOSuccess(this)
      currentGame[8] = 'o'
      currentTurn++
    } else if (currentTurn % 2 === 1 && currentGame[8] === '') {
      ui.onXSuccess(this)
      currentGame[8] = 'x'
      currentTurn++
    } else {
      $(this).on('click', alreadyClicked())
    }
    checkGameOver(currentTurn, currentGame)
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  alreadyClicked,
  checkGameOver,
  playGame
}
