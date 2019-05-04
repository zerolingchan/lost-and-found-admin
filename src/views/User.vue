<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="ID" prop="id" width="180"></el-table-column>
      <el-table-column label="账号" prop="login" width="180"></el-table-column>
      <el-table-column label="昵称" prop="nickname" width="240"></el-table-column>
      <el-table-column label="用户类型" prop="role" width="240">
        <template slot-scope="scope">
          <el-tag>{{ map_type[scope.row.role] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="deletcUser(scope.$index, scope.row)">删除</el-button>
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
  </div>

</template>

<script>
import ApiService from "@/api/apiservice";

export default {
  name: "user",
  data() {
    return {
      map_type: {
        admin: "管理员",
        user: "一般用户"
      },
      tableData: [],
      pagination: {}
    };
  },
  mounted() {
      this.get_users()
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.init()
      this.get_users()
    }
  },
  methods: {
    init() {
      this.$set(this, "tableData", []);
    },
    handleCurrentChange(page) {
      this.get_users(page, 1)
    },
    get_users(page = 1, per_page = 20) {
      ApiService.user.get_users(page, per_page).then(result => {
        this.$set(this, "tableData", result.data);
        this.pagination = result.pagination;
      });
    },
    deletcUser(index, row) {
        ApiService.user.delete_user(row.id)
        .then(data => {
            console.log(data)
            this.tableData.splice(index, 1)
            this.$message.success('删除成功')
        })
        .catch(error => {
            this.$message.error('删除失败')
        })
    }
  }
};
</script>
