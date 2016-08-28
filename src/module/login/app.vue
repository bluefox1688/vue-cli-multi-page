<template>


<div class="login" id="login" >


		<div class="loginbox p_re">
			<div class="shobx">
								<div class="textcenter topbox">
							
								<h3 class="color_main">
									{{appname}}
								</h3>
								<p class="color888 font12 martop15">
									您的专业移动工作台！
								</p>
						</div>
				</div>
				<div class="inputmain">
					<div class="logobox textcenter">
						<img class="logo" :src="logo"/>
					</div>
					
					<div v-if="loginerror" class="font12 loginerror LRShake">
						{{loginerror}}
					</div>
					
					<ul class="inputbox ">
						
						<li class="textcenter p_re">
							<i class="iconfont">&#xe624;</i>
							<input class="logininput" v-model="user.UserName" type="text" placeholder="用户名" />
						</li>
						
						<li class="textcenter p_re">
							<i class="iconfont">&#xe6dc;</i>
							<input class="logininput" v-model="user.PassWord" type="password" placeholder="密码" />
						</li>
						
					</ul>
					
					<div class="martop20 textcenter font12 rememberbox" :class="remember_paw ? 'selectedi' : ''">
						<span @click=" remember_paw ? remember_paw = 0 : remember_paw = 1 ">
							<i class="iconfont">{{{rememberPassword()}}}</i>
						 	记住密码，免登陆
						</span>
					</div>
					
					
					<Button @click="loginAction" text="登&nbsp;&nbsp;陆"></Button>	
					
					
					<div class="font12 textcenter" style="color: #ccc;margin-top: 35px;">
						温馨提示：请使用员工帐号登陆进行开台操作
					</div>
			</div>
			
		</div>
		

</div>



</template>

<script>

import Lib from 'assets/Lib.js'

import Button from 'components/Button';

export default {
  data() {
    return {
    	appname:Lib.C.appname,
    	logo:Lib.C.logo,
    	user:{
    		UserName:'lanchenglv.com',
    		PassWord:'lanchenglv.com'
    	},
    	loginerror:'',
    	//是否记住密码
    	remember_paw:1,
		login_height:500
    }
  },
  components: {
	Button	
  },
  ready(){
  	
  	
  },
  methods: {
	
	//登陆操作
    loginAction(){
	
		this.loginerror = "登陆成功，请稍等...";
	
		setTimeout(()=>{
			
			window.location.href = "welcome.html";
		
		},1000);
		
		
	},
	
	//记住密码
	rememberPassword(){
		
		return this.remember_paw ? '&#xe6dd;' : '&#xe601;';
		
	}
	
  
  }  
}
</script>

<style scoped>


.loginerror{
	color: #FF3B30;
	padding: 10px 0;
	text-align: center;
}

.rememberbox{
	margin-top: 25px;
	color: #888;
}
.rememberbox i{
	font-size: 20px;
	vertical-align: middle;
	color: #888;
}

.selectedi{
	color: #666;
}
.selectedi i{
	
	color: #04BE02;
	
}


.login{
	padding: 55px 0 0 0;
	/*position: absolute;*/
	/*width: 100%;*/
	/*top: 50%;*/
}

.inputmain{

}
h3{
	font-size: 18px;
}
.shobx{
	box-shadow: 0 0 10px #ccc;
	padding: 20px 10px;
	position: absolute;
	width: 70%;
	top: -40px;
	background: #fff;
	/*border-top-left-radius: 10px;
	border-top-right-radius: 10px;*/
	border-radius: 10px;
	opacity: .8;
	left: 50%;
	margin-left: -38%; 

}

.btnstyle{
		border-radius: 100px;
		margin-top: 30px;
}
.topbox{
	/*padding: 35px 0 45px 0;*/
}
.logininput{
	font-size: 16px;
	height: 40px;
	border: 1px solid #ddd;
	width: 100%;
	text-align: center;
	border-radius: 100px;
	/*font-weight: bold;*/
	color: #888;
}
.inputbox li{
	margin:15px 0 0 0 ;
}
.inputbox .iconfont{
	position: absolute;
	font-size: 25px;
	left: 10px;
	top: 8px;
	color: #04BE02;
}
.logo{
	width: 70px;
	height: 70px;
	border-radius: 100px;
		/*border:2px solid #FFA61B;*/
}
.logobox{

	padding: 75px 0 25px 0;
}

.loginbox{
	
	margin: 0 25px;
	padding: 15px 40px 30px 40px;
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 0 8px #ddd;
	
}

</style>





