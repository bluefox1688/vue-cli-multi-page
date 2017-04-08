<template>
  <div class="mainWarp">
	<hb-head headfont="过滤器"></hb-head>
    
    <div class="bgfff martop10 pad10 font14 color666">
    	<p>
    		这里展示了多页面全局过滤器的用法，在 /src/assets/js/vueFilter.js 注册全局过滤器，方便全局调用。
    	</p>

    </div>
    
    <div class="bgfff martop10 pad10 filterBox">
    	
    	<divider>人民币货币符号，有小数点</divider>
    	<p>
    		{{4546.2222|currency}}
    	</p>

    	<divider>美元货币符号，不留小点数</divider>
    	<p>
    		{{168|currency('$',0)}}
    	</p>
			<divider>美元货币符号，5位小数点</divider>
    	<p>
    		{{2172.356258598|currency('$',4)}}
    	</p>
    	
    </div>
    
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Divider } from 'vux'

import HbHead from 'components/HbHead';

export default {

  components: {
    HbHead,Divider
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

.filterBox p{
	padding: 10px;
	font-size: 20px;
	text-align: center;
}

</style>
