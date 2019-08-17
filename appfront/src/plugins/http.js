import axios from 'axios'

// const MyHttpServer = {};

// MyHttpServer.install = (Vue) => {
//
//   // axios.baseURL = 'http://127.0.0.1:8000/';
//
//   //添加实例方法
//   Vue.prototype.$http = axios
//
// };
//
// export default MyHttpServer


// 设置基础apiUrl
axios.defaults.baseURL = 'http://127.0.0.1:8000/';


// 拦截request,设置全局请求为ajax请求

// 响应拦截 (这里以后写axios响应拦截)


export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {value: axios})
  }
}
