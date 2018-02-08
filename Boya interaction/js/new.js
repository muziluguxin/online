$(function () {
    //    top
    $(".scrolltop").click(function () {
        $('html,body').animate({scrollTop:0},500)

    })
    //切换分页时返回顶部
    $(".bq .tabchange li a").click(function () {
        $('html,body').animate({scrollTop:0},10)
    })
})