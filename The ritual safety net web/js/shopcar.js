$(function () {
    $(".top-list-img2").click(function(){
        $(".top-list-img1").toggle(500)
    })
    //top右边的下拉表
    $(".top-package").click(function () {
        $(".top-package .top-list-contentda").fadeToggle(500)
    })
    //增减商品的数量
    $(".add").click(function(){
        var value=Number($(".mvalue").val());
        console.log(value)
        value+=1;
        $(".mvalue").val(value);
        var pri=199*value;
        $(".middle-pri").html(pri+".0");
        // $(".minddlecaimu322 .pri").html(pri+".0")


    })
    $(".subtract").click(function(){
        var value=Number($(".mvalue").val());
        //console.log(typeof(value))
        value-=1
        if(value>=0){
            $(".mvalue").val(value);
            $(".mvalue").val(value);
            var pri=199*value;
            $(".middle-pri").html(pri+".0");
            // $(".minddlecaimu322 .pri").html(pri+".0")
        }

    })
    //删除
    $(".middle-img").click(function(){

        $(".middle table").css({display: "none"})
        $(".middle").html("购物车空空如也")
        $(".middle").css({textAlign:"center",lineHeight:"300px"})
    })
})