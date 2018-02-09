$(function(){
    $(".top-list-img2").click(function(){
        $(".top-list-img1").toggle(500)
    })
    //top右边的下拉表
    $(".top-package").click(function () {
        $(".top-package .top-list-contentda").fadeToggle(500)
    })
// 图片切换
    $(".middle-top-sq span").click(function () {
        var index=$(this).index()

        $(".middle-top-img li").eq(index).addClass("imgblock").siblings().removeClass("imgblock")
    })
//    选择样式
$(".middle-change-color p a").click(function () {
    $(this).css({color:"red",border:"1px solid red"}).siblings().css({color:"#333",border:"1px solid #ccc"})
})
//版权上方的tab切换效果
    $(".middle-lastsq span").click(function () {
        var index=$(this).index()
        $(".middle-lastphoto ul").eq(index).addClass("imgblock").siblings().removeClass("imgblock")

    })
})