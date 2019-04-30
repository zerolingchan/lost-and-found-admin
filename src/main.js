import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false


// 初始化读取local storage中用户
store.dispatch('loadUser')


router.beforeEach((to, from, next) => {
  console.log('to -> ', to)
  if (to.name === 'home') {
    // 未登陆跳转
    if (store.state.isLogin === false) {
      console.log('login state ', store.state.isLogin)
      next('/login')
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
