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
  store.user = null
  resetUserMessage()
}

const failure = function () {
  $('.user-message').html('Something went wrong').css('color', 'red').css('font-weight', 'bold')
  $('.auth-form').trigger('reset')
  resetUserMessage()
}

const playAgain = function () {

}

module.exports = {
  resetUserMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure,
  playAgain
}
