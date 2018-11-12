
(function () {
    $(window).on('load', function () {
      setTimeout(function () {
        $('.preloader').addClass('hide');
      }, 1000);
    });


  $( ".collapse .title" ).click(function() {
    var target = $(this).attr('rel');

    if(!$(this).hasClass('collapsed')){
      $(this).addClass('collapsed');
      $('#' + target).addClass('down');
    } else {
      $('#' + target).removeClass('down');
      $('.collapse .title').removeClass('collapsed');
    }
  });

  $('.k-slider').slick({
    dots: true,
  });
})();
