window.onload=function(){
	var b6Sp1=document.querySelector(".b6sp1");
	var b6Sp2=document.querySelector(".b6sp2");
	var b6Ul=document.querySelectorAll(".box6_item2_img li");
	var index=0;
	for(let i=0;i<b6Ul.length;i++){
		b6Sp1.onclick=function(){
			index++;
			changeImg(index);
			
		}
	}
	function changeImg(currentIndex){
		index=currentIndex;
		if(index>=b6Ul.length){
			index=0;
		}
		if(index<0){
			index=b6Ul.length-1;
		}
	}
}