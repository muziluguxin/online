$(function () {
    $(".top-list-img2").click(function(){
        $(".top-list-img1").toggle(500)
    })
    //top右边的下拉表
    $(".top-package").click(function () {
        $(".top-package .top-list-contentda").fadeToggle(500)
    })
    //获取邮箱
    $(".inputuser").blur(function(){

        var input=document.querySelector(".inputuser");
        var val=input.value;
        var tex=/^1[3-8]\d{9}$/g;
        var res=tex.test(val)
        var  texq= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
        var  res1=texq.test(val)

    })
    //获取密码
    $(".inputpass").blur(function(){
        var inputp=document.querySelector(".inputpass");
        var valp=inputp.value;
        var texp=/^\w{6,16}$/g;;
        var  resp=texp.test(valp)
         //console.log(valp)

    })
    //登录
    $(".input-lo").click(function(){
        //获取邮箱
        var input=document.querySelector(".inputuser");
        var user=input.value;
        var tex=/^1[3-8]\d{9}$/g;
        var res=tex.test(user)
        var  texq= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
        var  res1=texq.test(user)

        //获取密码
        var inputp=document.querySelector(".inputpass");
        var password=inputp.value;
        var texp=/^\w{6,16}$/g;
        var  resp=texp.test(password)

        //获取是否保存密码
        var a2=document.querySelector(".input-chooseci");
        var b2=a2.checked;
        //console.log(b2)


        if((res==true||res1==true)&&resp==true&&b2==true&&user&&password){
            window.location.href="../index.html";
            if($.cookie("user")==user&&$.cookie("password")==password){
                alert("密码将保存30天")
                $.cookie("user",user,{expires:30})
                $.cookie("password",password,{expires:30})
            }else {
                alert("请核对您的信息")
            }

        }else if((res==true||res1==true)&&resp==true&&b2==false&&user&&user){
            window.location.href="../index.html";

            if($.cookie("user")==user&&$.cookie("password")==password){
                alert("欢迎登陆")
            }else {
                alert("请核对您的信息")
            }
        }else {
            document.querySelector(".inputpass-laber").innerHTML="*请核对信息";
            document.querySelector(".inputpass-laber").style.color="red";
            input.value="";
            inputp.value="";
        }
        //}

    })

})
