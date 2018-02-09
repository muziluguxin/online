// JavaScript Document
//console.log($)
$(function(){
	//top下拉表
	$(".top-list-img2").click(function(){
		$(".top-list-img1").toggle(500)
		})
	var index=0;
	var time;
	var length=$(".rotograph-imgs img").length;
	//console.log(length)
	$(".rotograph-sq div").mouseenter(function(){
		index= $(this).index()
		//console.log(index)
		changeimg()				
		})
	//图片转换封装	
	function changeimg(){
		//右边界
		if(index>=length){
			$(".rotograph-imgs").css({left:0});
			index=1
			}
		//左边界
		if(index<=-1){
			$(".rotograph-imgs").css({left:-375*(length-1)});
			index=length-2;
			}
		$(".rotograph-imgs").css({left:-375*index});
		//原点转换
		if(index==0||index==length-1){
			 $(".rotograph-sq div").eq(0).addClass("change").siblings().removeClass("change")
			}else{$(".rotograph-sq div").eq(index).addClass("change").siblings().removeClass("change")}
		}
		

	 	
	 function autoplay(){
		  time=setInterval(function(){
			  index++;
			  changeimg()
			  },2000)
		 }
    autoplay()
	 $(".rotograph").hover(function(){
		   clearInterval(time)
		 },function(){
			 autoplay()
			 })
    $(".top-package").click(function () {
		$(".top-package .top-list-contentda").fadeToggle(500)
    })
	})