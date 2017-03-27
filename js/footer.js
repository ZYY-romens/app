$(function(){
	$('footer li').click(function(){
	 	$('footer li').removeClass('current-select');
	 	$('footer li>a span').removeClass('active-color-red');
			$(this).addClass('current-select');
			$(this).find('span').addClass('active-color-red');
		})
});
