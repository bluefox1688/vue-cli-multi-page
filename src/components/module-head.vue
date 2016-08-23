<template>

<header id="header">

{{title}}

</header>

</template>

<script>

import Lib from 'assets/Lib.js'

module.exports = {
  props:{
  	"title":{
		type:String,
		default:"标题"
	}
  }
}
</script>


<style scoped>

#header{
color:#fff;
padding:15px 0;
background:#04BE02;
text-align:center;
}

</style>
