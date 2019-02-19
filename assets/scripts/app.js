'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')

$(() => {
  $('footer').hide()
  $('#total-games').hide()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword).hide()
  $('#sign-out').on('submit', events.onSignOut).hide()

  $('#activate').on('click', events.playGame).on('click', events.onCreateGame)
  $('#total-games').on('click', events.onGetGames)
})
