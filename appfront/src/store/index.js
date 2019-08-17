import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'



Vue.use(Vuex);

//组装模块并导出 store 的地方
export default new Vuex.Store({
  //根节点相关
  state,
  mutations,
  getters,
  actions,

  //模块相关
  modules: {


  },

});


