window.onload = function(){
var speed = 0;
		var left = 0;
		function move (obj,target) { 

			clearInterval(obj.timer);//²»ÇåµÄ»°»áÒ»Ö±×ß

			obj.timer = setInterval(function(){ 
				
				speed += (target-obj.offsetLeft)/4;//µÚÒ»´Î30ºÁÃë¾ÍÊÇ102/4
				// alert(speed)
				speed*=0.7;//25.5
				left+=speed;//0+25.5
				// console.log(left);
				if(Math.abs(speed)<1 && Math.abs(left-target)<1){ //Èç¹ûspeed½éÓÚÐ¡ÓÚ1ºÍ±»¼õÊýÐ¡ÓÚ1¾ÍÇå³ý²¢ÇÒÖÆÔì¼ÙÏóµ½Ä¿±êÖµ
					clearInterval(obj.timer);
					obj.style.left = target+'px';
					// console.log(obj.offsetLeft+"---"+target+'---'+speed);
				}else{ //Èç¹û²»ÊÇµÄ»°¾Í¼ÌÐø¼Ó
					obj.style.left = left + 'px';
				}
			},30);

		}
		//»ñÈ¡¶ÔÏó
		var oUl = document.getElementById('list');
		var oLi = oUl.getElementsByTagName('li');
		var oFlag = oLi[oLi.length-1];

		for(var i=0;i<oLi.length-1;i++){ 
			oLi[i].onmouseover = function(){ 
				move(oFlag,this.offsetLeft);//ÓÃliµÄÆ«ÒÆÁ¿À´×öÄ¿±êÖµ
			}
		}

/*======================ÂÖ²¥¿ªÊ¼======================*/
	var loops_one = document.getElementById('loops_one');
	var loops_two = document.getElementById('loops_two');
	var oneLi = loops_one.getElementsByTagName('li');
	var xian = document.getElementById('#loops_xian');
	var twoLi = loops_two.getElementsByTagName('li');

	var timer = setInterval(fun,2000);

	var a = 0;
	var num = 0;
	

	for(var i = 0;i<oneLi.length;i++){
		oneLi[i].onmouseover = function(){
			num = this.value;
			// console.log(num);
			clearInterval(timer);

			for(var j = 0;j< oneLi.length;j++){
				oneLi[j].style.backgroundColor = '#fff';
			}
			this.style.backgroundColor = '#F0792A';
			for(var k=0;k<twoLi.length;k++){
				k == num ? twoLi[num].style.display = 'block' : twoLi[k].style.display = 'none';
			}
		}
		oneLi[i].onmouseout = function(){
			a = num;
			timer = null;
			timer = setInterval(fun,1000);
		}
	}

	function fun(){

		for(var i =0;i<oneLi.length;i++){
			oneLi[i].style.backgroundColor = '#fff';
		}
		for(var j=0;j<twoLi.length;j++){
			if(j==a){
				twoLi[a].style.display = 'block';
			}else{
				twoLi[j].style.display = 'none';
			}
		}
		oneLi[a].style.backgroundColor = '#F0792A';
		a++;

		if(a % oneLi.length ==0){
			a = 0;
		}
		// console.log(a);
	}

/*=========================»ð¼ý================================*/
$("html,body").ready(function(){
	var scrollbar=$(window).scrollTop();
	var isClick=0;

	(scrollbar<=0)?($("#shape").hide()):($("#shape").show());

	$(window).scroll(function(){
		scrollbar=$(window).scrollTop();
		(scrollbar<=0)?($("#shape").hide()):($("#shape").show());			
	})

	$("#shape").hover(
		function(){
			$(".shapeColor").show();
		},

		function(){
			$(".shapeColor").hide();
		}
	)

	$(".shapeColor").click(
		function(){
			$(".shapeFly").show();
			$("html,body").animate({scrollTop: 0},"slow");
			$("#shape").delay("200").animate({marginTop:"-1000px"},"slow",function(){
				$("#shape").css("margin-top","-125px");
				$(".shapeFly").hide();
			});
			
	})

})

}


