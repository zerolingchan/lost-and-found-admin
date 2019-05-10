<template>
  <div>
    <!-- 数据显示表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="updated_time" width="180"></el-table-column>
      <el-table-column label="标题" prop="title" width="180"></el-table-column>
      <el-table-column label="联系人" prop="contact" width="240"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleCat(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" type="danger" @click="deletcPost(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <div style="height: 10px"></div>
    <el-pagination background 
      layout="prev, pager, next"
      :total="pagination.total_num"
      :page-count="pagination.total_page"
      :page-size="pagination.current_num"
      :current-page="pagination.current_page"
      @current-change="handleCurrentChange"
      >

    </el-pagination>

    <!-- dialog form -->
  </div>
</template>

<script>
import ApiService from "@/api/apiservice";
import dayjs from "dayjs";

export default {
  name: "lost",
  data() {
    return {
      tableData: [],
      post: {},
      dialog: {
        visible: false,
        title: ''
      },
      pagination: {
        current_num: 0,
        current_page: 0,
        total_num: 0,
        total_page: 0,
      }
    };
  },
  mounted() {
    console.log('prop type ->', this.$route.params)
    this.getPosts(1, 1);
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.init()
      this.getPosts()
    }
  },
  methods: {
    init(){
        this.$set(this, "tableData", []);
        this.pagination = {
          current_num: 0,
          current_page: 0,
          total_num: 0,
          total_page: 0,
        }
    },
    handleCat(index, row) {
      // this.dialog.visible = true 
      // this.dialog.title = '修改公告'
      // this.post = row
      this.$router.push({name: 'postDetail', params: {id: row.id}})
    },
    getPosts(page=1, per_page=20) {
      ApiService.post
        .get_posts(this.$route.params.type, page, per_page)
        .then(result => {
          let data = result.data
          for (let i = 0; i < data.length; i++) {
            data[i].updated_time = dayjs(data[i].updated_time * 1000).format(
              "YYYY-MM-DD HH:mm:ss"
            );
          }
          this.$set(this, "tableData", data);
          this.pagination = result.pagination
        })
        .catch(error => {
          console.log(error);
        })
    },
    deletcPost(index, post) {
      this.$confirm('确定要删除吗？ ', '提示', {
        onfirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 向请求服务端删除
          ApiService.post.delete_post(post.id)
          .then(data => {
            console.log(data)
            this.tableData.splice(index, 1)
            this.$message.success('删除成功')
           })
          .catch(error => {
            console.log(error)
            this.$message.error('删除失败')
           })
      }).catch(() => {
        this.$message.info('已取消删除!');
      });
    },
    handleCommit(form) {
      if (this.currentEdit !== -1) {
        this.put_notice(form)
      } else {
        this.post_notice(form)
      }
    },
    handleCurrentChange(page) {
      this.getPosts(page, 1)
    }
  }
};
</script>
