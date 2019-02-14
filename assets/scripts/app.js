'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const events = require('./events.js')

$(() => {
  let currentTurn = 1
  // each time a div is clicked, change bg color to red
  $('#index-0').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-1').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-2').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-3').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-4').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-5').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-6').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-7').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  $('#index-8').on('click', function () {
    if (currentTurn % 2 === 0) {
      $(this).css('background-color', 'red')
    } else {
      $(this).css('background-color', 'blue')
    }
    currentTurn++
    $(this).off()
  })
  // need to track each valid click.
})
