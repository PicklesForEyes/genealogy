$(document).ready(() => {
  $('.dropdown-toggle').dropdown("toggle");

  $('#welcome').on('click', function(event) {
    event.preventDefault();
    window.location.replace('welcome.html')
  })
})