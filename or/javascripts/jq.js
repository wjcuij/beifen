$(function(){
	setInterval(function(){
	// var $loops_ulf = $('#loops_news_ul li:first');
	// var $loops_ull = $('#loops_news_ul li:last');
	// console.log($loops_ulf)
	// console.log($loops_ull)
	// var $loops_ul_top = $loops_ul.position();

	

	$('#loops_news_ul').animate({top:'-44px'},2000).delay(2000).animate({top:'-88px'},2000).delay(2000).animate({top:'-44px'},2000).delay(2000).animate({top:'0px'},2000);
	$('#recruit');
	},1000);
/*==========按钮轮播===============*/
	$('.women button:eq(0)').click(function(){
				$('.team_ul ul').animate({left:'-25.4%'},800);
			});
	$('.women button:eq(1)').click(function(){
				$('.team_ul ul').animate({left:'0px'},800);
	});
/*p标签*/
	// $("#team .women button").click(function(){
	//   $("p").slideDown();
	// });
	$('#shop_main_nav ul li').click(function(){
		$(this).css('background','-webkit-linear-gradient(top,#fff 5%,#DBDBDB 70%,#fff)').css('border','1px solid #ccc').siblings().css('background','none').css('border','0');
	})
/*==========加入我们===============*/
	


	// $('#dong').mouseenter(function(){
	// 	window.location.reload(false);
	// })/*为了动画*/
/*========================滚动滑动条=======================*/

$(window).scroll( function() { 
				if(document.body.scrollTop >=300){
					// alert(2)
					$('#wx_right a .wx_right_div').animate({ 
    marginLeft:'0px',
    marginTop:'0px',
    marginRight:'0px',
    marginBottom:'0px'
  },1000 );

				}
			 });

/*=========================放大镜===============================*/
	
	$('#a').mousemove(function(e){
		var ev = e || window.event;
		var a = $('#a');
		// console.log(a.css('width'))

		var aLeft = a.offset();

		$('#flag').css('display','block');
		$('#deta_main_tu2').css('display','block');
		// $('#flag').style.left = ()
		// 
		var flag = $('#flag');
		var leftDiv = $('#deta_main_tu_blowup')[0];
		// var rightDiv = $('#deta_main_tu');

		var aW =  parseInt(flag.css('width'));
		var aH = parseInt(flag.css('height'));
		
		var zuo = ev.offsetX-aW/2;
		var you = ev.offsetY-aH/2;
		flag.css('left',zuo);
		flag.css('top',you);

		parseInt(flag.css('left')) >(leftDiv.offsetWidth-flag[0].offsetWidth) ? flag.css('left',leftDiv.offsetWidth-flag[0].offsetWidth) : flag.css('left',flag.css('left'));
		 // console.log(leftDiv.offsetWidth-flag[0].offsetWidth);

		parseInt(flag.css('left')) < 0 ? flag.css('left',0+'px') : flag.css('left',flag.css('left'));
		parseInt(flag.css('top')) < 0 ? flag.css('top',0+'px') : flag.css('top',flag.css('top'));

		parseInt(flag.css('top')) >(leftDiv.offsetHeight-flag[0].offsetHeight) ? flag.css('top',leftDiv.offsetHeight-flag[0].offsetHeight) : flag.css('top',flag.css('top'));
		// console.log()

		$('#bigImg').css('left',-2.75*parseInt(flag.css('left')) + 'px').css('top',-2.75*parseInt(flag.css('top')) + 'px');
			// oImg.style.top = -2*parseInt(flagDiv.style.top) + 'px';
	}).mouseout(function(){
		$('#flag').css('display','none');
		$('#deta_main_tu2').css('display','none');
	})
	

/*=========================换镜面================================*/
	$('#deta_main_blowup_three ul li img').each(function(i){

		$('#deta_main_blowup_three ul li img:eq('+i+')').mouseover(function(){

		var thisImg = this.src;

		$('#deta_main_tu_blowup').css('background-image','url('+thisImg+')');
		$('#deta_main_tu2 img').attr('src',thisImg)
	})

	})
/*================增加购买================*/
	var ul3_li1 = $('.deta_main_elect_ul3 li:eq(0)');
	var ul3_li2 = $('.deta_main_elect_ul3 li:eq(1)');
	var ul3_li3 = $('.deta_main_elect_ul3 li:eq(2)');
	$(ul3_li3).click(function(){
		var zhi = $(ul3_li2).text();
		if (zhi >= 1) {
			zhi++;
			$(ul3_li2).text(zhi);
		}

	})
	$(ul3_li1).click(function(){
		var zhi = $(ul3_li2).text();
		if (zhi > 1) {
			zhi--;
			$(ul3_li2).text(zhi)
		}
		
	})



})	


