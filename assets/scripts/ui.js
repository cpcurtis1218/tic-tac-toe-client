'use strict'

const store = require('./store.js')

const resetUserMessage = function () {
  setTimeout(function () {
    $('.user-message').html('')
  }, 4000)
}

const signUpSuccess = function () {
  $('.user-message').html('Sign Up Successful!').css('color', 'green').css('font-weight', 'bold')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const signInSuccess = function (responseData) {
  $('.user-message').html('Sign In Successful!').css('color', 'green').css('font-weight', 'bold')
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
  $('.user-message').html('Password Change Successful!').css('color', 'green').css('font-weight', 'bold').css('font-size', '1.5rem')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const signOutSuccess = function () {
  $('.user-message').html('Sign Out Successful!').css('color', 'green').css('font-weight', 'bold')
  $('.auth-form').trigger('reset')
  $('footer').hide()
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  store.user = null
  resetUserMessage()
}

const createGameSuccess = function (responseData) {
  $('.user-message').html('New Game Created!')
  store.game = responseData.game
  console.log(store.game)
  resetUserMessage()
}

const failure = function () {
  $('.user-message').html('Something went wrong').css('color', 'red').css('font-weight', 'bold')
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
  failure
}
