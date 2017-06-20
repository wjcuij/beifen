
$(function(){
	// $(window).scroll(function(){
	// 		var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
	// 		console.log(scrollTop)
	// 	})
	var i = 0;
	var move = function(){
		i<2 ? i++ : i=0;
		$('#lunbo>div').eq(i).fadeIn(1000).siblings('div').fadeOut(500);
		$('#lunbo>section span').eq(i).css({'box-shadow':'0 0 6px rgba(220,220,220,1)','transform': 'scale(1.3,1.3)'}).siblings('span').css({'box-shadow':'0 0 0 ','transform': 'scale(1,1)'});
	}
	var timer1 = setInterval(function(){
		move();
	},4000);
	$('#product #detail').click(function(){
		location.href = './list.html';
	});
	$('#product>div>ul>li').click(function(){
		location.href = './detail.html';
	})
	$('.transition1').delay(100).animate({opacity:'1'},800);
	$('#lunbo').animate({opacity:'1'},800);
	$('#lunbo').mouseenter(function(){
		clearInterval(timer1);
	});
	$('#lunbo').mouseleave(function(){
		timer1 = setInterval(function(){
			move();
		},4000);
	});
	$('header').slideDown(800,function(){
		$('header #join').delay(100).animate({marginRight:0},500,function(){
			$('header ul').delay(100).animate({marginTop:0},500,function(){
				$('header section>div:first-child').css({opacity:1,transform:'scale(1,1)'});
			});
		});
	});

	$('#lunbo>section span').click(function(){
		i = $(this).index();
		$('#lunbo>div').eq(i).fadeIn(1000).siblings('div').fadeOut(500);
		$('#lunbo>section span').eq(i).css({'box-shadow':'0 0 6px rgba(220,220,220,1)','transform': 'scale(1.3,1.3)'}).siblings('span').css({'box-shadow':'0 0 0 ','transform': 'scale(1,1)'});
	});

	$('#honor ul li').eq(0).slideDown(500,function(){
		$('#honor ul li').eq(0).delay(100).animate({opacity:'1'},700);
	});
	setInterval(function(){
		document.querySelector('#honor ul').insertBefore(document.querySelector('#honor ul li:last-child'),document.querySelector('#honor ul li:first-child'));
		$('#honor ul li').eq(0).slideDown(500,function(){
			$('#honor ul li').eq(0).delay(100).animate({opacity:'1'},700);
		});
		$('#honor ul li:last-child').css({display:'none',opacity:'0'});
	},5000);

	var header = function(i){
		$('header ul li').css({backgroundColor:'transparent'}).find('a').css({color:'#202425',textShadow:'none'});
		$('header ul li:nth-child('+i+')').css({backgroundColor:'#019EE4'}).find('a').css({color:'#ddd',textShadow:'2px 2px 3px #333'});
	}
	$('header section li:nth-child(1)').click(function(){
		$('body').stop(true);
		$('body').scrollTo(516,800);
	})
	$('header section li:nth-child(2)').click(function(){
		$('body').stop(true);
		$('body').scrollTo(1407,800);
	})
	$('header section li:nth-child(3)').click(function(){
		$('body').stop(true);
		$('body').scrollTo(2352,800);
	})
	$('header section li:nth-child(4)').click(function(){
		$('body').stop(true);
		$('body').scrollTo(3204,800);
	})
	$('header section li:nth-child(5)').click(function(){
		$('body').stop(true);
		$('body').animate({scrollTop:'3609'},500);
		$('body').scrollTo(3609,800);
	})
	$(window).scroll(function(){
		if(document.body.scrollTop > 50){
			$('header').css({backgroundColor:'rgba(220,220,220,.9)'});
			$('header span').css({color:'#202425'});
			$('header ul li').css({backgroundColor:'transparent'});
			$('header a').css({color:'#202425',textShadow:'none'});
		}else if(document.body.scrollTop <= 160){
			$('header').css({backgroundColor:'rgba(80,80,80,.3)'});
			$('header span').css({color:'#ddd'});
			$('header a').css({color:'#ddd'});
		};
		if(document.body.scrollTop > 160 && document.body.scrollTop < 800){
			header(1);
		}else if(document.body.scrollTop >= 800 &&document.body.scrollTop < 1800){
			header(2);
		}else if(document.body.scrollTop >= 1800 &&document.body.scrollTop < 2700){
			header(3);
		}else if(document.body.scrollTop >= 2700 &&document.body.scrollTop < 3400){
			header(4);
		}else if(document.body.scrollTop >= 3400){
			header(5);
		}
		if(document.body.scrollTop < 430){
			$('.transition1').delay(100).animate({opacity:'1'},800);
			$('#lunbo').animate({opacity:'1'},800);
		}
		if(document.body.scrollTop > 50 && document.body.scrollTop < 1050){
			$('#intro h2').animate({top:'0'},700,function(){
				$('#intro article:nth-child(2)').delay(100).animate({left:0},700);
				$('#intro article:nth-child(3)').delay(100).animate({bottom:0},700);
				$('#intro article:nth-child(4)').delay(100).animate({right:0},700,function(){
					$('#intro>p').delay(100).animate({opacity:1},700);
					$('.transition2').delay(150).animate({opacity:1},700)
				});
			});
		}
		if(document.body.scrollTop > 585 && document.body.scrollTop < 1900){
			$('#product,.transition4').animate({opacity:1},700,function(){
				$('#product>div').css({transform:'rotateY(0deg)'});
				$('#product h2').delay(800).animate({top:0},700,function(){
					$('#product>div>ul>li:nth-child(3),#product>div>ul>li:nth-child(5)').delay(100).animate({left:0},1000);
					$('#product>div>ul>li:nth-child(4)').delay(100).animate({right:0},1000,function(){
						$('#product>div>ul>div:nth-child(1),#product>div>ul>div:nth-child(2),#product #detail').css({opacity:1});
					});
				})
			})
		}
		if(document.body.scrollTop > 1556 && document.body.scrollTop < 2820){
			$('#news h2').css({transform:'scale(1,1)'});
			$('#news h2').animate({opacity:1},800,function(){
				$('#news li').css({transform:'rotate(0deg)',opacity:1});
				$('.transition3').animate({opacity:1},800);
			})
		}
		if(document.body.scrollTop > 2500 && document.body.scrollTop < 3500){
			$('#honor').css({opacity:'1'})
			$('.transition5').animate({opacity:'1'},800,function(){
				$('#honor div').delay(100).animate({top:0},800,function(){
					$('#honor ul').css({transform:'skew(0,0)'});
				})
			})
		}
		if(document.body.scrollTop>3044){
			$('#contact').animate({opacity:'1'},800,function(){
				$('#contact>div').delay(200).slideDown(800,function(){
					$('#contact>div').css({transform: 'rotateY(0deg)'});
					$('#contact>div').delay(200).animate({opacity:'1'},800,function(){
						$('#contact table').delay(200).slideDown(500,function(){
							$('footer').show(800);
						})
					});
				})
			});
		}
	});

	function productMove2(elem,i,j,k){
		i += 15*k;
		setTimeout(function(){
			$(elem).css({transform:'rotateY(' + i + 'deg)'});
			if(i==91*k){
				var html1 = $('#product>div>ul>li:nth-child('+j+')').html();
				var html2 = $('#product>div>ul>li:nth-child('+(j+3)+')').html();
				$('#product>div>ul>li:nth-child('+j+')').html(html2);
				$('#product>div>ul>li:nth-child('+(j+3)+')').html(html1);
				i = -90*k;
			}
			if (i!=0) {
				productMove2(elem,i,j,k);
			}else{
				$(elem).css({transform:'rotateY(0deg)'});
			}
		},50)
	}
	$('#left').click(function(){
		productMove2('#product>div>ul>li:nth-child(3)',1,3,1);
		productMove2('#product>div>ul>li:nth-child(4)',-1,4,-1);
		productMove2('#product>div>ul>li:nth-child(5)',1,5,1);
	});
	$('#right').click(function(){
		productMove2('#product>div>ul>li:nth-child(3)',-1,3,-1);
		productMove2('#product>div>ul>li:nth-child(4)',1,4,1);
		productMove2('#product>div>ul>li:nth-child(5)',-1,5,-1);
	});
	$('#news>section').height(window.innerHeight-57);
	$('#news #cover').click(function(){
		newsOut();
	});
	$('#news>ul>li a').click(function(e){
		$('#news>section').css({top:document.body.scrollTop+57});
		$('#news>section').css({display:'block'});
		$('#news #cover').fadeIn(600,function(){
			$('#news #article').css({transform:'rotateY(0deg)'});
			$('#news #article').animate({opacity:'1'},1000);
		});
		e.preventDefault();
	});
	function newsOut(){
		$('#news #article').css({transform:'rotateY(90deg)'});
		$('#news #article').animate({opacity:'0'},1000,function(){
			$('#news #cover').fadeOut(600,function(){
				$('#news>section').css({display:'none'});
			})
		})
	}
})