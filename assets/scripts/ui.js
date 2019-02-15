'use strict'

const resetUserMessage = function () {
  setTimeout(function () {
    $('.user-message').html('')
  }, 2000)
}

const signUpSuccess = function () {
  $('.user-message').html('Sign Up Successful!')
  resetUserMessage()
}

const failure = function () {
  $('.user-message').html('Something went wrong')
  resetUserMessage()
}

const playAgain = function () {

}

module.exports = {
  resetUserMessage,
  signUpSuccess,
  failure,
  playAgain
}
