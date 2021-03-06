'use strict'

const store = require('./store.js')

const resetUserMessage = function () {
  setTimeout(function () {
    $('.user-message').html('')
  }, 2000)
}

const resetGamesMessage = function () {
  setTimeout(function () {
    $('.games-message').html('')
  }, 2000)
}

const startMessage = function () {
  $('.user-message').html('Sign Up or Sign In to Play!').removeClass('message-failure').removeClass('message-success').css({ marginRight: 0 })
}

const playMessage = function () {
  $('.user-message').html(`Click 'New Game' to Begin!`).removeClass('message-failure').addClass('message-success')
}

const signUpSuccess = function () {
  $('.user-message').html('Sign Up Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const signInSuccess = function (responseData) {
  $('footer').slideDown(250)
  $('.user-message').html('Sign In Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  $('.user-button').show()
  $('.sign-in-button').hide()
  $('.sign-up-button').hide()
  $('.sign-in-dd').removeClass('show')
  $('.sign-up-dd').removeClass('show')
  $('#total-games').show()
  $('.games-message').show().html('')
  store.user = responseData.user
  setTimeout(playMessage, 2000)
}

const changePasswordSuccess = function () {
  $('.games-message').html('Password Change Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  resetGamesMessage()
}

const changePasswordFailure = function () {
  $('.games-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.auth-form').trigger('reset')
  resetGamesMessage()
}

const signOutSuccess = function () {
  $('.user-message').html('Sign Out Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  $('footer').slideUp(250)
  $('#total-games').hide()
  $('.games-message').hide().html('')
  $('.user-button').hide()
  $('.sign-in-button').show()
  $('.sign-up-button').show()
  $('.game').addClass('blank').removeClass('skier').removeClass('snowboarder').off()
  setTimeout(startMessage, 2000)
  store.user = null
}

const createGameSuccess = function (responseData) {
  $('.user-message').html('New Game Created!').removeClass('message-failure').addClass('message-success')
  setTimeout(function () {
    $('.user-message').html('Have Fun!').removeClass('message-failure').removeClass('message-success')
  }, 2000)
  store.game = responseData.game
}

const signUpInFailure = function () {
  $('.user-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.user-message').css({ marginRight: '25%' })
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
  $('.games-message').html(`You've played ${store.games.length} games!`).removeClass('message-failure').removeClass('message-success')
  setTimeout(function () {
    $('.games-message').html('')
  }, 5000)
}

const getGamesFailure = function () {
  $('.games-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.auth-form').trigger('reset')
  resetGamesMessage()
}

const onOSuccess = function (index) {
  $(index).addClass('snowboarder').removeClass('blank')
}

const onXSuccess = function (index) {
  $(index).addClass('skier').removeClass('blank')
}

module.exports = {
  resetUserMessage,
  resetGamesMessage,
  startMessage,
  playMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  createGameSuccess,
  signUpInFailure,
  failure,
  getGamesSuccess,
  getGamesFailure,
  onOSuccess,
  onXSuccess
}
