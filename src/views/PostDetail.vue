<template>
  <el-row type="flex" justify="center">
    <el-col :span="18">
      <el-card>
        <h1>{{post.title}}</h1>
        <el-row type="flex" justify="start" align="middle">
          <el-col :span="4" class="text-left">
            <el-tag>联系人</el-tag>
          </el-col>
          <el-col :span="6" :offset="1" class="text-left">{{ post.contact }}</el-col>
        </el-row>
        <div class="divider"></div>

        <el-row type="flex" justify="start" align="middle">
          <el-col :span="4" class="text-left">
            <el-tag>电话</el-tag>
          </el-col>
          <el-col :offset="1" :span="6" class="text-left">{{ post.phone }}</el-col>
        </el-row>
        <div class="divider"></div>

        <el-row type="flex" align="middle" justify="start">
          <el-col :span="4" class="text-left">
            <el-tag>更新时间</el-tag>
          </el-col>
          <el-col :offset="1" :span="8" class="text-left">{{ post.updated_time }}</el-col>
        </el-row>
        <div class="divider"></div>

        <el-row type="flex" align="middle" justify="start">
          <el-col :span="4" class="text-left">
            <el-tag>文章类型</el-tag>
          </el-col>
          <el-col :offset="1" :span="8" class="text-left">{{ map_type[post.type] }}</el-col>
        </el-row>
        <div class="divider"></div>

        <el-card>{{ post.content }}</el-card>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import ApiService from "@/api/apiservice";

export default {
  name: "post_detail",
  data() {
    return {
      map_type: {
        lost: "寻物启事",
        found: "失物招领",
        people: "寻人启事"
      },
      post: {}
    };
  },
  mounted() {
      this.get_post()
  },
  methods: {
      get_post(){
          console.log('params', this.$route.params)
        ApiService.post.get_post(this.$route.params.id)
        .then(post => {
            this.post = post
        })
        .catch(error => console.error)
      }
  }
};
</script>
<style>
.divider {
  display: block;
  height: 1px;
  width: 100%;
  margin: 12px 0;
  background-color: #dcdfe6;
  position: relative;
}
</style>