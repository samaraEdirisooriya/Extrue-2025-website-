/*
	Author: themexriver
	Version: 1.0
*/
(function ($) {
	"use strict";
	
	
	const lenis = new Lenis({
		duration: 1,	
	})
	
	// smoooth scroll activation start
	function raf(time) {
	  lenis.raf(time)
	  requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)
	
	
	// preloader
	document.addEventListener("DOMContentLoaded", function () {
	
		let preloader = document.querySelector("#preloader");
	
		window.addEventListener('load', function(){
	
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					  preloader.remove();
		  
				  }, 1000 ) ;
			}
	
			// text-animation
			Splitting();
	
			// hero-1-animation
			const h1tl = gsap.timeline();
	
			h1tl.fromTo(".ftc-hero-1-content" , {  opacity: 0, duration: 1 }, { opacity: 1, })
				.from(".ftc-hero-1-content .btn-wrap " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 })
				.from(".ftc-hero-1-content .inner-div " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",
				duration:1.5, ease: "bounce.out", opacity:0 }, "<.3")
				.from(".ftc-hero-1-content .title  " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",duration:1.5, ease: "bounce.out", opacity:0 }, "<.3")
				.from(".ftc-hero-1-content .subtitle  " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",duration:1.5, ease: "bounce.out", opacity:0 }, "<.3");
	
			// hero-2-animation
			const h2tl = gsap.timeline();
	
			h2tl.from(".ftc-hero-2-item-wrap .item-3-ani " , { scale: 0,	duration:2, ease: "ease", opacity:0 })
			h2tl.from(".ftc-hero-2-item-wrap .item-2-ani " , { xPercent: -100,	duration:1, ease: "bounce.out", opacity:0 }, "<1" )
			h2tl.from(".ftc-hero-2-item-wrap .item-1-ani " , { xPercent: -100,	duration:1, ease: "bounce.out", opacity:0 }, "<.5")
			h2tl.from(".ftc-hero-2-item-wrap .item-4-ani " , { xPercent: 100,	duration:1, ease: "bounce.out", opacity:0 }, "1" )
			h2tl.from(".ftc-hero-2-item-wrap .item-5-ani " , { xPercent: 100,	duration:1, ease: "bounce.out", opacity:0 }, "1.5" )
			h2tl.from(".ftc-hero-2-content .title " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<")
			h2tl.from(".ftc-hero-2-content .subtitle " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<.1")
				
	
			// hero-3-animation
			const h3tl = gsap.timeline();
	
			h3tl.from(".ftc-hero-3-bg-svg-1 svg path" , { xPercent: -50, transformOrigin: "left", stagger: -.05,	duration:2.5, ease: "ease", })
			.from(".ftc-hero-3-bg-svg-2 svg path" , { xPercent: 50, transformOrigin: "left", stagger: -.05,	duration:2.5, ease: "ease", }, "<=")
			.from(".ftc-hero-3-disc " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<=1" )
			.from(".ftc-hero-3-title " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 }, "<=.5")
	
			// hero-3-animation
			const h4tl = gsap.timeline();
	
			h4tl.from(".section-bg-1-cube-1" , { xPercent: -430, yPercent: -220 , rotate: 360,	duration:2.5, ease: "ease", })
				.from(".section-bg-1-cube-2" , { xPercent: 430, yPercent: -220 , rotate: 360,	duration:2.5, ease: "ease", }, "<")
				.from(".section-bg-1-cube-3" , { xPercent: -430, yPercent: 220 , rotate: 360,	duration:2.5, ease: "ease", }, "<")
				.from(".section-bg-1-cube-4" , { xPercent: 430, yPercent: 220 , rotate: 360,	duration:2.5, ease: "ease", }, "<")
				.from(".ftc-hero-4-content .title .split-line " , { opacity: 0, transformOrigin: "50% 100%", transform: "rotateX(90deg)", stagger: .5, ease: "elastic.out(1,0.3)", duration: 2.5,  }, )
				.from(".ftc-hero-4-content .btn-wrap " , { opacity: 0, yPercent: 50, ease: "elastic.out(1,0.3)", duration: 2.5,  }, "<=1" )
			
			// hero 5 start 
			gsap.timeline().from(".feh-hero-3-img" , { opacity: 0, y: 400, duration: 2, delay: 1 });
	
		})
	
	});
	
	
	
	function glystickyHeader() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;
	
		$window.scroll(function () {
		  var windowTop = $window.scrollTop();
	
		  if (windowTop >= headerHeight) {
			$header.addClass('txa_sticky');
		  } else {
			$header.removeClass('txa_sticky');
			$header.removeClass('txa_sticky_show');
		  }
	
		  if ($header.hasClass('txa_sticky')) {
			if (windowTop < lastScrollTop) {
			  $header.addClass('txa_sticky_show');
			} else {
			  $header.removeClass('txa_sticky_show');
			}
		  }
	
		  lastScrollTop = windowTop;
		});
	}
	
	glystickyHeader();
	  
	
	
	// mobile-menu-start
	if($('.mobile-main-navigation li.dropdown ul').length){
		$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></div>');
		$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
	
	$(".dropdown-btn").on("click", function () {
		$(this).toggleClass("toggle-open");
	});
	
	
	// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_1_popup_active').addClass('active');
	});
	$('.overlay, .search_1_popup_close').on('click', function() {
		$('.search_1_popup_active').removeClass('active');
		$('.overlay').removeClass('active');
	})
	
	
	
	// mobile-menu-toggle-start
	gsap.registerPlugin(ScrollTrigger);
	
	gsap.config({
		nullTargetWarn: false,
	});
	
	var menuToggle = document.getElementById("menuToggle")
	var menuToggle2 = document.getElementById("menuToggle2")
	
	if (menuToggle2) {
	
		var menuBar = gsap.timeline();
		menuBar.reverse();
		var menubgline = gsap.timeline({ paused: true });
		
		menubgline.to('.mobile-menu' , {
			duration: 0,
			display: "block",
			ease: 'Expo.easeInOut'
		});
		menubgline.from('.mobile-menu-bg span' , {
			duration: .5,
			width: 100,
			stagger: 0.1,
			ease: 'Expo.easeInOut'
		});
		menubgline.from('.mobile-menu-logo' , {
			xPercent: -50,
			opacity: 0,
			ease: 'Expo.easeInOut',
			duration: 1,
		});
		menubgline.from('.mobile-menu-close' , {
			duration: 1,
			xPercent: 50,
			rotate: 360,
			ease: 'Expo.easeInOut',
			opacity: 0,
	
		}, "<");
		
		menubgline.from('.mobile-main-navigation  ul li' , {
			duration: .5,
			opacity: 0,
			y: 50,
			stagger: .01,
		},"<");
	
		menubgline.from('.mobile-menu-search-bar' , {
			opacity: 0,
			y: 50,
		}, "<.5");
	
		menubgline.from('.mobile-menu-socail-link' , {
			opacity: 0,
			x: 50,
		});
	
		
		menubgline.reverse();
	
		menuToggle.addEventListener('click', function(){
			menubgline.reversed(!menubgline.reversed());
		});
		menuToggle2.addEventListener('click', function(){
			menubgline.reversed(!menubgline.reversed());
		});
		
	}
	
	
	// active class add
	
	if ($('.feh-need-3-area').length) {
		gsap.to(".feh-need-3-area", {
			scrollTrigger: {
			  trigger: ".feh-need-3-area",
			  start: "top 70%",
			  end: "bottom bottom",
			  toggleClass: "active",
			  once: true,
			},
		});
	}
	
	
	
	
	gsap.to(".feh-exper-3-area", {
		scrollTrigger: {
		  trigger: ".feh-exper-3-area",
		  start: "top 70%",
		  end: "bottom bottom",
		  toggleClass: "active",
		  once: true,
		},
	});
	
	
	// image-paralax-animation-start
	gsap.utils.toArray(".image-pllx").forEach(function(container) {
		let image = container.querySelector("img");
	  
		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  }); 
		  tl.from(image, {
			yPercent: -30,
			scale: 1.1,
			ease: "none",
		  }).to(image, {
			yPercent: 30,
			scale: 1.1,
			ease: "none",
		  }); 
	});
	
	// image-paralax-animation-start
	gsap.utils.toArray(".ftc-cta-3-pllx").forEach(function(container) {
		let image = container.querySelector("img");
	  
		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  }); 
		  tl.from(image, {
			yPercent: -30,
			ease: "none",
		  }).to(image, {
			yPercent: 30,
			ease: "none",
		  }); 
	});
	
	const boxes = gsap.utils.toArray('.ftcfadeup');
	
	boxes.forEach((box, i) => {
	  const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
	  ScrollTrigger.create({
		trigger: box,
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
	  });
	});
	
	const boxes2 = gsap.utils.toArray('.ftcfadeup2');
	
	boxes.forEach((box, i) => {
	  const anim = gsap.fromTo(box, { y: 200}, {duration: 1, y: 0});
	  ScrollTrigger.create({
		trigger: box,
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
	  });
	});
	
	
	// ftc-fade-left
	gsap.utils.toArray('.ftc-fade-left').forEach((el, index) => { 
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 70%",
			end: "top 10%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})
		
		tl1
		.from(el, { opacity: 1 , xPercent: -100 }, {opacity: 1, duration: 1, immediateRender: false})
	})
	
	
	// ftc-fade-right
	gsap.utils.toArray('.ftc-fade-right').forEach((el, index) => { 
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 70%",
			end: "top 10%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})
		
		tl1
		.from(el, { opacity: 1 , xPercent: 100 }, {opacity: 1, duration: 1, immediateRender: false})
	})
	
	// ftc-fade-down
	gsap.utils.toArray('.ftc-fade-down').forEach((container, index) => { 
		let images = gsap.utils.toArray(container.querySelectorAll('img'));
	
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: 2,
				start: "top 70%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		});
	
		tl1.from(images, { opacity: 0, yPercent: -100,  filter: "blur(30px)", stagger: 0.2, duration: 1 });
	});
	
	// ftc-fade-up
	gsap.utils.toArray('.ftc-fade-up').forEach((container, index) => { 
		let images = gsap.utils.toArray(container.querySelectorAll('img'));
	
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: 2,
				start: "top 70%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		});
	
		tl1.from(images, { opacity: 0, yPercent: 100,  filter: "blur(30px)", stagger: 0.2, duration: 1 });
	});
	
	
	// ftc-line-left
	gsap.utils.toArray('.ftc-line-left').forEach((el, index) => { 
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 40%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})
		
		tl1
		.from(el, { scaleX: 0, transformOrigin: "left", duration: 2, })
	})
	
	// ftc-line-right
	gsap.utils.toArray('.ftc-line-right').forEach((el, index) => { 
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 40%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})
		
		tl1
		.from(el, { scaleX: 0, transformOrigin: "right", duration: 2, })
	})
	
	
	
	// ftc-clip-left
	gsap.utils.toArray('.ftc-clip-left').forEach((el, index) => { 
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 90%",
			end: "top 60%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})
		
		tl1
		.fromTo(el, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", transformOrigin: "left", duration: 2, }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" } )
	})
	
	
	// ftc-scale-3
	gsap.utils.toArray('.ftc-scale-3').forEach((el, index) => { 
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 0%",
			end: "bottom 0%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})
		
		tl1
		.from(el, { scale: 3 }, {opacity: 1, duration: 1, immediateRender: false})
	})
	
	
	// subtitle-animation
	gsap.utils.toArray('.ftc-subtitle-1').forEach((subtitle) => {
		gsap.utils.toArray('.line', subtitle).forEach((el, index) => {
			let tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: subtitle,
					scrub: 2,
					start: "top 80%",
					end: "top 50%",
					toggleActions: "play none none reverse",
					markers: false
				}
			});
	
			// Apply the animation to the ".line" element
			tl1.from(el, {
				background: "#c4ef17",
				scaleX: 0,
				transformOrigin: "left",
				duration: 1,
				immediateRender: true
			});
		});
	});
	
	// subtitle-2-animation
	gsap.utils.toArray('.ftc-subtitle-2').forEach((subtitle) => {
		gsap.utils.toArray('.line', subtitle).forEach((el, index) => {
			let tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: subtitle,
					scrub: 2,
					start: "top 80%",
					end: "top 50%",
					toggleActions: "play none none reverse",
					markers: false
				}
			});
	
			// Apply the animation to the ".line" element
			tl1.from(el, {
				scaleX: 0,
				duration: 1,
				immediateRender: true
			});
		});
	});
	
	// class-add
	const txaaddclass = gsap.utils.toArray('.ftc-add-class');
	txaaddclass.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				scrub: 1,
				start: "top 95%",
				toggleClass: "active",
				toggleActions: "play reverse play reverse",
				markers: false
			}
		});
	});
	
	// ftc-about-1
	var ftcabout1 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcabout1,
		  trigger: '.ftc-about-1-area',
		  start: "top 80%",
		  end: "top 50%",
		  scrub: 2,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcabout1.from(".ftc-about-1-bg-shape-1" , { opacity: 1 ,  duration:1 })
			 .from(".ftc-about-1-img" , { xPercent: -50, yPercent: -50 ,  duration:2 })
			 .from(".ftc-about-1-bg-shape-2" , { opacity: 1 ,  duration:1 });
	
	
	
	// ftc-about-1
	var ftcscl3 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcscl3,
		  trigger: '.ftcscl3',
		  start: "top 80%",
		  end: "top 50%",
		  scrub: 2,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcscl3.from(".ftcscl3" , { scale: 3, rotate: 360 ,  duration:1 })
	
	// ftc-campaign-1
	var ftccampaign1 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftccampaign1,
		  trigger: '.ftc-campaign-1-row',
		  start: "top 90%",
		  end: "top 50%",
		  scrub: 2,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftccampaign1.from(".ftc-campaign-1-img" , { scale: 0,  duration:1 })
				.from(".ftc-campaign-1-card" , { opacity: 0, transform: "rotateY(-90deg)", stagger: .2,  duration:1 })
	
	
	
	// ftc-campaign-2
	var ftccampaign2 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftccampaign2,
		  trigger: '.ftc-campaign-2-area',
		  start: "top 70%",
		  end: "bottom 0%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftccampaign2.fromTo(".ftc-campaign-2-img-laptop-screen img" , { objectPosition: "100% 0%",  duration:1 }, { objectPosition: "100% 100%" , duration:1 })
	
	
	// ftc-hero-3
	var ftchero3 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftchero3,
		  trigger: '.ftc-hero-3-area',
		  start: "top 0%",
		  end: "bottom -100%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftchero3.to(".ftc-hero-3-bg-svg-1 svg path" , { xPercent: -50, transformOrigin: "left", stagger: -.05,	duration:1, ease: "ease", })
	.to(".ftc-hero-3-bg-svg-2 svg path" , { xPercent: 50, transformOrigin: "left", stagger: -.05,	duration:1, ease: "ease", }, "<=")
	.from(".ftc-hero-3-bg-earth" , { yPercent: 20, width: "150%", rotate: 200, duration:1, ease: "ease", }, "<=")
	// .from( ".ftc-hero-3-bg-earth img" , {    duration:1 }, "<=")
	
	
	
	// ftc-services-3
	var ftcservices3 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcservices3,
		  trigger: '.ftc-services-3-card-wrap',
		  start: "top 90%",
		  end: "top 30%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcservices3.fromTo(".ftc-services-3-card" , { y: 200 , }, { y: 0 , stagger: 1 })
	
	
	
	// ftc-team-3
	var ftcteam3 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcteam3,
		  trigger: '.ftc-team-3-membar-wrap',
		  start: "top 90%",
		  end: "top 30%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcteam3.fromTo(".ftc-team-3-membar" , { xPercent: -100 , }, { xPercent: 0 , duration:2.5, ease: "ease"  , stagger: 1 })
	
	
	
	// ftc-brand-3
	var ftcbrand3 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcbrand3,
		  trigger: '.ftc-brand-3-logo-wrap',
		  start: "top 100%",
		  end: "top -100%",
		  scrub: 7,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcbrand3.fromTo(".ftc-brand-3-logo-1" , {     transform: "translateY(0%)" }, { transform: "translateY(-50%)", duration:1, ease: "ease", })
	.fromTo(".ftc-brand-3-logo-2" , {     transform: "translateY(-50%)" }, { transform: "translateY(0%)", duration:1, ease: "ease", }, "<")
	.fromTo(".ftc-brand-3-logo-3" , {     transform: "translateY(0%)" }, { transform: "translateY(-50%)", duration:1, ease: "ease", }, "<")
	
	// ftc-choose-us-3
	var ftcchoose3 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcchoose3,
		  trigger: '.ftc-choose-us-3-feature-wrap',
		  start: "top 90%",
		  end: "top 50%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcchoose3.from(".ftc-choose-us-3-feature" , {   transform: "rotateY(90deg)" , stagger: 0.5, duration: 1  })
	
	
	// ftc-testimonial-us-3
	var ftctesti4 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftctesti4,
		  trigger: '.ftc-testimonial-4-area',
		  start: "top 80%",
		  end: "top 30%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftctesti4.from(".ftc-testimonial-4-area" , {   padding: "0px" , duration: 1  })
	ftctesti4.from(".ftc-testimonial-4-img" , {   scale: 0 , stagger: 1, }, "<")
	
	
	
	// // hero-4-trigger
	var ftch4st001 = gsap.timeline({
		scrollTrigger: {
			trigger: ".section-bg-1",
			pin: ".section-bg-1-cube-grid",
			pinSpacing: true,
			markers: false,
			toggleActions: "play none none reverse",
		}
	});
	
	
	var ftch4st00 = gsap.timeline({
		scrollTrigger: {
		  trigger: ".ftc-hero-4-content",
		  start: "top -40%",
		  end: "top -100%",
		  toggleActions: "play none none reverse",
		  markers: false
		}
	});
	  
	  // Define the animations within the timeline
	  ftch4st00
		.to(".section-bg-1-cube-1", { xPercent: -430, yPercent: -220, opacity: 0, rotate: 360, duration: 2.5, ease: "ease" })
		.to(".section-bg-1-cube-2", { xPercent: 430, yPercent: -220, opacity: 0, rotate: 360, duration: 2.5, ease: "ease" }, "<")
		.to(".section-bg-1-cube-3", { xPercent: -430, yPercent: 220, opacity: 0, rotate: 360, duration: 2.5, ease: "ease" }, "<")
		.to(".section-bg-1-cube-4", { xPercent: 430, yPercent: 220, opacity: 0, rotate: 360, duration: 2.5, ease: "ease" }, "<")
	  
	
	
	// ftc-about-4
	var ftctesti4 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftctesti4,
		  trigger: '.ftc-about-4-img',
		  start: "top 80%",
		  end: "top 30%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftctesti4.from(".ftc-about-4-img" , {   marginLeft: "-300px" , marginRight: "-300px" , duration: 1  })
	
	
	// ftc-services-4
	var ftsrv4 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftsrv4,
		  trigger: '.ftc-services-4-card-grid',
		  start: "top 80%",
		  end: "top 30%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftsrv4
	.from(".ftc-services-4-card-grid .cleft-side" , {   xPercent: -100 , stagger: .3, duration: 2  })
	.from(".ftc-services-4-card-grid .cright-side" , {   xPercent: 100 , stagger: .3, duration: 2  }, "<=")
	
	
	// ftc-archieve-4
	var ftcar4 = gsap.timeline({
	
		scrollTrigger: {
		  animation: ftcar4,
		  trigger: '.ftc-achieve-4-area',
		  start: "top 80%",
		  end: "top 50%",
		  scrub: 1,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});
		
	ftcar4
	.from(".ftc-achieve-4-row" , {   scaleX: .5 , duration: 2  })
	.from(".ftc-achieve-4-shape-1" , {   xPercent: -100 , duration: 2  })
	.from(".ftc-achieve-4-shape-2" , {   xPercent: 100 , duration: 2  }, "<=")
	
	
	
	
	// title-animation
	$(window).on('load',function(){
		var st = $(".ftc-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
		  el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		  });
		
		  if( $(el).hasClass('ftc-split-threed') ){
			gsap.set(el.split.chars, {
			  opacity: 1,
				  transformOrigin: "50% 100%",
				  transform: "rotateX(90deg)",
				ease: "elastic.out(1,0.3)",
				color:'#a249ed',
				duration: 2.5, 
			});
		  }
		  
	
		  el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
			  trigger: el,
			  start: "top 90%",
			},
			ease: "elastic.out(1,0.3)",
			transform: "rotateX(0deg)",
			color: 'inherit',
			opacity: 1,
			duration: 2.5, 
			stagger: 0.02,
		  });
		  
		});
	})
	
	
	
	
	// ftc-testimonial-3-active
	if($('.ftc-testimonial-3-active').length) {
		let slider = new Swiper('.ftc-testimonial-3-active', {
			loop: true,
			spaceBetween: 30,
			slidesPerView: 3,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
	
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
	
			navigation: {
				nextEl: ".ftc_testimonial_3_next",
				prevEl: ".ftc_testimonial_3_prev",
			},
	
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
	
	
	
			},
		});
	}
	
	

		// blog list slider start 
		let feh_blog1 = new Swiper('.feh_bloglist_slide_active', {
			loop: true,
			spaceBetween: 0,
			speed: 500,
			slidesPerView: 1,
			navigation: {
				nextEl: ".feh_blog_1_next",
				prevEl: ".feh_blog_1_prev",
			},
		});

		// blog-details-slider 
		let feh_blog_details = new Swiper('.blog-details-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: ".blog-details-next",
				prevEl: ".blog-details-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
			},
		});
	
	
	  
	// ftc-prject-4-active
	
	
	
	  
	
	
	
	
	// cta-3-toggle-class
	$('.feh-cta-3-btn').on("click", function() {
		$('.feh-cta-3-area').toggleClass("active");
	});
	
	$('.feh-cta-3-btn-close').on("click", function() {
		$('.feh-cta-3-area').toggleClass("active");
	});


	// feh image parallax start 
	document.addEventListener("mousemove", parallax);
		function parallax(e) {
			document.querySelectorAll(".feh-img-plx").forEach(function (move) {
			var moving_value = move.getAttribute("data-value");
			var x = (e.clientX * moving_value) / 250;
			var y = (e.clientY * moving_value) / 250;

			move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
			});
	}


		// For each images with class "animate-image" on page
		gsap.utils.toArray('.feh-zoomout-img').forEach((el, index) => { 
			let tl6 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 85%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
			})
			
			tl6
			.set(el, {transformOrigin: 'center center'})
			.fromTo(el, { scale: 1.3}, { scale: 1, duration: 1, immediateRender: false})
		})
	
	// team-2-hover-active
	$(".ftc-t1-active-toggle").on("mouseover", function(){
		var current_class = document.getElementsByClassName("ftc-t1-active-toggle active");
		current_class[0].className = current_class[0].className.replace(" active", "");
		this.className += " active";
	});
	
	$(".ftc-t1-active-toggle-2").on("mouseover", function(){
		var current_class = document.getElementsByClassName("ftc-t1-active-toggle-2 active");
		current_class[0].className = current_class[0].className.replace(" active", "");
		this.className += " active";
	});
	
	// price-2
	$(".ftc-price-2-item").on("mouseover", function(){
		var current_class = document.getElementsByClassName("ftc-price-2-item active");
		current_class[0].className = current_class[0].className.replace(" active", "");
		this.className += " active";
	});
	
	// services-3
	$(".ftc-services-3-card").on("mouseover", function(){
		var current_class = document.getElementsByClassName("ftc-services-3-card active");
		current_class[0].className = current_class[0].className.replace(" active", "");
		this.className += " active";
	});
	
	
	// bootstrap-toltip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	
	// cursor follow
	$(document).ready(function () {
		var mWrap = $(".blta-categories-1-tabs-content ");
	  
		mWrap.hover(function () {
		  var mContent = $(this).find("#magnetic-content");
		  var mArea = $(this).find("#magnetic-area");
	  
		  function parallaxIt(e, target, movement = 1) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			var boundingRect = mArea[0].getBoundingClientRect();
			var relX = e.pageX - boundingRect.left;
			var relY = e.pageY - boundingRect.top;
	  
			gsap.to(mContent, {
			  x: (relX - boundingRect.width / 2) * movement,
			  y: (relY - boundingRect.height / 2 - scrollTop) * movement,
			  ease: "power1",
			  duration: 1
			});
		  }
	  
		  function callParallax(e) {
			parallaxIt(e, mWrap);
		  }
	  
		  mArea.mousemove(function (e) {
			callParallax(e);
		  });
		  mArea.mouseleave(function (e) {
			gsap.to(mContent, {
			  scale: 1,
			  x: 0,
			  y: 0,
			  ease: "power1",
			  duration: 1.5
			});
		  });
		});
	  });
	
	
	
	/* faq-active-class */
	$(document).on('click', '.gly-accordion-item', function(){
		$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
	})
	
	
	/* back-to-top */
	var backtotop = $('.scroll-top');
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
		backtotop.addClass('show');
		} else {
		backtotop.removeClass('show');
		}
	});
	
	backtotop.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '700');
	});
	
	
	/* counter */
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});
	
	/* data-bg-activition */
	$("[data-background]").each(function(){
		$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
	})
	
	
	// wow-activation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	
	
	/*
	popup-video-activition
	====start====
	*/
	
	if($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	}
	
	
	/*
	popup-img-activition
	====start====
	*/
	
	if($('.popup_img').length) {
		$('.popup_img').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});
	}
	
	/*
	popup-img-activition
	====start====
	*/
	if($('.nice-select').length) {
		$('.nice-select select').niceSelect();
	}
	
	
	console.warn = function() {};

	
})(jQuery);