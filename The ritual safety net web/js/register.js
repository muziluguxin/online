$(function () {
    $(".top-list-img2").click(function(){
        $(".top-list-img1").toggle(500)
    })
    //top右边的下拉表
    $(".top-package").click(function () {
        $(".top-package .top-list-contentda").fadeToggle(500)
    })
    //获取邮箱
    $(".user").blur(function(){

        var user=document.querySelector(".user");
        var userval=user.value;
        var tex=/^1[3-8]\d{9}$/g;
        var res=tex.test(userval)
        var  tex1= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
        var  res1=tex1.test(userval)
        if(res==true||res1==true){
            document.querySelector(".userla").innerHTML="*验证通过";
            document.querySelector(".userla").style.color="green";
        }else{document.querySelector(".userla").innerHTML="*请输入正确的邮箱或手机号码";
            document.querySelector(".userla").style.color="red"
            user.value="";}

    })
    //获取密码
    $(".password").blur(function(){
        var passw=document.querySelector(".password");
        var passwval=passw.value;
        var texp=/^\w{6,16}$/g;;
        var  resp=texp.test(passwval)


    })
    //再次获取密码
    $(".passwords").blur(function(){
        var passw=document.querySelector(".password");
        var passwval=passw.value;
        var texp=/^\w{6,16}$/g;;
        var  resp=texp.test(passwval)

        var passs=document.querySelector(".passwords");
        var passsv=passs.value;
        var texs=/^\w{6,16}$/g;;
        var  ress=texs.test(passsv)
        //console.log(c1)
        if(passwval!=passsv){document.querySelector(".passwordla").innerHTML="*输入的密码和上面的密码不一致，请核对之后再输入";
            document.querySelector(".passwordla").style.color="red";
            passsv.value="";}else{
            document.querySelector(".passwordla").innerHTML="*验证通过";
            document.querySelector(".passwordla").style.color="green";
        }
    })
    //登录

    $(".input-lo").click(function(){
        //获取邮箱
        var user=document.querySelector(".user");
        var userval=user.value;
        var tex=/^1[3-8]\d{9}$/g;
        var res=tex.test(userval)
        var  tex1= /^\w{3,20}@[a-z]{2,4}.(com|cn)$/g;
        var  res1=tex1.test(userval)

        //获取密码
        var passw=document.querySelector(".password");
        var passwval=passw.value;
        var texp=/^\w{6,16}$/g;;
        var  resp=texp.test(passwval)
        //再次获取密码
        var passs=document.querySelector(".passwords");
        var passsv=passs.value;
        var texs=/^\w{6,16}$/g;;
        var  ress=texs.test(passsv)
        //选择同意本条款
        var check=document.querySelector(".checkbox").checked
        // console.log(check)
        if((res==true||res1==true)&&resp==true&&ress==true&&check==true){
             window.location.href="../html/login.html";
            $.cookie("user",userval,{expires:31})
            $.cookie("password",passwval,{expires:31})
        }else if((res==true||res1==true)&&resp==true&&ress==true&&check==false){
            document.querySelector(".passwordlas").innerHTML="*请确定是否勾选注册协议";
            document.querySelector(".passwordlas").style.color="red";
        }
        else{
            document.querySelector(".passwordlas").innerHTML="*请确认是否输入有错";
            document.querySelector(".passwordlas").style.color="red"
        }
    })
})