import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/element-variables.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false


// 初始化读取local storage中用户
store.dispatch('loadUser')


router.beforeEach((to, from, next) => {
  console.log('to -> ', to)
  console.log('login state ', store.state.isLogin)
  if (to.fullPath !== '/login' && store.state.isLogin === false) {
    // 未登陆跳转
    next('/login')
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
