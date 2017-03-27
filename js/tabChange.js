$(function(){
	var $wWidth = $(window).width();
	var liWidth = $(".rule_nav_cell").width();
	$(".rule_0").width($wWidth);
	var time = 200;
    widthJust();
    
     $('.rule_nav_cell').click( function(){
           var index=$(this).index();
           var width = $(".rule_0").width();
           if(index===0){
           		$("body").removeClass("bg_white").addClass("bg_grey");
           		$(this).find('b').animate({"left":"64%"});
           }else{
           		$("body").removeClass("bg_grey").addClass("bg_white");
           		$(this).find('b').animate({"left":"80%"});
           }
          $( this).addClass('rule_nav_selected').siblings().removeClass('rule_nav_selected');
          $( this).find('b').addClass('radius-point');
          $( this).siblings('li').find('b').removeClass('radius-point');
//          $( ".rule_0").eq(index).show().siblings().hide();
          /*new*/
          $( ".rule_0").each(function(){
          	$(".rule_content").animate({marginLeft:-index*width+'px'},time);
          	$(".announce_content").animate({marginLeft:-index*width+'px'},time);
          })
          $(".rule_nav_cell span").animate({left:index*liWidth+'px'},time);
          
     });  
     
     function widthJust(){
     	    $('.announce_content').width($wWidth*4)
     		$(".rule_content").width($wWidth*2);
     		$(".rule_0").width($wWidth);
     }
});
