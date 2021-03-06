'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpInFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signUpInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onCreateGame = event => {
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onGetGames = event => {
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const alreadyClicked = function () {
  $('.user-message').html('Invalid Move').removeClass('message-success').addClass('message-failure')
  ui.resetUserMessage()
}

const disableGame = function () {
  $('.game').off()
}

const playAgain = function () {
  $('.game').on('click', function () {
    $('.user-message').html('Game Over - Click `New Game` To Play Again!').removeClass('message-success').addClass('message-failure')
    ui.resetUserMessage()
  })
}

const checkGameOver = function (turn, gameArray) {
  if (gameArray[0] !== '' && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2]) {
    if (gameArray[0] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[3] !== '' && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5]) {
    if (gameArray[3] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[6] !== '' && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8]) {
    if (gameArray[6] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6]) {
    if (gameArray[0] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[1] !== '' && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7]) {
    if (gameArray[1] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8]) {
    if (gameArray[2] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[0] !== '' && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) {
    if (gameArray[0] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (gameArray[2] !== '' && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) {
    if (gameArray[2] === 'x') {
      $('.user-message').html('Skiers Win!').addClass('message-success').removeClass('message-failure')
    } else {
      $('.user-message').html('Snowboarders Win!').addClass('message-success').removeClass('message-failure')
    }
    disableGame()
    playAgain()
    return true
  } else if (turn === 10) {
    $('.user-message').html(`It's a draw!`).addClass('message-success').removeClass('message-failure')
    disableGame()
    playAgain()
    return true
  } else {
    return false
  }
}

const playGame = function () {
  disableGame()
  $('.game').addClass('blank').removeClass('skier').removeClass('snowboarder')
  let currentTurn = 1
  const currentGame = ['', '', '', '', '', '', '', '', '']

  $('#index-0').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[0] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[0] = 'o'
      api.reportTurnO(0, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[0] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[0] = 'x'
      api.reportTurnX(0, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-1').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[1] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[1] = 'o'
      api.reportTurnO(1, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[1] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[1] = 'x'
      api.reportTurnX(1, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-2').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[2] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[2] = 'o'
      api.reportTurnO(2, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[2] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[2] = 'x'
      api.reportTurnX(2, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-3').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[3] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[3] = 'o'
      api.reportTurnO(3, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[3] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[3] = 'x'
      api.reportTurnX(3, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-4').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[4] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[4] = 'o'
      api.reportTurnO(4, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[4] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[4] = 'x'
      api.reportTurnX(4, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-5').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[5] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[5] = 'o'
      api.reportTurnO(5, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[5] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[5] = 'x'
      api.reportTurnX(5, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-6').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[6] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[6] = 'o'
      api.reportTurnO(6, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[6] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[6] = 'x'
      api.reportTurnX(6, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-7').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[7] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[7] = 'o'
      api.reportTurnO(7, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[7] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[7] = 'x'
      api.reportTurnX(7, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
  $('#index-8').on('click', function () {
    if (currentTurn % 2 === 0 && currentGame[8] === '') {
      currentTurn++
      ui.onOSuccess(this)
      currentGame[8] = 'o'
      api.reportTurnO(8, checkGameOver(currentTurn, currentGame))
    } else if (currentTurn % 2 === 1 && currentGame[8] === '') {
      currentTurn++
      ui.onXSuccess(this)
      currentGame[8] = 'x'
      api.reportTurnX(8, checkGameOver(currentTurn, currentGame))
    } else {
      $(this).on('click', alreadyClicked())
    }
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onGetGames,
  alreadyClicked,
  checkGameOver,
  playGame
}
