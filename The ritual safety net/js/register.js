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

	$(".middles").hover(function(){
		 $(this).css({borderColor:"red"});
		  $(".middles a").css({color:"red"})
		},function(){
			$(this).css({borderColor:"#979795"});
		  $(".middles a").css({color:"#666"})
			})
	//现在注册
	$(".middledia12").hover(function(){
		$(this).css({color:"red"})
		},function(){
			$(this).css({color:"#c3c3c3"})
			})
	//获取邮箱
	$(".middledia2yx").blur(function(){
		
		var a=document.querySelector(".middledia2yx");
		var b=a.value;
		var c=/^1[3-8]\d{9}$/g;
		var c1=c.test(b)
		var  d= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
		var  d1=d.test(b)
		if(c1==true||d1==true){
			document.querySelector(".middledia2yxn").innerHTML="*验证通过";
			document.querySelector(".middledia2yxn").style.color="green";
			}else{document.querySelector(".middledia2yxn").innerHTML="*请输入正确的邮箱或手机号码";
			      document.querySelector(".middledia2yxn").style.color="red"
			a.value="";}
		//console.log(d1)
		})
	//获取密码
	$(".middledia2mm").blur(function(){
		var a=document.querySelector(".middledia2mm");
		var b=a.value;
		var c=/^\w{6,16}$/g;;
		var  c1=c.test(b)
		//console.log(c1)
		
	})
	//再次获取密码
	$(".middledia2mm2").blur(function(){
		var a=document.querySelector(".middledia2mm");
		var b=a.value;
		var c=/^\w{6,16}$/g;;
		var  c1=c.test(b)
		
		var a2=document.querySelector(".middledia2mm2");
		var b2=a2.value;
		var c2=/^\w{6,16}$/g;;
		var  c21=c2.test(b)
		//console.log(c1)
		if(b!=b2){document.querySelector(".middledia2mm2n").innerHTML="*输入的密码和上面的密码不一致，请核对之后再输入";
		document.querySelector(".middledia2mm2n").style.color="red";
		a2.value="";}else{
			 document.querySelector(".middledia2mm2n").innerHTML="*验证通过";
		document.querySelector(".middledia2mm2n").style.color="green";
			}
	})
	//登录

	$(".middledia21").click(function(){
		  //获取邮箱
		var a=document.querySelector(".middledia2yx");
		var b=a.value;
		var c=/^1[3-8]\d{9}$/g;
		var c11=c.test(b)
		var  d= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
		var  d1=d.test(b)

		//获取密码
		var a1=document.querySelector(".middledia2mm");
		var b1=a1.value;
		var c1=/^\w{6,16}$/g;
		var  c12=c1.test(b)
		//再次获取密码
		var a2=document.querySelector(".middledia2mm2");
		var b2=a2.value;
		var c2=/^\w{6,16}$/g;;
		var  c21=c2.test(b)
		
		if((c11==true||d1==true)&&c12==true&&c21==true){
			window.location.href="../html/login.html";
			$.cookie(b,b2)
			}else{
				document.querySelector(".middledia2yxn").innerHTML="*请确认是否输入有错";
			    document.querySelector(".middledia2yxn").style.color="red"  
			 }
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