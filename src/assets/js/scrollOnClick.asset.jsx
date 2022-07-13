//* * scroll script by Empty Soul
import $ from 'jquery'


$(document).ready(function () {
  $('.button-scroll').on('click', function (event) {
    // console.log('clicked');
    if (this.hash !== '') {
      event.preventDefault()

      var hash = this.hash

      $(
        'html, body'
      ).animate({ scrollTop: $(hash).offset().top }, 800, function () {
        window.location.hash = hash
      })
    }
  })
})
