$(function(){

	
/*===========无缝滑动===============*/
	var oDakuan = document.getElementById('guess_dakuan');
	var oDl = oDakuan.getElementsByTagName('dl');
	var speed = -1;
	var timer = null;
	// alert(oDl[0].offsetWidth)
	oDakuan.innerHTML+=oDakuan.innerHTML;
	oDakuan.style.width = oDl.length*oDl[0].offsetWidth+'px';

	timer = setInterval(run,20);

	function run(){

		if(oDakuan.offsetLeft<-oDakuan.offsetWidth/2){
			oDakuan.style.left = 0;
		}else if(oDakuan.offsetLeft>0){
			oDakuan.style.left = -oDakuan.offsetWidth/2+'px';
		}
		oDakuan.style.left = oDakuan.offsetLeft+speed+'px'
	}
	oDakuan.onmouseover = function(){
		clearInterval(timer);
	}

	oDakuan.onmouseout = function(){
		timer = setInterval(run,20);
	}

/*========================说明=======================*/
	var tu_img = $('#deta_main_explain_tu_2 img').attr('src');
	$('#deta_main_explain li:eq(1)').click(function(){
		$(this).css('background','#f0792a').css('border-bottom','1px solid #f0792a');
		var tu2 = './images/mall.lelelda.com_service_report.png'
		$('#deta_main_explain_tu_2 img').attr('src',tu2);

		$('#deta_main_explain li:eq(0)').css('background','#fff').css('border-bottom','#fff');
	})
	$('#deta_main_explain li:eq(0)').click(function(){
		$(this).css('background','#f0792a').css('border-bottom','1px solid #f0792a');
		$('#deta_main_explain_tu_2 img').attr('src',tu_img);
		$('#deta_main_explain li:eq(1)').css('background','#fff').css('border-bottom','#fff');
	})
	
});


/*=========================弹性=============================*/

			// var speedX = 10;//x轴运动速度

		

			// setInterval(function(){ 
			// 	//起初会跑是因为偏移量加speed的原因
			// 	var oDiv = document.getElementsByClassName('xindong');
			// 	// var oDiv2 = document.getElementsByClassName('xindong_da');
				
			// 	//进行边界碰撞检测 

			// 	for(var i =0;i<8;i++){
			// 		var left = document.getElementsByClassName('xindong')[i].offsetLeft+speedX;
			// 		alert(left)
			// 		if(left>=document.getElementsByClassName('xindong_da')[i].clientWidth-document.getElementsByClassName('xindong')[i].offsetWidth){ //判断右边界
			// 		speedX*=-1;
			// 		left=document.getElementsByClassName('xindong_da')[i].clientWidth-document.getElementsByClassName('xindong')[i].offsetWidth;
			// 	}else if(left<=0){ 	//判断左边界
			// 		speedX*=-1;//负负得正
			// 		left=0;//为了保证是到了边界0
			// 	}
			// 	document.getElementsByClassName('xindong')[i].style.left = left+'px';
			
			// 	}			
					

			// 	//4.现在的顶边距离为304px;回到上面

			// },30);
		
