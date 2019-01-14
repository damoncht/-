window.onload=function(){
	//设置放大镜
	let oBox4Text1=document.querySelector(".box4_item1_text1");
	let oMence=document.querySelector(".mence");
	var oMark = document.querySelector(".mark");
	let oBox4Text2=document.querySelector(".box4_item1_text2");
	// let oImg=document.querySelector(".imga");
	var imgBig = document.querySelector(".box4_item1_text2 img")
	oMence.onmouseover = function(){
		oMark.style.display = "block";
		oBox4Text2.style.display="block";
	}
	oMence.onmouseout = function(){
		oMark.style.display = "none";
		oBox4Text2.style.display="none";
	}
	oBox4Text1.onmousemove=function(event){
		var evt = event || window.event;
		var Mx = evt.offsetX - oMark.offsetWidth / 2;
		var My = evt.offsetY - oMark.offsetHeight / 2;
	
		if(Mx < 0){
			Mx = 0;
		}else if( Mx > oBox4Text1.offsetWidth - oMark.offsetWidth ){
			Mx = oBox4Text1.offsetWidth - oMark.offsetWidth;
		}

		//判断y坐标上下边界
		if( My < 0 ){
			// My =oBox4Text1.offsetHeight-oMark;
			My = 0
		}else if( My > oBox4Text1.offsetHeight- oMark.offsetHeight){
			My = oBox4Text1.offsetHeight - oMark.offsetHeight;
		}
		oMark.style.top = My + "px";
		oMark.style.left = Mx + "px";
			//求移动距离比例
		var bilix = Mx / (oBox4Text1.offsetWidth - oMark.offsetWidth);
		var biliy = My / (oBox4Text1.offsetHeight - oMark.offsetHeight);

		//根据比例计算右边大图的移动距离
		var bigx = -bilix * (imgBig.offsetWidth - oBox4Text2.offsetWidth )+ "px";
		var bigy = -biliy * (imgBig.offsetHeight - oBox4Text2.offsetHeight )+ "px";

			console.log(bigy,bigx)
		//设置大图的位置
		imgBig.style.left = bigx;
		imgBig.style.top = bigy;
	}
}