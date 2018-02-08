
<!--小屏时切换myTabDrop1的内容-->
$(function () {
    $(".dropdown-menu li a").click(function () {
        var val=$(this).html()
        $("#myTabDrop1").html(val)
        $(".lr-top-content").html(val)

    })
    // 左侧tabde的样式变化
    $(".tabchange li a").hover(function () {
        $(this).css({backgroundColor:"white"})

    })
    $(".tabchange li a").click(function () {
        $(this).addClass("current").parent().siblings().children("a").removeClass("current")
        console.log(typeof($(this).parent().index()))
         if($(this).parent().index()==0){
             $(".left-img").css({backgroundPosition: "-123px -1px"})
         }else{$(".left-img").css({backgroundPosition: "2px -1px"})}

         if($(this).parent().index()==1){
             $(".left-img11").css({backgroundPosition: "-123px -97px"})
         }else{
             $(".left-img11").css({backgroundPosition: " -3px -97px"})
         }

        if($(this).parent().index()==2){
            $(".left-img2").css({backgroundPosition: "-119px -198px"})
        }else{
            $(".left-img2").css({backgroundPosition: " 2px -198px"})
        }

        if($(this).parent().index()==3){
            $(".left-img3").css({backgroundPosition: "-119px -296px"})
        }else{
            $(".left-img3").css({backgroundPosition: "  1px -296px"})
        }

        if($(this).parent().index()==4){
            $(".left-img4").css({backgroundPosition: "-119px -397px"})
        }else{
            $(".left-img4").css({backgroundPosition: "  1px -397px"})
        }
    })
//    top
    $(".scrolltop").click(function () {
       $('html,body').animate({scrollTop:0},500)

    })

})