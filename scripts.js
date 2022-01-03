let isHoverLogo = false;

/* fix hovering over logo in header when it changes / over border */
var hlogo = document.getElementById("hlogo");
var logo1 = document.getElementById("logo1");
var logo2 = document.getElementById("logo2");
var logo3 = document.getElementById("logo3");
var logo4 = document.getElementById("logo4");
var logo5 = document.getElementById("logo5");
hlogo.addEventListener("mouseover", function () {
  isHoverLogo = true;
  logo1.src = 'main logo dark.svg';
  logo2.src = 'main logo red dark.svg';
  logo3.src = 'main logo yellow dark.svg';
  logo4.src = 'main logo green dark.svg';
  logo5.src = 'main logo blue dark.svg';
}, false);
hlogo.addEventListener("mouseleave", function () {
  isHoverLogo = false;
  logo1.src = 'main logo.svg';
  logo2.src = 'main logo red.svg';
  logo3.src = 'main logo yellow.svg';
  logo4.src = 'main logo green.svg';
  logo5.src = 'main logo blue.svg';
}, false);

/* make logo box always same size as other boxes in header and adjust margin depending on navbar size*/
var heightcheck = document.getElementById("heightcheck");
function resizeheaderlogo() {
  hlogo.style.height = window.getComputedStyle(heightcheck).getPropertyValue("height");
}
resizeheaderlogo();
new ResizeObserver(resizeheaderlogo).observe(heightcheck);

var main = document.getElementById("main");
var navbar = document.getElementById("navbar");
function resizetopmargin() {
  main.style.marginTop = window.getComputedStyle(navbar).getPropertyValue("height");
}
resizetopmargin();
new ResizeObserver(resizetopmargin).observe(navbar);

/* set margin of sections */
var root = document.querySelector(":root");
function resizesections() {
  let navheight = window.getComputedStyle(navbar).getPropertyValue("height");
  root.style.setProperty("--navheight", navheight);
}
resizesections();
new ResizeObserver(resizesections).observe(navbar);

/* for dynamic changing in header; source: https://codepen.io/rishabhp/pen/aNXVbQ */

/*
var sections = $('span.anchor')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).resize(function() {
  sections = $('span.anchor');
  nav = $('nav');
  nav_height = nav.outerHeight();
});

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a.headlink').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a.headlink[href="#'+$(this).attr('id')+'"]').addClass('active');
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
}); */

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
      nav.find('a.headlink').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a.headlink[href="#'+$(this).attr('id')+'"]').addClass('active');
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