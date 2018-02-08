<!--小屏时切换myTabDrop1的内容-->
$(function () {
    $(".dropdown-menu li a").click(function () {
        var val=$(this).html()
        $("#myTabDrop1").html(val)
        $(".lr-top-content").html(val)

    })
    $(".newfont h3").click(function () {
        var val=$(this).html()
        $("#myTabDrop1").html(val)
        $(".lr-top-content").html(val)

    })
// 左侧tabde的样式变化
    $(".tabchange li a").hover(function () {
        $(this).css({backgroundColor:"white"})

    })
    $(".tabchange li a").click(function () {
        $(this).find(".newfont").css({color:"#38b774"})
        $(this).parent().siblings().find(".newfont").css({color:"#555"})
        $(this).find(".arrows").css({display:"block"})
        $(this).parent().siblings().find(".arrows").css({display:"none"})
    })
//    top
    $(".scrolltop").click(function () {
        $('html,body').animate({scrollTop:0},500)

    })
})