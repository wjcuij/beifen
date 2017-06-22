		$(function(){
		$('#anniu').bind('click',function(){
					// $.ajax({
					// 	url:'denglu.php',
					// 	type:'post',
					// 	data:{
					// 		'name':$("#inputEmail3").val(),
					// 		'pass':$('#inputPassword3').val()
					// 	},
					// 	success:function(data){
					// 		$obj = JSON.parse(data);
					// 		// console.log($obj)
					// 		if($obj.code == 200){
					// 			var r = confirm("登陆成功,是否跳转到首页?");
					// 			if(r == true){
					// 				window.location.href = 'index2.html';
					// 			}else{
					// 				location.reload();
					// 			}
								
								
					// 		}else{
					// 			$('span').html('账号或密码错误')
					// 		}
					// 	}
					// })
					zahnghao = $("#inputEmail3").val();
					var mima = $('#inputPassword3').val();
					var hq = sessionStorage.getItem(zahnghao);
					
					if(mima == hq){
						alert('登陆成功！')
						var zh = $("#inputEmail3").val();
						
						window.location.href = 'index.html?'+zh;
					}else{
						alert('账号或密码错误！')
					}
					
					
				})
		})


