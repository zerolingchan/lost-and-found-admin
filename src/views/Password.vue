<template>
      <el-form :model="password">
        <el-form-item label="原密码:">
          <el-input v-model="password.oldPassword" type="password" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码:">
          <el-input v-model="password.newPassword" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
         <el-form-item label="重复新密码:">
          <el-input v-model="password.checkNew" type="password" placeholder="请再次输入新密码"></el-input>
           <span>{{passwordCheckValidate.errorText}}</span>
        </el-form-item>
        <div>
            <el-button @click="passwordFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="changePass()">保 存</el-button>
        </div>
      </el-form>
</template>

<script>
    import ApiService from "@/api/apiservice"
    export default {
        name: "password",
        data() {
            return {
                password: {
                    oldPassword: '',
                    newPassword: '',
                    checkNew:''
                }
            }
        },
        computed:{
            passwordCheckValidate: function() {
                var errorText;
                if(this.password.newPassword !==this.password.checkNew ){
                    errorText = '两次输入密码不一致'
                }
                else {
                    errorText = ''
                 }

                if(!this.passwordFlag) {
                    errorText = ''
                    this.passwordFlag = true
                 }
                return {
                    errorText
                }
            }
        },
        methods:{
        changePass(){
                ApiService.user.change(this.password.oldPassword,this.password.newPassword)
                    .then(data=>{
                        console.log('data ->', data)
                        this.$message.success('修改成功')
                    })
                    .catch(error=>{
                        console.error(error)
                        this.$message.error('修改失败')
                    })
            },
    },
    }
</script>

<style scoped>

</style>