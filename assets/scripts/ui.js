'use strict'

const store = require('./store.js')

const resetUserMessage = function () {
  setTimeout(function () {
    $('.user-message').html('')
  }, 4000)
}

const signUpSuccess = function () {
  $('.user-message').html('Sign Up Successful!').css('color', 'green').css('font-weight', 'bold')
  resetUserMessage()
}

const signInSuccess = function (responseData) {
  $('.user-message').html('Sign In Successful!').css('color', 'green').css('font-weight', 'bold')
  store.user = responseData.user
  resetUserMessage()
}

const changePasswordSuccess = function () {
  $('.user-message').html('Password Change Successful!').css('color', 'green').css('font-weight', 'bold').css('font-size', '1.5rem')
  resetUserMessage()
}

const failure = function () {
  $('.user-message').html('Something went wrong').css('color', 'red').css('font-weight', 'bold')
  resetUserMessage()
}

const playAgain = function () {

}

module.exports = {
  resetUserMessage,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  failure,
  playAgain
}
