import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getter'
import actions from './action'
import mutations from './mutation'
import test from './modules/test'

const store = new Vuex.Store({
	state: {
		isLogin: false,
		jwt: '',
	},
	mutations,
	actions,
  getters,
	modules: {
		test
	},
});

export default store;
