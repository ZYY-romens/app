$("#duobao-cat").flexslider({slideshow: false, animationLoop: false});
	$(function(){
		//获取夺宝进度  设置夺宝进度
		var processIndex = $(".duobao-process-percent").text().indexOf("%");
		var process = $(".duobao-process-percent").text().substring(0,processIndex);
		$(".duobao-process-width").css("width",process+"%");
		//页面滑到人气列表  使人气列表置顶
		$(window).scroll(function(){
			var top = $(window).scrollTop();
			var upTop = $(".duobao-banner").height()+$(".duobao-cat").height()+20+$(".duobao-new-show").height();
			if(top>upTop){
				$(".duobao-content-header").css({"position":"fixed","top":"0px","width":"100%","background":"white"});
			}else{
				$(".duobao-content-header").css({"position":"relative","top":"0px","width":"100%","background":"white"});
			}
		})
		})
	
    //点击人气 最新等 换颜色
    $(".duobao-content-header span").on("click",function(){
    	$(this).addClass("duobao-color").siblings().removeClass("duobao-color")
    })