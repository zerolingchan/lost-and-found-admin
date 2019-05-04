<template>
    <el-container>
        <el-aside class="aside" width="200px">
            <el-menu background-color="coral"
      text-color="white"
      active-text-color="#ffd04b" :default-active="active" @select="handleSelect">
              <el-menu-item :index="route_index_map.notice">公告管理</el-menu-item>
              <el-menu-item :index="route_index_map.lost">失物招领管理</el-menu-item>
              <el-menu-item :index="route_index_map.found">寻物启事管理</el-menu-item>
              <el-menu-item :index="route_index_map.people">寻人启事管理</el-menu-item>
              <el-menu-item :index="route_index_map.user">用户管理</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <el-card>
                <router-view></router-view>
            </el-card>
        </el-main>
    </el-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'home',
    data () {
        return {
            route_index_map: {
                notice: "1",
                lost:   "2",
                found:  "3",
                people: "4",
                user:   "5"
            }
        }
    },
    computed: {
        ...mapState({
            isLogin: 'isLogin'
        }),
        active() {
            // 计算当前活动的菜单子项
            let path = this.$route.path
            let sub_path = path.split('/').pop()
            let active = this.route_index_map[sub_path]
            if (!active) {
                return "1"
            } else {
                return active
            }
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key !== this.active) {
                this.active = key
            }
            switch(key) {
                case this.route_index_map.notice:
                    this.$router.push({name: 'notice'})
                    break
                case this.route_index_map.lost:
                    this.$router.push({name: 'post', params: {type: 'lost'}})
                    break
                case this.route_index_map.found:
                    this.$router.push({name: 'post', params: {type: 'found'}})
                    break
                case this.route_index_map.people:
                    this.$router.push({name: 'post', params: {type: 'people'}})
                    break
                case this.route_index_map.user:
                    this.$router.push({name: 'user'})
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
