let selectsShop = document.querySelectorAll('.shop__filters-item-checklist')

if(selectsShop) { 
	selectsShop.forEach(item => {
		new Choices(item, {
			searchEnabled: false,
			itemSelectText: '',
			// classNames: {
			//   containerInner: 'shop__filters-item-checklist'
			// }
		  })
	})

}


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
	const btnPopupClose = document.querySelectorAll('[data-close-popup]');
	const btnPopupCallback = document.querySelectorAll('[data-callback-popup]');
	const btnOpenPopupRequest = document.querySelectorAll('[data-open-request]');
	const btnShopBuy = document.querySelectorAll('.shop__product');
	const btnOpenPopupCart = document.querySelectorAll('[data-open-cart]');
	const html = document.querySelector('html');
  const headerActive = document.querySelector('.header__navigation-list');


	btnPopup.forEach(item => {
		let getAttributPopup = item.getAttribute('data-open-popup');
		item.addEventListener('click', (e) => {
			let popup = document.getElementById(getAttributPopup);
			popup.classList.add('popup_background__active');
			html.classList.add('overflove-hidden');
		} );
	});

	btnPopupClose.forEach(item => {
		let getAttributPopup = item.getAttribute('data-close-popup')
		item.addEventListener('click', (e) => {
			let popup = document.getElementById(getAttributPopup);

			popup.classList.remove('popup_background__active');
			popup.classList.remove('popup_background_request__active');
			popup.classList.remove('popup_background_callback__active');
			popup.classList.remove('popupContBasket__active');
			html.classList.remove('overflove-hidden');
		} );
	});

	btnPopupCallback.forEach(item => {
		let getAttributPopup = item.getAttribute('data-callback-popup');
		item.addEventListener('click', (e) => {
			let popup = document.getElementById(getAttributPopup);
			if(headerActive) {headerActive.classList.remove('_active')}
			popup.classList.add('popup_background_callback__active');
			html.classList.add('overflove-hidden');
		} );
	});

	btnOpenPopupRequest.forEach(item => {
		let getAttributPopup = item.getAttribute('data-open-request');
		const popupBackground = document.querySelector('.popup_background');
		const popupBackgroundCallback = document.querySelector('.popup_background_callback');
		item.addEventListener('click', (e) => {
			let popup = document.getElementById(getAttributPopup);
			if (popupBackground) { popupBackground.classList.remove('popup_background__active');}
			if (popupBackgroundCallback) { popupBackgroundCallback.classList.remove('popup_background_callback__active'); }
			popup.classList.add('popup_background_request__active');
			html.classList.add('overflove-hidden');
		} );
	});

	btnShopBuy.forEach(item => {
		item.addEventListener('click', (e) => {
			let popup = document.querySelector('.popup_background');
			popup.classList.add('popup_background__active');
			html.classList.add('overflove-hidden');
			console.log('scsdvdxvx');
		} );
	});

	btnOpenPopupCart.forEach(item => {
		let getAttributPopup = item.getAttribute('data-open-cart');
		const popupBackground = document.querySelector('.popup_background');
		item.addEventListener('click', (e) => {
			let popup = document.getElementById(getAttributPopup);
			if (popupBackground) { popupBackground.classList.remove('popup_background__active');}
			popup.classList.add('popupContBasket__active');
			html.classList.add('overflove-hidden');
		} );
	});

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
	  // autoplay: {
		// delay: 4000,
		// disableOnInteraction: false,
	  // },
	});
  });
