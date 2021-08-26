jquery(document).ready(function($){

  function scrollTosection(event){
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollTosection);
}(jquery));
