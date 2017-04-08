<template>
  <div class="mainWarp">
	<hb-head headfont="图片"></hb-head>
    
    <div class="bgfff martop10 pad10 font14 color666">
    	<p>
    		这里展示了使用axios获取数据，axios已封装，方便快捷使用，封装参数与jq ajax基本一致，减少学习成本。
    	</p>

    </div>
    
    <div v-if="ajaxResult.status" class="martop10">
    	
    	<form-preview header-label="付款金额" header-value="¥2400.00" :body-items="ajaxResult.goodslist"></form-preview>
    	
    </div>
    

    
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import HbHead from 'components/HbHead';

import { FormPreview } from 'vux'


export default {

  components: {
    HbHead,FormPreview
  },
  data () {
    return {
      'ajaxResult':{}
    }
  },
    //已成功挂载，相当ready()
  mounted(){
  	
  	this.ajax();
  	
  },
  methods: {
		
		ajax:function (){
			
			var self = this;
			
			this.$vux.loading.show({
 					text: 'Loading'
			});
			
			Lib.M.ajax({
				'url':'api/Getdata/vue2_multipage_getajax_demo',
				'success':function (data){
					
					self.ajaxResult = data;
					
					setTimeout(()=>{
						self.$vux.loading.hide();
					},1000);
					
				}
			});
			
			
		}
		
  }
}
</script>

<style lang="less">

img{
	max-width:100%;
}

</style>
