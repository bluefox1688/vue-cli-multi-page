<template>
  <div class="">
						
		<a href="javascript:;" class="btn_login">
			{{{text}}}
		</a>
						
</div>
</template>

<script>

import Lib from 'assets/Lib.js'

module.exports = {
	components:{
		
	},
  data: function () {
    return {
      msg: 'Hello moto! what`s up,yaoyao'
    }
  },
  ready(){
  	
  },
  methods:{
  	
  },
  props:{
  	"text":{
		type:String,
		default:"点我点我"
	}
  }
}
</script>


<style scoped>
.btn_login{
background:#04BE02;
color:#fff;
display:block;
height:45px;
text-align:center;
line-height:45px;
border-radius:10px;
margin-top:25px
}
</style>
