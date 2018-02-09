// JavaScript Document
//console.log($)
$(function(){
    //logo
    $(".navt").click(function(){
        window.location.href="../index.html"
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
//图图转换
$(".middleMenu211 img").mouseover(function(){
	  var lunbo=["url(../img/register/1.jpg)","url(../img/register/2.jpg)","url(../img/register/3.jpg)","url(../img/register/4.jpg)","url(../img/register/5.jpg)","url(../img/register/6.jpg)"]
	  var  a=$(".middleMenu211 img").index(this)
	 console.log(a)
	  var b=lunbo[a] 
	//console.log(b)
     $(".middleMenu2121i").css({background:b,backgroundSize:"100% 100%"});
	 $(".middleMenu212daimg").css({background:b,backgroundSize:"800px 800px"})
	  
	})
//黑快
$(".middleMenu2122").mousemove(function(event){
	 
	  var e=document.getElementsByClassName("middleMenu2121")[0]
	  var a=event||window.event
	  var b=a.offsetX-(e.offsetWidth/2)
	  var c=a.offsetY-(e.offsetHeight/2)
	  var w=document.getElementsByClassName("middleMenu2121i")[0]
	//console.log(e.offsetHeight)
	    if(b<0){
                b=0
           }else if(b>=w.offsetWidth-e.offsetWidth){b=w.offsetWidth-e.offsetWidth}
        if(c<0){
                c=0
           }else if(c>=w.offsetHeight-e.offsetHeight){
                c=w.offsetHeight-e.offsetHeight;
           }
	  e.style.top=c+"px";
	  e.style.left=b+"px";
	  e.style.display="block";
	   var e1=document.getElementsByClassName("middleMenu212")[0]
	   var da1=document.getElementsByClassName("middleMenu212daimg")[0]

	   

	      var x=b/(e1.offsetWidth-e.offsetWidth);
           var y=c/(e1.offsetHeight-e.offsetHeight);
          //console.log(x+":"+y)
        var le=-x*(750-da1.offsetWidth);
         var to=-y*(750-da1.offsetHeight);
          // console.log(le+":"+to)
         da1.style.backgroundPosition=le+"px "+to+"px";
     	 da1.style.display="block";
	})
$(".middleMenu212").mouseout(function(){ 
var e=document.getElementsByClassName("middleMenu2121")[0]
 var da1=document.getElementsByClassName("middleMenu212daimg")[0]
e.style.display="none";  da1.style.display="none";})
//男神风范
$(".middleMenu1 a").hover(function(){
	  $(this).css({color:"red"})
	},function(){
		$(this).css({color:"#333"})
		})
//白色


    $(".middleMenu2232 a").click(function(){
        $(this).css({color:"red",border:"1px solid red"}).siblings().css({color:"#333",border:"1px solid #e8e8e8"})
    })
    $(".middleMenu2232 a").dblclick(function(){
        $(this).css({color:"#333",border:" 1px solid #e8e8e8"})
    })

//直接购买
$(".middleMenu2251").hover(function(){
	  $(this).css({background:"red",color:"white"})
	},function(){
		$(this).css({background:"#d93732",color:"white"})
		})
$(".middleMenu2251").click(function(){
	window.location.href="shopcar.html"
})
//桃心
$(".middleMenu2252").hover(function(){
	  $(this).css({background:"#e6e6e6"})
	},function(){
		$(this).css({background:"#e2e2e2"})
		})
//对个
$(".middleMenu226 a").hover(function(){
	  $(this).css({color:"red"});
	  $(".middleMenu2261").css({backgroundPosition:"-223px -32px"})
	},function(){
		$(this).css({color:"#333"});
		$(".middleMenu2261").css({backgroundPosition:"-224px -16px"})
		})
//出现隐藏的导航

window.onscroll=function(){
	var height;
    var yd=document.getElementsByClassName("middleMenu10")[0];
	var qql=document.getElementsByClassName("middleqq")[0];
	var tot=document.getElementsByClassName("middletop")[0];
     height=document.documentElement.scrollTop||document.body.scrollTop  
       //console.log(height)
        if( height  >= 840){
            yd.style.display = "block";
			qql.style.display = "block";
			tot.style.display = "block";
			
            }
        else{
                yd.style.display="none";
				qql.style.display = "none";
			    tot.style.display = "none";
                }
  
         }
$(".middleqq").hover(function(){
	$(this).css({opacity:0.5}) ;
	
	},function(){$(this).css({opacity:1})})
$(".middletop").hover(function(){
	$(this).css({opacity:0.5}) ;
	
	},function(){$(this).css({opacity:1})})
  
$(".middletop").click(function(){
    if(document.body.scrollTop){document.body.scrollTop=0;}
	})       
$(".middleMenu10 a").hover(function(){
	$(this).css({color:"red"}) ;
	
	},function(){$(this).css({color:"#c3c3c3"})})


//详情
$(".middleMenu31 a").hover(function(){
	  $(this).css({color:"red"})
	},function(){
		$(this).css({color:"#333"})
		})
//发表咨询
$(".middlefont11 a").hover(function(){
	  $(this).css({background:"red",color:"white"})
	},function(){
		$(this).css({background:"#d93732",color:"white"})
		})
//查询全部
$(".middlefont31").hover(function(){
	  $(".middlefont31 a").css({color:"red"});
	  $(".middlefont312").css({backgroundPosition:"-192px -16px"})
	},function(){
		$(".middlefont31 a").css({color:"#333"});
		 $(".middlefont312").css({backgroundPosition:"-192px 0"})
		})
//猜你喜欢
$(".middleMenuxi21 div").mouseenter(function(){
	var yuanindex=$(this).index()
	//console.log(yuanindex)$(".da div").eq(a)
	//var d=$(".middleMenuxi1 ul").index()
	var b=$(".middleMenuxi1 ul").eq(yuanindex)
	//console.log(b)
	$(this).css({background:"#ccc"}).siblings().css({background:"#666"})
	b.siblings(".middleMenuxi11").css({display:"none"});
	b.css({display:"block"});
	//$(".middleMenuxi1 ul").eq(yuanindex).siblings().css({display:"none"})
	
	
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
})	