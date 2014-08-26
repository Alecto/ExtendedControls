(function ($) {  // Avoid conflicts with other libraries


	if ($("#leavesearch_btn")){			// проверяем, включен ли поиск
		$('#leavesearch_btn').addClass('extended-ControlsMenu');
		$('#extended-Menu').css('margin-left',$('#leavesearch_btn').outerWidth());	// подстраиваем положение меню под размеры поиска АЛГ
	}


	var $menu = $('#ldd_menu');


	$menu.children('li').each(function () {
		var $this = $(this);
		var $span = $this.children('span');
			$span.data('width', $span.width());
			ExtendeMenuResize();
		$this.bind('mouseenter', function () {
			$menu.find('.ldd_submenu').stop(true, true).hide();
			$span.stop().animate({ 'width': W + 'px' }, 300, function () {
				$this.find('.ldd_submenu').slideDown(300);
				});
        	}).bind('mouseleave', function () {
				$this.find('.ldd_submenu').stop(true, true).hide();
				$span.stop().animate({ 'width': $span.data('width') + 'px' }, 300);
			});
    	});



	$(document).ready(function () {					// включаем блоки + меню
		$('.extended-ControlsAll').css({opacity: 0.0, visibility: "visible"}).animate({opacity: '1.0'},1000);
		showHideMenu();
	});



	var I = localStorage.getItem('extended_menu_hide_show');	// загружаем настройку показа меню
	if (I == null || isNaN(I)) { I = 1; }				// проверяем, существуют ли настройки


	$('#extended-ShowHideMenuBtn').click(function () {		// включение/выключение меню
		I = 1 - I;
		showHideMenu();
		return false;
	});



	function showHideMenu() {
        	if (I == 1) {
			$('#extended-ShowHideMenuBtn').animate({opacity: '1.0'}, 1000);
			$('.extended-ControlsMenu').css({opacity: 0.0, visibility: "visible"}).animate({opacity: '1.0'},1000);
		} else {
			$('.extended-ControlsMenu').animate({opacity:0.0},500,function(){$('.extended-ControlsMenu').css('visibility','hidden');});
			$('#extended-ShowHideMenuBtn').animate({opacity: '0.3'}, 500);
	        }
        	localStorage.setItem('extended_menu_hide_show', I); 		// сохраняем настройку показа меню
	}



	function ExtendeMenuResize() {
		W = $('#wrap').outerWidth() + $('#wrap').offset().left - $('#ldd_menu').outerWidth() - $('#ldd_menu').offset().left;    // W = контент - ширина М - положение М
		S = 150; // $(this).width(); 				// S = ширина элемента SPAN
		if (W > 510) { W = 510; } 			// если места достаточно для формы более 510, делаем 510
        		else { if (W < S) { W = S; } }		// если мало места менее 510, вычисляем новый размер
	}


	$('.share42init').mouseover(function () { $('.share42-counter').attr('style', 'display: inline-block !important'); }).mouseout(function () { $('.share42-counter').attr('style', 'display: none !important'); });


})(jQuery);                                                               // Avoid conflicts with other libraries
