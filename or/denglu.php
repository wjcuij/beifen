<?php
	 // header("Content-type:text/html;charset=utf-8");

	 $arr = array(
	 			array('name'=>'123@qq.com','password'=>'123'),
	 			array('name'=>'abc@qq.com','password'=>'abc'),
	 			array('name'=>'123456@qq.com','password'=>'123456'),
	 			array('name'=>'qwe@qq.com','password'=>'qwe'),
	 			array('name'=>'asd@qq.com','password'=>'asd'),

	 	);



	$name = $_POST['name'];
	$pass = $_POST['pass'];

	


$res =array();

    foreach ($arr as $k => $v) {
        if($v['name']==$name && $v['password']==$pass){
            $res['code']='200';
            break;
        }else{
            $res['code']='401';
        }
    }
    echo json_encode($res);