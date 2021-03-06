let isHoverLogo = false;

/* fade in page, again from https://christopheraue.net/design/fading-pages-on-load-and-unload*/
function fadeInPage() {
  if (!window.AnimationEvent) {return;}

  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}
fadeInPage();

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) {return;}

  var anchors = document.getElementsByTagName('a');

  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname || anchors[idx].pathname === window.location.pathname) {
      continue;
    }

    anchors[idx].addEventListener('click', function(event) {
      var fader = document.getElementById('fader'), anchor = event.currentTarget;

      var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);

      event.preventDefault();

      fader.classList.add('fade-in');
    });
  }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

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

var navbar = document.getElementById("navbar");

/* set margin of sections */
var root = document.querySelector(":root");
function resizesections() {
  let navheight = window.getComputedStyle(navbar).getPropertyValue("height");
  root.style.setProperty("--navheight", navheight);
}
resizesections();
new ResizeObserver(resizesections).observe(navbar);

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
      nav.find('a.headlink').removeClass('active');
      nav.find('img').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a.headlink[href="#'+$(this).attr('id')+'"]').addClass('active');
      nav.find('img.headlogo-'+$(this).attr('id')).addClass('active');
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

/* footlink scroll */
$(document).ready(function() {
  $("#footlink").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 500);

    return false;
  })
})