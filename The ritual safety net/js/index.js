// JavaScript Document
//console.log($)
$(function(){
	//logo
$(".navt").click(function(){
		window.location.href="index.html"
		})
	//导航栏的礼物分类
	$(".navl").hover(function(){
			$(this).children(".navler").css({display:"block"})
		},function(){
				$(this).children(".navler").css({display:"none"})
			})
	$("body a").hover(
	function(){$(this).css({color:"red"});},
	function(){$(this).css({color:"#000"});$(".nav3rerd a").css({color:" #b28850"})}
	)


	//logo后的a送礼导航
		$(".navl").hover(function(){
			$(this).children(".navcfer").css({display:"block"})
		},function(){
				$(this).children(".navcfer").css({display:"none"})
			})
//导航注册登录
	$(".nav3rc").hover(function(){
		   $(".nav3rca").css({backgroundPosition:"-149px -14px",cursor:"pointer"})
		},function(){$(".nav3rca").css({backgroundPosition:"-149px 0px"})})
	//导航注册登录二级菜单
	$(".nav3rcf").hover(function(){
		$(this).find(".nav3rer").stop().slideDown()

		},function(){
			$(this).find(".nav3rer").stop().slideUp()
			})
	//导航购物车
	$(".nav3r").hover(function(){
		 $(".nav3ra").css({backgroundPosition:"-167px -14px",cursor:"pointer"})
		},function(){
			$(".nav3ra").css({backgroundPosition:"-167px 0px"})
			})
	//导航购物车二级菜单
	  $(".nav3rf").hover(function(){
		$(this).find(".nav3er").stop().slideDown()
		},function(){
			$(this).find(".nav3er").stop().slideUp()
			})
	//qq
	$(".middles").hover(function(){
		 $(this).css({borderColor:"red"});
		  $(".middles a").css({color:"red"})
		},function(){
			$(this).css({borderColor:"#979795"});
		  $(".middles a").css({color:"#666"})
			})
//a
$("body a").hover(function(){$(this).css({color:"red"})},function(){$(this).css({color:"#000"})})
//出现隐藏的导航

window.onscroll=function(){
	var height;
   
	var qql=document.getElementsByClassName("minddleqq")[0];
	var tot=document.getElementsByClassName("minddletop")[0];
     height=document.documentElement.scrollTop||document.body.scrollTop  
      console.log(height)
        if( height  >= 550){
           
			qql.style.display = "block";
			tot.style.display = "block";
			
            }
        else{
                
				qql.style.display = "none";
			    tot.style.display = "none";
                }
  
         }
$(".minddleqq").hover(function(){
	$(this).css({opacity:0.5}) ;
	
	},function(){$(this).css({opacity:1})})
$(".minddletop").hover(function(){
	$(this).css({opacity:0.5}) ;
	
	},function(){$(this).css({opacity:1})})
  
$(".minddletop").click(function(){
    if(document.body.scrollTop){document.body.scrollTop=0;}
	})       

//轮播图转换
$(".minddle1 div").mouseover(function(){
	  var lunbo=["url(./img/index/11.jpg)","url(./img/index/12.jpg)","url(./img/index/13.jpg)","url(./img/index/14.jpg)","url(./img/index/15.jpg)"]
	  var  a=$(".minddle1 div").index(this)
	// console.log(a)
	  var b=lunbo[a]
	//console.log(b)
	$(".minddle").css({background:b,backgroundSize:"100% 100%"})
	  
	})
$(".minddle1 div").hover(function(){
	   
	  $(this).css({background:"#ccc"});
	  $(this).siblings().css({background:"white"});
	},function(){
		$(this).css({border:"none "})
		})
	//关注我们
	$(".botton1321").hover(function(){
		$(this).css({backgroundPosition:"0px -251px"})
		},function(){
			$(this).css({backgroundPosition:"0 -276px"})
			})
			
	$(".botton1322").hover(function(){
		$(this).css({backgroundPosition:"-28px -249.5px"})
		},function(){
			$(this).css({backgroundPosition:"-28px -275px"})
			})
			
	$(".botton1323").hover(function(){
		$(this).css({backgroundPosition:"-53px -249px"})
		},function(){
			$(this).css({backgroundPosition:"-53px -274px"})
			})
	//qq
	$(".botton143").hover(function(){
		 $(this).css({borderColor:"red",color:"red"});
		 // $(".middles a").css({color:"red"})
		},function(){
			$(this).css({borderColor:"#979795",color:"#666"});
		  //$(".middles a").css({color:"#666"})
			})

    $(".botton-last a").hover(function(){
        $(this).css({color:"red"})
    },function(){
        $(this).css({color:"#c3c3c3"})
    })
	$(".botton102 a").hover(function(){
        $(this).css({color:"red"})
    },function(){
        $(this).css({color:"#c3c3c3"})
    })
})	