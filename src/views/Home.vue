<template>
    <el-container>
        <el-aside class="aside" width="200px">
            <el-menu background-color="coral"
      text-color="white"
      active-text-color="#ffd04b" default-active="1" @select="handleSelect">
              <el-menu-item index="1">公告管理</el-menu-item>
              <el-menu-item index="2">失物招领管理</el-menu-item>
              <el-menu-item index="3">寻物启事管理</el-menu-item>
              <el-menu-item index="4">寻人启事管理</el-menu-item>
              <el-menu-item index="5">用户管理</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'home',
    data () {
        return {
            active: 1
        }
    },
    computed: {
        ...mapState({
            isLogin: 'isLogin'
        })
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key !== this.active) {
                this.active = key
            }
            console.log(key, keyPath)
            console.log(typeof key)
            switch(key) {
                case '1':
                    this.$router.push('/notice')
                    console.log('pushed')
                    break
            }
        }
    }
}
</script>
<style scoped>
.aside{
    background-color: coral;
    /* height: 100%; */
}
.el-container {
    padding: 8px;
    height: 100%;
}
</style>
