/* for dynamic changing in header; source: https://codepen.io/rishabhp/pen/aNXVbQ */
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).resize(function() {
  sections = $('section');
  nav = $('nav');
  nav_height = nav.outerHeight();
});

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('svg.headlogo').removeClass('logo-active');
      sections.removeClass('logo-active');
      
      $(this).addClass('logo-active');
    //   nav.find('a.headlink[href="#'+$(this).attr('id')+'"]').addClass('logo-active');
      nav.find('svg.logo-'+$(this).attr('id')).addClass('logo-active');
    }
  });
});

nav.find('a.headlink').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
  
  return false;
});

nav.find('a.logolink').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 500);
    
    return false;
  });
