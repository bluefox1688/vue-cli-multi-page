<template>
  <div>
  <hb-head headfont="首页首页"></hb-head>
  
  <div style="padding: 25px 10px;color:red;text-align: center;">
  	注意看浏览器地址的变化！！
  </div>
  
  <msg title="路由切换demo" description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现" icon="success">
  	<div  slot='buttons'>
  		
  	<router-link to='/list'>
  		<x-button type="primary">路由切换</x-button>
  	</router-link>
  	
  	<div style="margin-top: 15px;">
  		<a href="../home/list.html">
  			 <x-button>返回demo列表页</x-button>
  		</a>
  	</div>
  	
  	</div>
  </msg>
 
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Msg, Divider, XButton } from 'vux'


import HbHead from 'components/HbHead';

export default {
  name: 'add',	
  components: {
    HbHead,Msg, Divider, XButton
  },
  data () {
    return {
      
    }
  },
  methods: {


  }
}
</script>

<style lang="less">

</style>
