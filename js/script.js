$(document).ready(function() {
// START

// PARALLAX ON OBJECTS

var imgParallax = document.getElementsByClassName('parallaxUp');
new simpleParallax(imgParallax, {
  overflow: true,
  scale: 1.6
});

var imgParallax = document.getElementsByClassName('parallaxDown');
new simpleParallax(imgParallax, {
  overflow: true,
  scale: 1.3,
  orientation: "down"
});


// MENU

$('#navBtn').click( function() {
  $('#navBtn, header nav').toggleClass('active');
});

$('[data-navDown]').click( function() {
  $(this).toggleClass('active');
  $(this).parent().find('ul').slideToggle();
  $('nav ul.nav-menu, nav ul.lang').toggleClass('active');
});

$(document).click(function(event) {
 if(!$(event.target).closest('[data-navDown], .subNav').length) {
  $('[data-navDown], nav ul.nav-menu, nav ul.lang').removeClass('active');
  $('[data-navDown]').parent().find('ul').slideUp();
 }
});

// LOADER on CLICK

  $(".clickLoad").click(function() {
      $(".loader").addClass("active");
      var href = $(this).attr('href');
      setTimeout(function() {window.location = href; $(".loader").removeClass("active");}, 1000);
      return false;
  });


// SCROLL
	$('.scrollTo').click( function() {
		var page = $(this).attr('href'); // Page cible
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top - $('header').outerHeight() }, speed ); // Go
		return false;
	});


// FIXED-HEADER
	if ($('header').length > 0 /*&& $(window).width() < 992*/ ) {
        if ($('header').offset().top > 150) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }

        /* Scroll Function */
        $(window).scroll(function () {
            /* Fixed Navigation */
            if ($('header').offset().top > 150) {
                $('body').addClass('fixed-header');
            } else {
                $('body').removeClass('fixed-header');
            }
        });
    }

// DATA-ANIMATE

	// isInViewport
	$.fn.isInViewport = function(){
	   var eT = $(this).offset().top,
	       eB = eT + $(this).outerHeight(),
	       vT = $(window).scrollTop()-80,
	       vB = vT + $(window).height();
	   return eB > vT && eT < vB;
	};

   	window.animateReveal = function(){
       $('[data-animate]').each(function(){
           var t = $(this);
               d = t.data('duration');
               y = t.data('delay');
           t.css({"animation-duration" : d + "s", "-webkit-animation-duration" : d + "s", "-moz-animation-duration" : d + "s", "-o-animation-duration" : d + "s", "-ms-animation-duration" : d + "s","animation-delay" : y + "s", "-webkit-animation-delay" : y + "s", "-moz-animation-delay" : y + "s", "-o-animation-delay" : y + "s", "-ms-animation-delay" : y + "s"});
           t.addClass('animated paused ' + t.data('animate'));
           if(t.isInViewport()){
               t.removeClass('paused').removeAttr('data-animate');
           }
       });
    }
    $(window).on('resize scroll load', function(){
      animateReveal();
    });

// DATA-LINK
	$("[data-link]").each(function(){
		var a = $(this).find('a'),
		h = a.attr("href"),
		tr = a.attr("target");
		t = a.attr("title");
		$(this).attr('title', t);
		$(this).on('click', function(e){
			e.preventDefault();
			if(tr == 'blank'){
				window.open(h, "_blank");
			}else{
				if(h != undefined && h != null && h != '#' && h != '' && tr != '_blank' && tr != 'blank'){
					document.location.href = h;
				}
			}
		});
	});

// SLIDER

  var swiper = new Swiper('.swiper-slide-team', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    pagination: {
      el: '.swiper-slide-team-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  var swiper = new Swiper('.swiper-slide-avis', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    preventClicksPropagation: false,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-slide-avis-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  var swiper = new Swiper('.swiper-slide-spa', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    preventClicksPropagation: false,
    loop: true,
    autoplay: {
      delay: 7000,
    },
    pagination: {
      el: '.swiper-slide-avis-pagination',
      type: 'bullets',
      clickable: true,
    }
  });

// DATA-BACKGROUND
    $('[data-background]').each(function(){
        var i = $(this).data('background');
        if(i){ $(this).css('background-image', 'url('+ i +')');}
    });

// DATA-MAIL
	   $('[data-mail]').each(function(){
        var $t = $(this),
            m = $t.data('mail'),
            d = $t.data('domain'),
            mail = m + '@' + d,
            dis = m + '<i class="at-mail"></i>' + d;
        $t.append(dis).on('click', function(){
            location.href = "mailto:" + mail;
            !1;
        });
    });

// DATA-CHAMP

  $(function(){
    if ($('p').hasClass('info-error')){
      $('.data-champ-focus').parent().addClass('active');
    }
  });

  $('.data-champ-focus').focus(function(){
    $(this).parent().addClass('active');
  });

  $('.data-champ-focus').focusout(function(){
    if ($(this).val() == "" ){
            $(this).parent().removeClass('active');
        }
  });

//ACCORDION
    $(".accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
    });


// END
});
