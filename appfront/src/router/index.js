import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import User from '@/components/user/User.vue'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login' // 如果用户访问的 / 根路径，则 重定向到 /login 页面
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'user',
          name: 'user',
          component: User,
        },

      ]
    },
  ]
})
