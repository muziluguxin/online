// JavaScript Document
//console.log($)
$(function(){
	//logo
$(".lant").click(function(){
		window.location.href="../index.html"
		})
	//导航栏的礼物分类
	$(".lanl").hover(function(){
			$(this).children(".lanler").css({display:"block"})
		},function(){
				$(this).children(".lanler").css({display:"none"})
			})
	$("body a").hover(
	function(){$(this).css({color:"red"});},
	function(){$(this).css({color:"#000"});$(".lan3rerd a").css({color:" #b28850"});$(".botton-last a").css({color:"#c3c3c3"});
	$(".middlehuan2zct a").css({color:"#b28850"})}
	)
	

	//logo后的a送礼导航
		$(".lanl").hover(function(){
			$(this).children(".lanlaer").css({display:"block"})
		},function(){
				$(this).children(".lanlaer").css({display:"none"})
			})
//导航注册登录
	$(".lan3rc").hover(function(){
		   $(".lan3rca").css({backgroundPosition:"-149px -14px",cursor:"pointer"})
		},function(){$(".lan3rca").css({backgroundPosition:"-149px 0px"})})
	//导航注册登录二级菜单
	$(".lan3rcf").hover(function(){
		$(this).find(".lan3rer").stop().slideDown()
		
		},function(){
			$(this).find(".lan3rer").stop().slideUp()
			})
	//导航购物车
	$(".lan3r").hover(function(){
		 $(".lan3ra").css({backgroundPosition:"-167px -14px",cursor:"pointer"})
		},function(){
			$(".lan3ra").css({backgroundPosition:"-167px 0px"})
			})
	//导航购物车二级菜单
	  $(".lan3rf").hover(function(){
		$(this).find(".lan3er").stop().slideDown()
		},function(){
			$(this).find(".lan3er").stop().slideUp()
			})
	$(".middles").hover(function(){
		 $(this).css({borderColor:"red"});
		  $(".middles a").css({color:"red"})
		},function(){
			$(this).css({borderColor:"#979795"});
		  $(".middles a").css({color:"#666"})
			})
	//现在注册
	$(".middlehuan12").hover(function(){
		$(this).css({color:"red"})
		},function(){
			$(this).css({color:"#c3c3c3"})
			})
	//获取邮箱
	$(".middlehuan2yx").blur(function(){
		
		var a=document.querySelector(".middlehuan2yx");
		var b=a.value;
		var c=/^1[3-8]\d{9}$/g;
		var c1=c.test(b)
		var  d= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
		var  d1=d.test(b)
		if(c1==true||d1==true){
			document.querySelector(".middlehuan2yxn").innerHTML="*验证通过";
			document.querySelector(".middlehuan2yxn").style.color="green";
			}else{document.querySelector(".middlehuan2yxn").innerHTML="*请输入正确的邮箱或手机号码";
			      document.querySelector(".middlehuan2yxn").style.color="red"
			a.value="";}
		//console.log(d1)
		})
	//获取密码
	$(".middlehuan2mm").blur(function(){
		var a=document.querySelector(".middlehuan2mm");
		var b=a.value;
		var c=/^\w{6,16}$/g;;
		var  c1=c.test(b)
		//console.log(c1)
		
	})
	//再次获取密码
	$(".middlehuan2mm2").blur(function(){
		var a=document.querySelector(".middlehuan2mm");
		var b=a.value;
		var c=/^\w{6,16}$/g;;
		var  c1=c.test(b)
		
		var a2=document.querySelector(".middlehuan2mm2");
		var b2=a2.value;
		var c2=/^\w{6,16}$/g;;
		var  c21=c2.test(b)
		//console.log(c1)
		if(b!=b2){document.querySelector(".middlehuan2mm2n").innerHTML="*输入的密码和上面的密码不一致，请核对之后再输入";
		document.querySelector(".middlehuan2mm2n").style.color="red";
		a2.value="";}else{
			 document.querySelector(".middlehuan2mm2n").innerHTML="*验证通过";
		document.querySelector(".middlehuan2mm2n").style.color="green";
			}
	})
	//登录

	$(".middlehuan21").click(function(){
		  //获取邮箱
		var a=document.querySelector(".middlehuan2yx");
		var b=a.value;
		var c=/^1[3-8]\d{9}$/g;
		var c11=c.test(b)
		var  d= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
		var  d1=d.test(b)

		//获取密码
		var a1=document.querySelector(".middlehuan2mm");
		var b1=a1.value;
		var c1=/^\w{6,16}$/g;
		var  c12=c1.test(b)
		//再次获取密码
		var a2=document.querySelector(".middlehuan2mm2");
		var b2=a2.value;
		var c2=/^\w{6,16}$/g;;
		var  c21=c2.test(b)
		
		if((c11==true||d1==true)&&c12==true&&c21==true){
			window.location.href="../html/login.html";
			$.cookie(b,b2)
			}else{
				document.querySelector(".middlehuan2yxn").innerHTML="*请确认是否输入有错";
			    document.querySelector(".middlehuan2yxn").style.color="red"  
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