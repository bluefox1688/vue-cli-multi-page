<template>
  <div class="mainWarp">
	<hb-head headfont="图片"></hb-head>
    
    <div class="bgfff martop10 pad10 font14 color666">
    	<p>
    		这里展示获取多页面的url参数
    	</p>

    </div>
    
    <div class="martop10 bgfff pad10">
    	{{urlQueryString}}
    </div>
    
    <div class="martop10 bgfff pad10">
    	goodsid：{{urlQuery.goodsid}}
    </div>
    
    <div class="martop10 bgfff pad10">
    	shopid：{{urlQuery.shopid}}
    </div>
    
    <div class="martop10 pad20">
    		<a href="?goodsid=154897898&shopid=87878978891">
    			<x-button type="primary">切换个参数试试</x-button>
    		</a>
    </div>

    
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import HbHead from 'components/HbHead';

import { querystring,XButton } from 'vux'

export default {

  components: {
    HbHead,XButton
  },
  data () {
    return {
      'urlQueryString':'',
      'urlQuery':{}
    }
  },
  mounted(){
  	
  		let urlQuery = querystring.parse();
  		this.urlQueryString = JSON.stringify(urlQuery);
  		this.urlQuery = urlQuery;
  	
  	
  },
  methods: {

  }
}
</script>

<style lang="less">

img{
	max-width:100%;
}

</style>
