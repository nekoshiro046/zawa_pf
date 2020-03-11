Pace.on('done', function(){
	$('.wrapper').fadeIn();
	imgLoad();
});
$(window).resize(function(){
	imgLoad();
}); 
function imgLoad(){
	var container1 = document.querySelector('#container1');
	var container2 = document.querySelector('#container2');
	var container3 = document.querySelector('#container3');
	var $container1 = $('#container1');
	var $container2 = $('#container2');
	var $container3 = $('#container3');
	var width = window.innerWidth;
	var height = window.innerHeight;
	imagesLoaded(container1, function () {
	    var msnry = new Masonry(container1, {
	        itemSelector: '.item', //コンテンツのclass名
	        fitWidth: true,
	        initLayout: true,
	        // columnWidth: 0, //カラムの幅を設定
	        // columnHeight: 0 //カラムの高さを設定
	        columnWidth: '.item'
	    });
	    msnry.layout();
	});
	imagesLoaded(container2, function () {
	    var msnry = new Masonry(container2, {
	        itemSelector: '.item',
	        fitWidth: true,
	        initLayout: true,
	        // columnWidth: 0,
	        // columnHeight: 0
	        columnWidth: '.item'
	    });
	    msnry.layout();
	});
	imagesLoaded(container3, function () {
	    var msnry = new Masonry(container3, {
	        itemSelector: '.item_4UI',
	        fitWidth: true,
	        initLayout: true,
	        // columnWidth: 0,
	        // columnHeight: 0
	        columnWidth: '.item_4UI'
	    });
	    msnry.layout();
	});
}
$(function() {
	$('.toggle_switch').on('click',function(){
		var p = $(this).hasClass('open');
		if(p){
			$(this).html('<p class="menu-border"> Menu</p>');
		}else{
			$(this).html('<p class="menu-border"> Close</p>');
			// $(this).css('display', 'none').fadeIn(1000);
		}
		$(this).toggleClass('open');
		$(this).next('.toggle_contents').slideToggle();	
	});
	$('.toggle_switch2').on('click',function(){
		$('.toggle_contents2').slideToggle();
		if(!$('.toggle_contents2').is(':visible')) {
			$('.toggle_contents2').fadeOut(500);
		}else{
		}
	});
	$('.Reel').on('click',function(){
		var p = $(this).hasClass('played');
		if(!p){
			$(this).html('<iframe class="mov-container fadein" src="https://www.youtube.com/embed/RAF2EPdNqpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('html,body').animate({ scrollTop: 1 }, '0.1');
			$(this).toggleClass('played');
		}
	});
	$('html,body').animate({ scrollTop: 0 }, '1');
	jQuery(window).scroll(function (){
        jQuery('.underline').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 200){
                jQuery(this).addClass('scrollin');
            }
        });

        jQuery('.fadein').each(function(){
            var elPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elPos - windowHeight + 225){
                jQuery(this).addClass('scrollin');
            }
        });
    });
});