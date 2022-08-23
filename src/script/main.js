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
});