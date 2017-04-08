require('assets/css/common.css');

import { AlertPlugin,LoadingPlugin  } from 'vux'

import Vue from 'vue';

//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin ); //全局注册alert事件，注册之后，不需要每个页面都import alert
//--- VUX UI 注册 END --


import C from './conf';
import M from './common';

import FastClick from 'fastclick';

import vueFilter from './vueFilter';

import store from 'store';

//解决click点击300毫秒延时问题
FastClick.attach(document.body);	
export default{
	M,C,store
}