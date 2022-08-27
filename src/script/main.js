$(document).ready(function(){
	function showYaMaps(){
	 var script   = document.createElement("script");
	 script.type  = "text/javascript";
	 script.src   = "http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=iaFxi9Mln1MO3U5voKWd_CC9HX1G5YO6&width=320&height=250";
	 document.getElementById("YaMaps").appendChild(script);
	}

	$('.header__burger').on('click', function(){
		$('.header__navigation-list').addClass('_active');
		$('.page').addClass('_lock');
	});
	$('.header__close-button, .header__navigation-link').on('click', function(){
		$('.header__navigation-list').removeClass('_active');
		$('.page').removeClass('_lock');
	});

	const btnPopup = document.querySelectorAll('[data-open-popup]');
	// const popup = document.querySelector('.pop');
	const html = document.querySelector('html');

	btnPopup.forEach(item => {
		let getAttributPopup = item.getAttribute('data-open-popup')
		console.log(item.getAttribute('data-open-popup'))
		item.addEventListener('click', (e) => {
			let popup = document.getElementById(getAttributPopup);
			if(popup){
				console.log(popup, 'sdsdsdsd')
			}
			
			popup.classList.add('pop__active');
			html.classList.add('overflove-hidden');
		} );
	})
	
	
	// btnPopup.addEventListener('click', (e) => {
	// 	// e.stopPropagation();
	// 	popup.classList.add('pop__active');
	// 	html.classList.add('overflove-hidden');
	// 	console.log('rdgbfbfg')
	// } );

});

document.addEventListener("DOMContentLoaded", function() {
	var mainSlider = new Swiper('.main', {
	  spaceBetween: 0,
	  slidesPerView: 1,
	  speed: 300,
	  allowTouchMove: false,
	  preventClicksPropagation: false,
	  navigation: {
		prevEl: '.main .swiper-button-prev',
		nextEl: '.main .swiper-button-next',
		clickable: true,
	  },
	  autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	  },
	});
  });
