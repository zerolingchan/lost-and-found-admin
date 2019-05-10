<template>
    <el-row class="login-form" type="flex" justify="center" align="middle">
      <el-col :span="8">
        <el-card>
          <el-form :model="loginModel">
            <el-form-item label="账号">
              <el-input v-model="loginModel.login" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="loginModel.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
import ApiService from "@/api/apiservice"
import {UPDATE_USER, USER} from '@/field'

export default {
  name: "login",
  data() {
    return {
      loginModel: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
      login() {
          console.log('login')
          ApiService.user.login(this.loginModel.login, this.loginModel.password)
          .then(data => {
              console.log('data ->', data)
              this.$store.commit(UPDATE_USER, data)
              this.$message.success('登录成功')
              this.$router.push({name: 'home'})
          })
          .catch(error => {
              if (error.code === 401) {
                  this.$message.error('用户名或密码不正确')
              }
              console.log(error)
          })
      }
  }
};
</script>
<style scoped>
.login-form {
    height: 100%;
}
</style>
