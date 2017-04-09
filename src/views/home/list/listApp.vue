<template>
<div id="app">
	
	<divider>github 地址 </divider>
	
	<div class="font12 pad10">
		<a class="color888" href="https://github.com/bluefox1688/vue-cli-multi-page" target="_blank">https://github.com/bluefox1688/vue-cli-multi-page</a>
	</div>
	
    <div>
    	<divider>vux UI 展示</divider>
		<group title="vux UI demo">
			<cell v-for="el in list" :key="el.id" :title="el.name" value="" is-link :link="el.url"></cell>
		</group>
		<div class="note">
			<p>这里仅展示几个VUE UI的demo，更多组件demo请访问vux UI官网，官网地址：<a href="https://vux.li" target="_blank">https://vux.li</a> </p>
		</div>
	</div>
	<div>
	<divider>多页面 vue-router 2</divider>
    <group>
		<cell title="多页面路由" value="" is-link link="../router/details.html"></cell>
	</group>
	</div>
	
	<div class="martop15">
	<divider>iconfont 字体</divider>
    <group>
		<cell title="iconfont图标展示" value="" is-link link="../iconfont/list.html"></cell>
	</group>
	</div>
	
	<div class="martop15">
	<divider>其他</divider>
    <group>
		<cell title="自定义vue全局过滤器" value="" is-link link="../tools/vuefilter.html"></cell>
		<cell title="模块下放静态文件" value="" is-link link="../tools/bigimage.html"></cell>
		<cell title="ajax" value="" is-link link="../tools/ajax.html"></cell>
		<cell title="获取url参数" value="" is-link link="../tools/getQuery.html?goodsid=1688&shopid=25"></cell>
	</group>
	</div>

</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Cell,Group,Divider } from 'vux'


export default {
  data() {
    return {
    	webname:5464,
		'list':[{
			'id':0,
			'name':'alert弹窗',
			'url':'../vuxDemo/alert.html'
		},{
			'id':1,
			'name':'Calendar时间选择',
			'url':'../vuxDemo/calendar.html'
		},{
			'id':2,
			'name':'button按钮',
			'url':'../vuxDemo/button.html'
		}]
    }
  },
  components: {
	Cell,Group,Divider	
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
  
  
	
  },
  //相关操作事件
  methods: {
	
	
	
      
  }
}
</script>

<style lang="less">


.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}

.weui-cells{
font-size: 14px!important;	
}

/*
 * less 展示
 */ 
.lessTest{
	.listbox{
		border-radius: 10px;
		font-size: 14px;
	}
	.boxcontent{
		padding: 15px;
	}
}


</style>
