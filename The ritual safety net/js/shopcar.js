// JavaScript Document
//console.log($)
$(function(){
	//logo
     $(".lant").click(function(){
		window.location.href="../index.html"
		})
     $(".lanrig a").hover(function(){
		 $(this).css({color:"red"})
		 
		 },function(){
			  $(this).css({color:"#333"})
			 
			 })
	//qq
	$(".middles").hover(function(){
		 $(this).css({borderColor:"red"});
		  $(".middles a").css({color:"red"})
		},function(){
			$(this).css({borderColor:"#979795"});
		  $(".middles a").css({color:"#666"})
			})
	//中间
	$(".minddlecaimu a").hover(function(){
		 $(this).css({color:"red"})
		 
		 },function(){
			  $(this).css({color:"#333"})
			 
			 })
	$(".minddlecaimu323").hover(function(){
		 $(this).css({color:"white",background:"red"})
		 
		 },function(){
			  $(this).css({color:"white",background:"#d93732"})
			 
			 })
	//增减商品的数量
	$(".minddlecaimu133").click(function(){
		var value=Number($(".minddlecaimu132").val());
		console.log(typeof(value))
		value+=1;
		$(".minddlecaimu132").val(value);
		var pri=199*value;
		$("#minddletprice span").html(pri+".0");
		$(".minddlecaimu322 .pri").html(pri+".0")
		
		
	})
    $(".minddlecaimu131").click(function(){
        var value=Number($(".minddlecaimu132").val());
        //console.log(typeof(value))
        value-=1
        if(value>=0){$(".minddlecaimu132").val(value);
		$(".minddlecaimu132").val(value);
		var pri=199*value;
		$("#minddletprice span").html(pri+".0");
		$(".minddlecaimu322 .pri").html(pri+".0")
		}
		
    })
	//删除
	$(".minddlecaimu16").click(function(){

        $(".minddlecaimu table").css({display: "none"})
		$(".minddlecaimu").html("购物车空空如也")
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