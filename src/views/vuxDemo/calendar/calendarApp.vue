<template>
  <div class="mainWarp">
	<hb-head headfont="Calendar时间选择"></hb-head>
    <group>
      <calendar v-model="demo1" title="通用" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo2" title="设置时间为今天" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo3" title="禁止选择未来时间" disable-future></calendar>
    </group>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Group, Calendar, Cell } from 'vux'

import HbHead from 'components/HbHead';

export default {
  components: {
    Calendar,
    Group,
    Cell,HbHead
  },
  data () {
    return {
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY'
    }
  },
  methods: {


  }
}
</script>

<style lang="less">

body {
  background-color: #fbf9fe;
}
</style>
