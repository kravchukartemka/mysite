/*jshint jquery:true */

$( window ).on( "load", function() {
	"use strict";

	/* global google: false */
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/*-------------------------------------------------*/
	/* =  nav animate
	/*-------------------------------------------------*/

	var ToogleMenu = $('a.open-menu');

	ToogleMenu.on('click', function(event) {
		event.preventDefault();

		var MainMenu = $('.navbar-nav'),
			$this = $(this);
		if ( !$this.hasClass('opened') ) {
			$this.addClass('opened');
			MainMenu.addClass('active');
		} else {
			$this.removeClass('opened');
			MainMenu.removeClass('active');
		}
	});

	/*-------------------------------------------------*/
	/* = revolution slider
	/*-------------------------------------------------*/

	try{

		var revapi202;
		var revslider_showDoubleJqueryError;

		if ($("#rev_slider_202_1").revolution === undefined) {
			revslider_showDoubleJqueryError("#rev_slider_202_1");
		} else {
			revapi202 = $("#rev_slider_202_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "js/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
					bullets: {
						enable: true,
						hide_onmobile: true,
						hide_under: 800,
						style: "zeus",
						hide_onleave: false,
						direction: "horizontal",
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 40,
						space: 5,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
					}
				},
				responsiveLevels: [1140, 1024, 778, 480],
				visibilityLevels: [1140, 1024, 778, 480],
				gridwidth: [1140, 1024, 778, 480],
				gridheight: [700, 700, 600, 600],
				lazyType: "none",
				parallax: {
					type: "scroll",
					origo: "slidercenter",
					speed: 1000,
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
				},
				shadow: 0,
				spinner: "off",
				stopLoop: "on",
				stopAfterLoops: 0,
				stopAtSlide: 1,
				shuffle: "off",
				autoHeight: "off",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "101px",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	try{

		var skillBar = $('.skills-section');
		skillBar.appear(function() {

			var animateElement = $(".meter > p");
			animateElement.each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});

		});
	} catch(err) {
	}
	
	/*-------------------------------------------------*/
	/* =  OWL carousell
	/*-------------------------------------------------*/
	try {
		var owlWrap = $('.owl-wrapper');

		if (owlWrap.length > 0) {

			if (jQuery().owlCarousel) {
				owlWrap.each(function(){

					var carousel= $(this).find('.owl-carousel'),
						dataNum = $(this).find('.owl-carousel').attr('data-num'),
						dataNum2,
						dataNum3;

					if ( dataNum === 1 ) {
						dataNum2 = 1;
						dataNum3 = 1;
					} else if ( dataNum === 2 ) {
						dataNum2 = 2;
						dataNum3 = dataNum - 1;
					} else {
						dataNum2 = dataNum - 1;
						dataNum3 = dataNum - 2;
					}

					carousel.owlCarousel({
						autoPlay: 10000,
						navigation : true,
						items : dataNum,
						itemsDesktop : [1199,dataNum2],
						itemsDesktopSmall : [979,dataNum3],
						itemsTablet : [768, dataNum3],
					});

				});
			}
		}

	} catch(err) {

	}
	
	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */

	try {
		var fenway = [42.345573,-71.098326]; //Change a map coordinate here!
		var markerPosition = [42.345573,-71.098326]; //Change a map marker here!
    	$('#map')
			.gmap3({
				center:fenway,
				zoom: 13,
				mapTypeId: "shadeOfGrey", // to select it directly
				scrollwheel: false,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
				}
			})
			.styledmaptype(
			"shadeOfGrey",
			[
				{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
				{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
				{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
				{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
				{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
				{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
				{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
				{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
				{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
				{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
				{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
				{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
				{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
			],
			{name: "Shades of Grey"});
			$('#map')
				.gmap3({
					center: fenway,
					zoom: 13,
					mapTypeId : google.maps.MapTypeId.ROADMAP
				})
				.marker({
					position: markerPosition,
					icon: 'images/marker.png'
			});
	} catch(err) {

	}
	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/

	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			slideshowSpeed: 3000,
			easing: "swing"
		});
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* = slider Testimonial
	/*-------------------------------------------------*/

	var slidertestimonial = $('.bxslider');
	
	try{		
		slidertestimonial.bxSlider({
			mode: 'vertical'
		});

		$('.slider-call').bxSlider({
			pagerCustom: '#bx-pager'
		});

		$('.bxslider-posts').bxSlider();

	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.statistic-post').appear(function() {
			$('.timer').countTo({
				speed: 4000,
				refreshInterval: 60,
				formatter: function (value, options) {
					return value.toFixed(options.decimals);
				}
			});
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* = 	Tabs
	/*-------------------------------------------------*/
	try {
		$('#myTabs a').on('click', function (e) {
			e.preventDefault();
			$(this).tab('show');
		});
	} catch(err) {

	}
	
	/*-------------------------------------------------*/
	/* =  comming soon & error height fix
	/*-------------------------------------------------*/

	$('.comming-soon-section').css('min-height', $(window).height() - $('.navbar-default').height());

	try {

		$('#clock').countdown("2018/01/29", function(event) {
			var $this = $(this);
			switch(event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "daysLeft":
					$this.find('span#'+event.type).html(event.value);
					break;
				case "finished":
					$this.hide();
					break;
			}
		});

	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('alert-success').removeClass('alert-danger').addClass('alert-danger').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

	/* ---------------------------------------------------------------------- */
	/*	Load more posts from container
	/* ---------------------------------------------------------------------- */

	var LoadButton = $('a.load-post-container'),
		PortContainer = ('.iso-call'),
		i = 0,
		s = 0;

	LoadButton.on( 'click', function(event) {
		event.preventDefault();

		var LoadContainer = $(this).attr('data-load'),
			xel = parseInt($(this).attr('data-number'), 10);

		var storage = document.createElement('div');
		$(storage).load("load-container/" + LoadContainer + " .project-post, .blog-post", function(){

			var elemloadedLength = $(storage).find('.project-post, .blog-post').length;
			
			if ( !((s + 1) > elemloadedLength) ) {

				s = i + xel;

				var t = i - 1;
				var $elems;

				if ( i === 0 ) {
					/// create new item elements
					$elems = $(storage).find(".project-post:lt(" + s + "), .blog-post:lt(" + s + ")").appendTo(PortContainer);
					// append elements to container
					$container.isotope( 'appended', $elems );
					recallMagnific();
					setTimeout(Resize, 200);

				} else {
					/// create new item elements
					$elems = $(storage).find(".project-post:lt(" + s + "):gt("+ t +"), .blog-post:lt(" + s + "):gt("+ t +")").appendTo(PortContainer);
					// append elements to container
					$container.isotope( 'appended', $elems );
					recallMagnific();
					
					setTimeout(Resize, 200);
				}

				i = i + xel;
			}

			if ( !( s < elemloadedLength ) ) {
				$('a.load-post-container').text("No more posts");
			}

		});
	
	});

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 70;
			document.querySelector( 'header, a.go-top' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 100 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'header' ).addClass('active');
				$( 'a.go-top' ).addClass('active');
			}
			else {
				$( 'header' ).removeClass('active');
				$( 'a.go-top' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
	})();

});

/* ---------------------------------------------------------------------- */
	/*	magnific-popup function
	/* ---------------------------------------------------------------------- */
function recallMagnific(){
	$('.zoom').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
}

function Resize() {
	$(window).trigger('resize');
}