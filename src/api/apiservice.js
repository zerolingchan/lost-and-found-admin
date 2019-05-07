import axios from 'axios'
import qs from 'qs'
import router from '../router'
import store from '../store'
import {UPDATE_USER, USER, LOGOUT} from '../field'
import { Message } from 'element-ui';


// axios.defaults.baseURL = '/local'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api'

axios.interceptors.response.use( response => {
  // 请求成功则返回解压后的数据
  console.log('response ->', response)
  let data = response.data
  if (data.code === 200) {
    return response.data.data
  } else {
    return Promise.reject(response.data)
  }
}, error => {
  console.log('error ->', error)
  if (error.response) {
    switch (error.response.status) {
      case 401:  
        /* 
          返回 401 表示前端的cookie已失效
          需要前端清除Vuex中的cookie，页面跳转到登陆页
        */ 
        store.commit(LOGOUT);
        // 在这里使用Element-UI组件Message无效
        Message.error('请重新登陆')
        router.replace({
          name: 'login',
        })
    }
  }
  return Promise.reject(error.response.data) //返回接口返回的错误信息
});


const ApiService = {
  user: {
    /** 登陆 */
    login(login, password, role = 'admin') {
      return axios.post('/user/login', qs.stringify({login: login, password: password, role: role}))
    },

    /** 注册 */
    register(login, nickname, password, email = '') {
      return axios.post('/user/register', qs.stringify({
        login: login,
        password: password,
        email: email,
        nickname: nickname
      }))
    },

    /** 获得所有用户 */
    get_users(page=1, per_page=20) {
      return axios.get('/user/', {params: {page: page, per_page: per_page}})
    },

    /** 删除用户 */
    delete_user(id) {
      return axios.delete('/user/' + id)
    }
  },

  post: {
    /** 获取文章 */
    get_posts(type, page = 1, per_page = 20) {
      return axios.get('/post', {params: {page: page, per_page: per_page, type: type}})
    },

    /** 获取某文章 */
    get_post(pid) {
      return axios.get('/post/' + pid)
    },

    /** 删除某文章 */
    delete_post(pid) {
      return axios.delete('/post/' + pid)
    }
  },

  notice: {
    /** 获取所有公告 */
    get_all_notice(page = 1, per_page = 20) {
      return axios.get('/notice')
    },

    /** 获取某公告 */
    get_notice(nid) {
      return axios.get('/notice' + nid)
    },

    /** 删除某公告 */
    delete_notice(nid) {
      return axios.delete('/notice/' + nid)
    },

    /** 发布公告 */
    post_notice(title, content) {
      return axios.post('/notice', {title: title, content: content})
    },

    /** 修改公告 */
    put_notice(id, title, content) {
      return axios.put('/notice/' + id, {title: title, content: content})
    }
  }
};

export default ApiService
