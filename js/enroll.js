window.onload=function(){
	var oInp=document.querySelectorAll("input");
	// console.log(oInp);
	var oBut=document.querySelector("button");
	var oSpan=document.querySelectorAll(".box2_item1_left_ul span");
	// console.log(oSpan);
	var Pass=/^[1-9]\w{6,16}$/;
	var User=/^[a-zA-Z_]{4,20}$/;
	var str="";

	oInp[0].onclick=function(){
		oSpan[0].innerHTML="输入有效的手机号码"
	}
	oInp[0].onfocus=function(){
		oSpan[0].style.display="block";
	}
	oInp[0].onblur=function(){
		oSpan[0].innerHTML="请输入手机号码";
		oSpan[0].style.background=" #eb5e00";
		oInp[0].onclick=function(){
		oSpan[0].innerHTML="输入有效的手机号码"
		oSpan[0].style.background=" #dedede";
		}
	}
	oInp[1].onclick=function(){
		oSpan[1].innerHTML="输入有效的验证码"
	}
	oInp[1].onfocus=function(){
		oSpan[1].style.display="block";
	}
	oInp[1].onblur=function(){
		oSpan[1].innerHTML="请输入验证码";
		oSpan[1].style.background=" #eb5e00";
		oInp[1].onclick=function(){
		oSpan[1].innerHTML="输入有效的验证码"
		oSpan[1].style.background=" #dedede";
		}
	}

	oInp[2].onclick=function(){
		oSpan[2].innerHTML="输入有效的验证码"
	}
	oInp[2].onfocus=function(){
		oSpan[2].style.display="block";
	}
	oInp[2].onblur=function(){
		oSpan[2].innerHTML="请输入验证码";
		oSpan[2].style.background=" #eb5e00";
		oInp[2].onclick=function(){
		oSpan[2].innerHTML="输入有效的验证码"
		oSpan[2].style.background=" #dedede";
		}
	}

	oInp[4].onclick=function(){
		oSpan[3].innerHTML="6~16个字符，请使用英文字母(区分大小写)、符号或数字"
	}
		oInp[4].onfocus=function(){
		oSpan[3].style.display="block";
	}
	oInp[4].onblur=function(){
		oSpan[3].innerHTML="请输入密码";
		oSpan[3].style.background=" #eb5e00";
		oInp[4].onclick=function(){
		oSpan[3].innerHTML="6~16个字符，请使用英文字母(区分大小写)、符号或数字"
		oSpan[3].style.background=" #dedede";
		}
	}

	oInp[5].onclick=function(){
		oSpan[4].innerHTML="确认您 上面输入的密码"
	}
	oInp[5].onfocus=function(){
		oSpan[4].style.display="block";
	}
	oInp[5].onblur=function(){
		oSpan[4].innerHTML="请输入确认密码";
		oSpan[4].style.background=" #eb5e00";
		oInp[5].onclick=function(){
		oSpan[4].innerHTML="确认您上面输入的密码"
		oSpan[4].style.background=" #dedede";
		}
	}
	oInp[6].onclick=function(){
		oSpan[5].innerHTML="4~20个字符，可使用英文、下划线。注册后用户名不能修改"
	}
	oInp[6].onfocus=function(){
		oSpan[5].style.display="block";
	}
	oInp[6].onblur=function(){
		oSpan[5].innerHTML="请输入用户名";
		oSpan[5].style.background=" #eb5e00";
		oInp[6].onclick=function(){
		oSpan[5].innerHTML="4~20个字符，可使用英文、下划线。注册后用户名不能修改"
		oSpan[5].style.background=" #dedede";
		}
	}

		// function item(k,r){
		// 	str=oInp[k].value;
		// 	if(r.test(str)){
		// 		oSpan[k].style.color="green";
		// 		oSpan[k].innerHTML="输入合法！";
		// 	}
		// 	else{
		// 		oSpan[k].style.color="red";
		// 		oSpan[k].innerHTML="输入不合法！";
		// 		oInp[k].value="";
		// 	}
		// }
		// oInp[0].onblur=function(){
		// 	oSpan[0].innerHTML="";
		// 	oInp[0].onclick=function(){
		// 	oSpan[0].innerHTML="*必须是8-12位的以英文开头，数字和下划线组成!"
		// 	oSpan[0].style.color="red";
		// 	}
		// }
}