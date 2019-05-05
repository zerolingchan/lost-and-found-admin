import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import User from './views/User.vue'
import Notice from './views/Notice.vue'
import Post from './views/Post.vue'
import PostDetail from './views/PostDetail.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          component: Notice
        },
        {
          path: '/notice',
          name: 'notice',
          component: Notice
        },
        {
          path: '/post/:type',
          name: 'post',
          component: Post,
        },
        {
          path: '/user',
          name: 'user',
          component: User,
        },
      ]
    },
    {
      path: '/post/detail/:id',
      name: 'postDetail',
      component: PostDetail,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})


export default router