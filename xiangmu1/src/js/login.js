	require(['config'],function(){
	require(['jquery'],function($){
		$(function(){
      //页面加载
      $('#header').load('../html/header_login.html header',function(){
        $('#register1').click(function(){
        $('.login_d').hide(200).next('.reg_d').show(200);
        $('.logo2').text('欢迎注册');
      });
        $('#register2').click(function(){
        $('.reg_d').hide(200).prev('.login_d').show(200);
        $('.logo2').text('欢迎登录');
      });
      });
      $('#footer').load('../html/header_login.html footer');
      //登录
      $('#btn1').click(function(){
         if($("#username").val()==""){   
            alert("请输入账号");               
            return false;   
        }
      var $use = $("#username").val();
      if(!/^\w{4,}$/.test($use)){
      alert('请输入正确的邮箱、手机号、账号');
      return false;
    }
        if($("#password").val()==""){   
            alert("请输入密码");               
            return false;   
        }
        var $psw = $("#password").val();
      if(!/^[a-z0-9_~!#\.]$/.test($psw)){
      alert('请输入正确的密码');
      return false;
    }
        $.post('../php1/php/login.php',{
          username: $('#username').val(),
          password: $('#password').val()
        }, function(response){
          var $obj = eval('(' + response + ')');
          if($obj.state){
            window.location.href = '../php1/php/index.php';
          } else {
            alert($obj.message);
          }
        });        
      });
      //注册
      $('#submit').click(function(){
        if($("#email").val()==""){   
            alert("请输入你的邮箱");               
            return false;   
        }
        var $em = $("#email").val();
        if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($em)){
      alert('请输入正确的邮箱');
      return false;
    }
    if($("#usernam").val()==""){   
            alert("请输入账号");               
            return false;   
        }
      var $use = $("#usernam").val();
      if(!/^\w{4,}$/.test($use)){
      alert('请输入正确账号');
      return false;
    }
        if($("#psw").val()==""){   
            alert("请输入密码");               
            return false;   
        }
        var $psw = $("#psw").val();
      if(!/^[a-z0-9_~!#\.]$/.test($psw)){
      alert('请输入正确的密码');
      return false;
    }
    var $psd = $('#repassword').val();
    if($psd!==$psw){
      alert('两次输入的密码不相同，请重新输入核对')
    }
    if($("#phone").val()==""){   
            alert("请输入手机号");               
            return false;   
        }
        var $phone = $("#phone").val();
      if(!/^\d{11}$/.test($phone)){
      alert('请输入正确的手机号');
      return false;
    }


        $.post('../php1/php/register.php',{
          email: $('#email').val(),
          username: $('#usernam').val(),
          password: $('#psw').val(),
          phone: $('#phone').val()
        }, function(response){
          var $obj = eval('(' + response + ')');
          if($obj.state){
            alert('注册成功！');
          } else {
            alert($obj.message);
          }
        });        
      });


      








    });
});
	});