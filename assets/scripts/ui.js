'use strict'

const store = require('./store.js')

const resetUserMessage = function () {
  setTimeout(function () {
    $('.user-message').html('')
  }, 2000)
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
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  store.user = responseData.user
  resetUserMessage()
}

const changePasswordSuccess = function () {
  $('.user-message').html('Password Change Successful!').removeClass('message-failure').addClass('message-success')
  resetUserMessage()
}

const signOutSuccess = function () {
  $('.user-message').html('Sign Out Successful!').removeClass('message-failure').addClass('message-success')
  $('.auth-form').trigger('reset')
  $('footer').hide()
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('.game').addClass('blank').removeClass('skier').removeClass('snowboarder').off()
  store.user = null
  resetUserMessage()
}

const createGameSuccess = function (responseData) {
  $('.user-message').html('New Game Created!').removeClass('message-failure').addClass('message-success')
  store.game = responseData.game
  console.log(store.game)
  resetUserMessage()
}

const signUpInFailure = function () {
  $('.user-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.auth-form').trigger('reset')
  setTimeout(function () {
    $('.user-message').html('Sign Up or Sign In to Play!')
  }, 2000)
}

const failure = function () {
  $('.user-message').html('Something went wrong').removeClass('message-success').addClass('message-failure')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

module.exports = {
  resetUserMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createGameSuccess,
  signUpInFailure,
  failure
}
