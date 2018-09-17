    //获取验证码
	$(".btn-getverifycode").click(function(){
	    var name = $(".name").val()//姓名
		var phone = $(".phone").val();//手机号
		var verifycode =$(".verifycode").val();//验证码
		//验证手机号码
		formatPhone(phone);
		//其他操作
	    alert('获取验证码:' + verifycode + name +verifycode);
   
	});
	
    //提交预约信息
	$(".btn-appointment").click(function(){
	  alert('提交预约信息');
	  $(".tip-appointment").fadeOut(500);
	  $(".tip-share").fadeIn(500);
	});

    //分享
	$(".btn-share").click(function(){
	  alert('分享到朋友圈');
	});
	

	function formatPhone(phone){
		if(phone == ""){
			alert("请输入手机号码！");
			return false;
		}else{
			if(!/^1[34578]\d{9}$/.test(phone)){
				alert("请输入正确的手机号码！");
				return false;
			}
		}
		return true;
	}	