<template>
  <div class="mainWarp">
	<hb-head headfont="图片"></hb-head>
    
    <div class="bgfff martop10 pad10 font14 color666">
    	<p>
    		这里展示了多页面模块下放静态文件
    	</p>

    </div>
    
    <div class="martop10">
    	<img src="./assets/bg.jpg" alt="" />
    </div>
    

    
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import HbHead from 'components/HbHead';

export default {

  components: {
    HbHead
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

img{
	max-width:100%;
}

</style>
