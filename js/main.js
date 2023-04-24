$(document).ready(function () {
  // Портфолио
  $('.button[filter]').click(function () {
    if ($(this).attr('filter') == 'all') {
      if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').show(300);
      }
    } else if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');
      $('.filter > div').hide(300);
      var filter = $(this).attr('filter');
      $('.filter > div[filter=' + filter + ']').show(300);
    }
  })
  // Слайдер
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    dotaClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],
  });
  // Меню
  $('ul.menu a[href^="#"]').click(function(event)
  {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    $('ul.menu a[href^="#"]').css({"color": "#212121"});
    $(this).css({"color": "#004bee"});
    return false;
  });
  // Выпадающее меню
  $('.menu-icon').click(function() {
    $('nav').slideToggle(500);
    $('ul.menu').css({
      'display': 'flex', 'flex-direction': 'column', 'align-items': 'flex-end'
    })
    if ($('.menu-icon').html()=='<i class="fa-solid fa-bars"></i>') {
      $(this).html('<i class="fa-solid fa-xmark"></i>')
    } else {
      $(this).html('<i class="fa-solid fa-bars"></i>')
    }
  });
  // Кнопка наверх
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
  })
})