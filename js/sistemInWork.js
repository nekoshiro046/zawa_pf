$(window).resize(function(){
	imgLoad();
}); 
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
	$('html,body').animate({ scrollTop: 0 }, '1');
	jQuery(window).scroll(function (){
        jQuery('.underline').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 225){
                jQuery(this).addClass('scrollin');
            }
        });

        jQuery('.fadein').each(function(){
            var elPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elPos - windowHeight + 250){
                jQuery(this).addClass('scrollin');
            }
        });
    });
});