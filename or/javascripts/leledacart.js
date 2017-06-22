var app =  angular.module("myApp",[]);
var goodsList=[
	{gid:1,name:"iphone 7亮黑色",url:"./images/iphone7.jpg",price:"2000.00"},
	{gid:2,name:"iphone 7纯黑色",url:"./images/iphone7_black_gallery_01.jpg",price:"2000.00"},
	{gid:3,name:"iphone 7纯银色",url:"./images/iphone7_sliver_gallery_01.jpg",price:"2000.00"},
	{gid:4,name:"iphone 7金棕色",url:"./images/iphone7plus_gold_gallery_01.jpg",price:"2000.00",ybj:"youbk"},
	{gid:5,name:"iphone 7玫瑰色",url:"./images/iphone7plus_rose_gallery_01.jpg",price:"2000.00"},
	{gid:6,name:"iPhone 6Plus",url:"./images/iphone6p_top_loop_ LEZH201612020002_1_0001.png",price:"2000.00"},
	{gid:7,name:"iPhone 7P纯银色",url:"./images/iphone7plus_jet_gallery_01.jpg",price:"2000.00"},
	{gid:8,name:"iphone 7亮黑色",url:"./images/iphone7plus_sliver_gallery_01.jpg",price:"2000.00",ybj:"youbk"},
	{gid:9,name:"iPhone 7P纯黑色",url:"./images/iphone7plus_black_gallery_01.jpg",price:"2000.00"},
	{gid:10,name:"iPhone 7P纯金色",url:"./images/iphone7plus_gold_gallery_01.jpg",price:"2000.00"},
	{gid:11,name:"iPhone 7P玫瑰金",url:"./images/iphone7plus_rose_gallery_01.jpg",price:"2000.00"},
	{gid:12,name:"iPhone 6Plus",url:"./images/iphone6splus_top_loop_ LEZH201610230004_3_0001.png",price:"2000.00",ybj:"youbk"},
	{gid:13,name:"iPhone 6s",url:"./images/iphone6s_top_loop_ LEZH201611010004_1_0001.png",price:"2000.00"},
	{gid:14,name:"iPhone SE",url:"./images/iphonese_top_loop_ LEZH201611010004_1_0001.png",price:"2000.00"},
	{gid:15,name:"iPhone 6",url:"./images/iphone6p_top_loop_ LEZH201612020002_1_0001.png",price:"2000.00"},
	
];

app.controller('cartCtrl',function($scope){//控制商品列表

	$scope.goodsList = goodsList;//显示商品列表
	$scope.cartList = {};//定义购物车
	$scope.cartNum = 0;//显示购买的种类 
	$scope.total = 0;//总计
	$scope.goodsname = '商品名';

	$scope.buy = function(id){
		//两种情况三个属性
		//按情况来写逻辑 按属性来添
		//判断购物车是否存在同名商品
		if($scope.cartList[id]){
			$scope.cartList[id]['num']+=1;
		}else{

			for(var i in $scope.goodsList){
				if($scope.goodsList[i]['gid'] == id){
					$scope.cartList[id] = goodsList[i];//是商品中的第几个就扔进购物车(在前面遍历了)
				}
			}
			$scope.cartList[id]['num'] = 1;//如果是走这条判断那么num就是1
		}

		var count = 0;
		for(var i in $scope.cartList){//遍历一次加一次
			count++;
		}
		$scope.cartNum = count;//总数
	}

	$scope.cartminus = function(id){
		$scope.cartList[id]['num']--;
		if($scope.cartList[id]['num']<=0){
			$scope.cartList[id]['num']= 0;
		}
	}

	$scope.cartadd = function(id){

		$scope.cartList[id]['num']++;
		if($scope.cartList[id]['num']>10){
			$scope.cartList[id]['num'] = 10;
			alert('限购')
		}
	}

	//总计
	$scope.$watch('cartList',function(){//监听绑定元素的实时变化做出响应机制:分为浅监听类似于单个value值  和深度监听类似于数组里面还有数组
		var total = 0;
		for(var i in $scope.cartList){
			total += $scope.cartList[i]['price'] * $scope.cartList[i]['num'];
		}
		$scope.total = total;
	},true)//深度解析


	$scope.del = function(id){
		// console.log(id.gid)
		
		delete $scope.cartList[id.gid];
		$scope.cartNum--;
	}
})


