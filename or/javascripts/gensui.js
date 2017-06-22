/*=================跟随滚动===========================*/

window.onscroll = function(){ 

			var gensui = document.getElementById('gensui');

			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

			

			var target = scrollTop + (document.documentElement.clientHeight-gensui.offsetHeight)/2;//注意这是指滚动条的高度不要带px
			// console.log(target)

			move(target);
			//消除由于浏览器差异问题出现的高度不为整数的问题(消除火狐抖动)
			move(parseInt(target));
			
			// var aaa = parseInt(-12.4);
			// alert(aaa)
			//取整:-12.4等于12

		}

		var timer = null;

		function move (target) { 

			var gensui = document.getElementById('gensui');

			//先清除定时器
			clearInterval(timer);

			timer = setInterval(function(){ 

				//设置速度
				var speed = (target - gensui.offsetTop)/5;
				//滚动高度减去div的相对高度,除于8决定它的速度

				//判断运动的方向
				speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

				//判断是否已经到达终点 
				if(gensui.offsetTop == target){ 
					clearInterval(timer);
				}else{ 
					gensui.style.top = gensui.offsetTop+speed+'px';
				}

				//调试输出 
				// console.log('offsetTop:'+div.offsetTop+',target:'+target);

			},30);


/*======================购物车======================*/
	
	document.getElementById('dianji').onclick = function(){
	
		document.getElementById('cart-page').style.display = 'block';
	}

	document.getElementById('cart-page').onclick = function(){
		this.style.display = 'none';
	}

	document.getElementsByClassName('cart-main')[0].onclick = function(e){ 
				//取消冒泡(点击事件)
				e.stopPropagation();
		}

	
}