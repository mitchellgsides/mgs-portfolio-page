

$('.fa-bars').on('click', function(event) {
  event.preventDefault();
  $('.navbar').css('display', 'none');
})

$(function() {
  $(".fa-dog").on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, 500); }); });

function projScroll() {
  $('#projects').on('click', function(event) {
    event.preventDefault();
    let position = $('#proj-anchor').offset().top;
    $('html, body').animate(
      {scrollTop: position}, 1000); }
)}

function aboutScroll() {
  $('#about').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate(
      {scrollTop: $('#about-anchor').offset().top}, 500); }
    )
  };
  
function contactScroll() {
  $('#contact').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate(
      {scrollTop: $('#contact-anchor').offset().top}, 500); }
    )
}

  $(aboutScroll);
  $(projScroll);
  $(contactScroll);