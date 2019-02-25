'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events.js')

$(() => {
  $('footer').hide()
  $('.user-button').hide()
  $('#total-games').hide()
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)

  $('#activate').on('click', events.playGame).on('click', events.onCreateGame)
  $('#total-games').on('click', events.onGetGames)
  $('.sign-in-dd-button').on('click', function () {
    $('.sign-in-dd').hide()
  })
})
