
const skillbar = () => {

  const countbars = $('.about__skills--countbar');
  var counting = true;

  $(window).scroll(function(){
    var windowScrollPositionTop = $(window).scrollTop();
    var objectOffsetTop = $('#about').offset().top;
    if (windowScrollPositionTop >= objectOffsetTop/1.5) {
      if (counting) {
        $(countbars).each(function() {
          $(this).animate({
            width: $(this).attr('data-percent')
          },3000);
        });
        counting = false;
      }

    }
  });

};
