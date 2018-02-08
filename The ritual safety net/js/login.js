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
	//现在注册
	$(".middlewel12").click(function(){window.location.href="register.html"})
	$(".middlewel12").hover(function(){
		$(this).css({color:"red"})
		
		},function(){
			$(this).css({color:"#c3c3c3"})
			})
	//获取邮箱
	$(".middlewel2yx").blur(function(){
		
		var a=document.querySelector(".middlewel2yx");
		var b=a.value;
		var c=/^1[3-8]\d{9}$/g;
		var c1=c.test(b)
		var  d= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
		var  d1=d.test(b)
		
		//console.log(d1)
		})
	//获取密码
	$(".middlewel2mm").blur(function(){
		var a=document.querySelector(".middlewel2mm");
		var b=a.value;
		var c=/^\w{6,16}$/g;;
		var  c1=c.test(b)
		console.log(c1)
		
	})
	//登录
	$(".middlewel21").click(function(){
		  //获取邮箱
		var a=document.querySelector(".middlewel2yx");
		var b=a.value;
		var c=/^1[3-8]\d{9}$/g;
		var c11=c.test(b)
		var  d= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
		var  d1=d.test(b)

		//获取密码
		var a1=document.querySelector(".middlewel2mm");
		var b1=a1.value;
		var c1=/^\w{6,16}$/g;
		var  c12=c1.test(b)
		
		//获取是否保存密码
		var a2=document.querySelector(".middlewelcheck");
		var b2=a2.checked;
		//console.log(b2)
		$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/datainfo.html",
			success:function(value){
				console.log(value)
			}
		})
		//if(){
            if((c11==true||d1==true)&&c12==true&&b2==true&&b&&b1){
                window.location.href="../index.html";
                $.cookie(b,b1)
                alert("密码将保存30天")
            }else if((c11==true||d1==true)&&c12==true&&b2==false&&b&&b1){
                window.location.href="../index.html";
                $.cookie(b,b1)
            }else {
               document.querySelector(".middleweltip").innerHTML="*请核对信息";
			   document.querySelector(".middleweltip").style.color="red";
                a.value="";
                a1.value="";
            }
		//}

	})
	
	//忘记密码
	$(".middlewel22  a").hover(function(){$(this).css({color:"red"})},function(){$(this).css({color:"#c3c3c3"})})
	//其他方式
	$(".minddleqq1").hover(function(){
		  $(".minddleqq11").css({backgroundPosition:"-200px -234px"});
		  $(".minddleqq1 div").css({color:"red",cursor:"pointer"})
		  
		},function(){
			
			$(".minddleqq11").css({backgroundPosition:"-200px -267px"});
			$(".minddleqq1 div").css({color:"#333",cursor:"none"})
			})
			
	$(".minddleqq2").hover(function(){
		  $(".minddleqq21").css({backgroundPosition:"-234px -234px"});
		  $(".minddleqq2 div").css({color:"red",cursor:"pointer"})
		  
		},function(){
			
			$(".minddleqq21").css({backgroundPosition:"-234px -267px"});
			$(".minddleqq2 div").css({color:"#333",cursor:"none"})
			})
			
	$(".minddleqq3").hover(function(){
		  $(".minddleqq31").css({backgroundPosition:"-267px -234px"});
		  $(".minddleqq3 div").css({color:"red",cursor:"pointer"})
		  
		},function(){
			
			$(".minddleqq31").css({backgroundPosition:"-267px -267px"});
			$(".minddleqq3 div").css({color:"#333",cursor:"none"})
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