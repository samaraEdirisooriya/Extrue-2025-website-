(function ($) {
    "use strict";
    /**
     * Project Two
     * @param {Project Style} $scope 
     * @param {*} $ 
     */
    function projectActive($scope, $) {
        if($('.ftc-project-4-active').length) {
            let slider = new Swiper('.ftc-project-4-active', {
                loop: true,
                spaceBetween: 0,
                slidesPerView: 3,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
        
                pagination: {
                    el: ".ftc-project-4-slider-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },
        
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
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
    }

    /**
     * Active Testimonial Js
     * @param {Testimonial} $scope 
     * @param {*} $ 
     */
    function testimonialActiveOne($scope, $) {
        if($('.ftc-testimonial-4-active').length) {
            let slider = new Swiper('.ftc-testimonial-4-active', {
                loop: true,
                spaceBetween: 0,
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
        
                navigation: {
                    nextEl: ".ftc_testimonial_4_next",
                    prevEl: ".ftc_testimonial_4_prev",
                },
        
            });
        }
    }


    function projectCarouselActive($scope, $) {
	if($('.ftc-project-1-active').length) {
		let slider = new Swiper('.ftc-project-1-active', {
			loop: true,
			spaceBetween: 30,
			slidesPerView: 3,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
	
			navigation: {
				nextEl: ".ftc_project_1_next",
				prevEl: ".ftc_project_1_prev",
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
	}}

    function serviceCarouselActive($scope, $) {
        if($('.ftc-hero-1-active').length) {
            let ftchero1 = new Swiper('.ftc-hero-1-active', {
                loop: true,
                spaceBetween: 20,
                slidesPerView: 5,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
            
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1400: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                    1800: {
                        slidesPerView: 5,
                    },
                },
            });
        }
    }

    
	function brandCarouselActive($scope, $) {
	if($('.ftc-choose-us-1-client-active').length) {
		let ftchero1 = new Swiper('.ftc-choose-us-1-client-active', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 6,
			speed: 3000,
			autoplay: {
				delay: 4000,
			},
		
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
	
			},
		});
	}
    if($('.ftc-brand-1-active').length) {
		let slider = new Swiper('.ftc-brand-1-active', {
			loop: true,
			spaceBetween: 30,
			slidesPerView: 6,
			speed: 1000,
			autoplay: {
				delay: 5000,
			},
	
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
				1400: {
					slidesPerView: 6,
				},
	
	
			},
		});
	}
    }

    function testimonialActive($scope, $) {
        if($('.ftc-testimonial-1-active').length) {
            let slider = new Swiper('.ftc-testimonial-1-active', {
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
        
                navigation: {
                    nextEl: ".ftc_testimonial_1_next",
                    prevEl: ".ftc_testimonial_1_prev",
                },
            
            });
        }
    }


    function testimonialActiveThree($scope, $) {
        let tstimonial__slider1 = new Swiper('.feh_testimonial_3_active', {
            loop: true,
            spaceBetween: 0,
            speed: 500,
            rtl: false,
            slidesPerView: 1,
            effect: 'fade',
            autoplay: {
                delay: 5000,
                },
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: ".feh-testimonial-3-pagination",
                clickable: true
            },
        
        });
    }

    function testimonialActiveTwo($scope, $) {
        if($('.ftc-testimonial-2-active').length) {
            let slider = new Swiper('.ftc-testimonial-2-active', {
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                },
        
                navigation: {
                    nextEl: ".ftc_testimonial_2_next",
                    prevEl: ".ftc_testimonial_2_prev",
                },
            
            });
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/go-project-carousel.default', projectActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-testimonial-carousel.default', testimonialActiveOne);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-project-carousel.default', projectCarouselActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-service-carousel.default', serviceCarouselActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-brand-carousel.default', brandCarouselActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-testimonial-carousel.default', testimonialActive);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-testimonial-carousel.default', testimonialActiveThree);
        elementorFrontend.hooks.addAction('frontend/element_ready/go-testimonial-carousel.default', testimonialActiveTwo);
    });

    function content_ready_scripts() {
		$('[data-background]').each(function() {
			$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
		});

        gsap.to(".feh-exper-3-area", {
            scrollTrigger: {
              trigger: ".feh-exper-3-area",
              start: "top 70%",
              end: "bottom bottom",
              toggleClass: "active",
              once: true,
            },
        });
        gsap.to(".feh-need-3-area", {
			scrollTrigger: {
			  trigger: ".feh-need-3-area",
			  start: "top 70%",
			  end: "bottom bottom",
			  toggleClass: "active",
			  once: true,
			},
		});

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
	}
	
	$(window).on('elementor/frontend/init', function() {
	
		if (elementorFrontend.isEditMode()) {
			
			elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
				content_ready_scripts();
			});
	
		} else {
			elementorFrontend.hooks.addAction('frontend/element_ready/widget', function() {
				content_ready_scripts();
			});
		}
	
	});


})(jQuery);