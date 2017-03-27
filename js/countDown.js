$(function(){
	 //倒计时
	
	function checkTime(i){
		if(i<10){
			i= "0"+i;
		}
		return i;
	};
	
  function leftTime(){
    var endTime = new Date("2018/9/12,15:17:00");//结束时间
    var curTime = new Date();//当前时间
    var leftTime = parseInt((endTime.getTime() - curTime.getTime())/1000);//获得时间差
    //小时、分、秒需要取模运算
//  var d = parseInt(leftTime/(60*60*24));
//  var h = parseInt(leftTime/(60*60)%24);
    var m = parseInt(leftTime/60%60);
    var s = parseInt(leftTime%60);
    

    
    var ms = parseInt(((endTime.getTime() - curTime.getTime())/100)%60);
        m = checkTime(m);
        ms = checkTime(ms);
        s = checkTime(s);
        
    var txt = m+ " : " + s + " : " + ms;
    $(".time-change").html(txt);
    if(leftTime<=0){ $(".time-change").text("团购结束");}
  };
  leftTime();
  var set = setInterval(leftTime,100);
});
