$(document).ready(function(){

	/*Fixed Navbar Handler*/
	let diff = $(window).height()- $('.ul-nav').height();
	let headerHeight = $('header').height();
	
		// if(window.matchMedia('(max-width: 830px)').matches){
		// 	if($('.about-nav').length){
		// 		$('nav').css({
		// 			background:'#FFF'
		// 		})
		// 		$('.sub-ul-container a').css({color:'#FFF !important'})
		// 	}
		// }

	$(window).on('scroll', function(){

		if($(window).scrollTop() > headerHeight){
			$('.ul-nav').css({
				opacity:1,
				boxShadow:'0 15px 15px -15px rgba(0, 0, 0, 0.5)',
				background:'#FFF',
				color:'#000',
				position:'fixed',
				width:'100%',
			})

			$('.ul-nav a').addClass('link-color-switch')

		}else if($(window).scrollTop() > diff){
			// $('.nav').css({
			// 	position:'',
			// 	opacity:0,
			// })
		}else if($(window).scrollTop() < diff){
			// if()
			$('.ul-nav').css({
				position:'static',
				opacity:1,
				display:'flex',
				boxShadow:'none',
				background: ($('.about-nav').length ? '#FFF':"none"),
			})
			$('.ul-nav a').removeClass('link-color-switch')
		}

	})

	/* video Popup Handler  */
	$(".js-video-button").modalVideo({
		youtube:{
			controls:0,
			nocookie: true,
			autoplay:1,
			iv_load_policy:1
		}
	});

	/* Menu Button Trigger */
	const btn = document.getElementById("menu-toggle");
	const lines = btn.querySelectorAll(".line");
	const cls = { open: "open", close: "close" };
	let btnClass = cls.open;
	btn.addEventListener("click", () => {
		$('nav').fadeToggle();
		$('.navigation-menu').css({
			zIndex:999999
		});
	});
		$(window).on('resize', function(){
		if(window.matchMedia('(min-width: 950px)').matches){
			console.log('arrived')
			$('nav').fadeIn();	
		}
	})
	/* Header Typing Effect */
	if($('.typed-text').length){
		let typed = new Typed('.typed-text', {
	  		strings: ["marketing, advertising And Entrepreneurship.", "We've got it all."],
	  		typeSpeed: 70
		});			
	}
	if($('.typed-text-about').length){
		/* About Header Typing Effect */	
		let typedAbout = new Typed('.typed-text-about', {
	  		strings: ["I'm Nicholas G. Muscat."],
	  		typeSpeed: 70
		});	
	}

	/*Testimonial Effect Handler*/
	$('.content').on('click', function(){
		let currentInput = $(this).parent().parent().find('input[type="radio"]');
		currentInput.click()
		// fix cursor problem later.
		$(this).css('cursor','default')
	});
	/*Scroll Reveal Effect*/
	ScrollReveal().reveal('.component-me', {delay:200})
	ScrollReveal().reveal('.component-me.second', {delay:400})
	ScrollReveal().reveal('.item-set-1', {delay:400})
	ScrollReveal().reveal('.item-set-2', {delay:600})
	ScrollReveal().reveal('.media-1', {delay:600})
	ScrollReveal().reveal('.media-2', {delay:900})
	ScrollReveal().reveal('.our-mission', {delay:300})
	ScrollReveal().reveal('.blurp-about', {delay:300})

	/* Count up Effects*/
	if($('.countup').length){
		$(window).scroll(function() {
		   var hT = $('.countup').offset().top,
		       hH = $('.countup').outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		  	 if (wS > (hT+hH-wH)){
				$('.countup').each(function() {
				  var $this = $(this),
				      countTo = $this.attr('data-count');
				  
				  $({ countNum: $this.text()}).animate({
				    countNum: countTo
				  },

				  {

				    duration: 1000,
				    easing:'linear',
				    step: function() {
				      $this.text(Math.floor(this.countNum));
				    },
				    complete: function() {
				      $this.text(this.countNum);
				      //alert('finished');
				    }
				  		});  
					}); 
			   }
			});
		}
});
