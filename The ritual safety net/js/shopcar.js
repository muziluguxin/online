// JavaScript Document
//console.log($)
$(function(){
	//logo
     $(".navt").click(function(){
		window.location.href="../index.html"
		})
     $(".navrig a").hover(function(){
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
	$(".middleMenumu a").hover(function(){
		 $(this).css({color:"red"})
		 
		 },function(){
			  $(this).css({color:"#333"})
			 
			 })
	$(".middleMenumu323").hover(function(){
		 $(this).css({color:"white",background:"red"})
		 
		 },function(){
			  $(this).css({color:"white",background:"#d93732"})
			 
			 })
	//增减商品的数量
	$(".middleMenumu133").click(function(){
		var value=Number($(".middleMenumu132").val());
		console.log(typeof(value))
		value+=1;
		$(".middleMenumu132").val(value);
		var pri=199*value;
		$("#minddletprice span").html(pri+".0");
		$(".middleMenumu322 .pri").html(pri+".0")
		
		
	})
    $(".middleMenumu131").click(function(){
        var value=Number($(".middleMenumu132").val());
        //console.log(typeof(value))
        value-=1
        if(value>=0){$(".middleMenumu132").val(value);
		$(".middleMenumu132").val(value);
		var pri=199*value;
		$("#minddletprice span").html(pri+".0");
		$(".middleMenumu322 .pri").html(pri+".0")
		}
		
    })
	//删除
	$(".middleMenumu16").click(function(){

        $(".middleMenumu table").css({display: "none"})
		$(".middleMenumu").html("购物车空空如也")
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