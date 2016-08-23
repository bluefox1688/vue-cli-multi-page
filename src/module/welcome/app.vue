<template>
<div>

<module-head title="组件 header"></module-head>	

<div>
	<ul class="listbox">
		<li v-for="el in list">
		  <span>
			{{el}}
		  </span>
		</li>
	</ul>
</div>

<div class="icon_lists ">

	<ul>
	 <li>
                <i class="icon iconfont">&#xe600;</i>
                    <div class="name">微信</div>
                    <div class="code">&amp;#xe600;</div>
                    <div class="fontclass">.weixin</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe6df;</i>
                    <div class="name">下载</div>
                    <div class="code">&amp;#xe6df;</div>
                    <div class="fontclass">.xiazai</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe6d2;</i>
                    <div class="name">购物车</div>
                    <div class="code">&amp;#xe6d2;</div>
                    <div class="fontclass">.gouwuche</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe601;</i>
                    <div class="name">round_check</div>
                    <div class="code">&amp;#xe601;</div>
                    <div class="fontclass">.roundcheck</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe602;</i>
                    <div class="name">round_close_fill</div>
                    <div class="code">&amp;#xe602;</div>
                    <div class="fontclass">.roundclosefill</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe603;</i>
                    <div class="name">round_close</div>
                    <div class="code">&amp;#xe603;</div>
                    <div class="fontclass">.roundclose</div>
                </li>
            
                <li>
                <i class="icon iconfont">&#xe604;</i>
                    <div class="name">round_right_fill</div>
                    <div class="code">&amp;#xe604;</div>
                    <div class="fontclass">.roundrightfill</div>
                </li>
            
		
	</ul>

</div>

</div>

</template>

<script>

import Lib from 'assets/Lib.js'

import moduleHead from 'components/module-head'

export default {
  data() {
    return {
		list:[0,1,2,3,4,5,6]	
    }
  },
  components: {
	moduleHead
  },
  ready(){
  	
  	
  },
  methods: {

	
  
  }  
}
</script>

<style scoped>

.listbox{
	overflow:hidden;
	margin-top:50px;
}

.listbox li{
float:left;
width:25%;
text-align:center;
height:50px;
line-height:50px;
}

.listbox li span{
border:1px solid #04BE02;
border-radius:5px;
background:#fff;
padding:10px;

}


.icon_lists{
margin:25px 0 0 0;
overflow:hidden;
background:#fff;

}

.icon_lists li{
  float:left;
 
	width:33.33333333%;
 
  text-align: center;
}
.icon_lists .icon{
  font-size: 42px;
  line-height: 100px;
  margin: 10px 0;
  color:#04BE02;
  -webkit-transition: font-size 0.25s ease-out 0s;
  -moz-transition: font-size 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s;

}
.icon_lists .icon:hover{
  font-size: 100px;
}

</style>





