'use strict'

const store = require('./store.js')

const resetUserMessage = function () {
  setTimeout(function () {
    $('.user-message').html('')
  }, 2000)
}

const startMessage = function () {
  $('.user-message').html('Sign Up or Sign In to Play!').removeClass('message-failure').removeClass('message-success')
}

const playMessage = function () {
  $('.user-message').html(`Click 'Play Game' to Begin!`).removeClass('message-failure').addClass('message-success')
}

const signUpSuccess = function () {
  $('.user-message').html('Sign Up Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const signInSuccess = function (responseData) {
  $('.user-message').html('Sign In Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  $('footer').show()
  $('#total-games').show()
  $('#change-password-form').show()
  $('#sign-out').show()
  $('.sign-in-up-button').hide()
  store.user = responseData.user
  setTimeout(playMessage, 2000)
}

const changePasswordSuccess = function () {
  $('.user-message').html('Password Change Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const signOutSuccess = function () {
  $('.user-message').html('Sign Out Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  $('footer').hide()
  $('#total-games').hide()
  $('.games-message').html('')
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('.sign-in-up-button').show()
  $('.game').addClass('blank').removeClass('skier').removeClass('snowboarder').off()
  setTimeout(startMessage, 2000)
  store.user = null
}

const createGameSuccess = function (responseData) {
  $('.user-message').html('New Game Created!').removeClass('message-failure').addClass('message-success')
  store.game = responseData.game
  resetUserMessage()
}

const signUpInFailure = function () {
  $('.user-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.auth-form').trigger('reset')
  setTimeout(startMessage, 2000)
}

const failure = function () {
  $('.user-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const getGamesSuccess = function (responseData) {
  store.games = responseData.games
  $('.games-message').html(`You've played ${store.games.length} games!`).addClass('message-success')
  setTimeout(function () {
    $('.games-message').html('')
  }, 5000)
}

const onOSuccess = function (index) {
  $(index).addClass('snowboarder').removeClass('blank')
}

const onXSuccess = function (index) {
  $(index).addClass('skier').removeClass('blank')
}

module.exports = {
  resetUserMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createGameSuccess,
  signUpInFailure,
  failure,
  getGamesSuccess,
  onOSuccess,
  onXSuccess
}
