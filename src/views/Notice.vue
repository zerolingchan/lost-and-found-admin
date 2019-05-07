<template>
  <div>
    <el-row class="opera" type="flex" justify="start">
      <el-button type="primary" @click="createNotice">新增</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="updated_time" width="180"></el-table-column>
      <el-table-column label="标题" prop="title" width="180"></el-table-column>
      <el-table-column label="内容" prop="content" width="240"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deletcNotice(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- dialog form -->
    <el-dialog :title="dialog.title" :visible.sync="dialog.visible">
      <el-form :model="notice">
        <el-form-item label="标题">
          <el-input v-model="notice.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" rows="5" v-model="notice.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="noticeFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCommit(notice)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ApiService from "@/api/apiservice";
import dayjs from "dayjs";

export default {
  name: "notice",
  data() {
    return {
      tableData: [],
      notice: {
        id: null,
        title: '',
        content: ''
      },
      dialog: {
        visible: false,
        currentEdit: -1,
        title: ''
      }
    };
  },
  mounted() {
    this.getNotices();
  },
  methods: {
    handleEdit(index, row) {
      this.notice = JSON.parse(JSON.stringify(row))
      this.dialog.currentEdit = index
      this.dialog.visible = true
      this.dialog.title = '修改公告'
    },
    getNotices() {
      ApiService.notice
        .get_all_notice()
        .then(data => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            data[i].updated_time = dayjs(data[i].updated_time * 1000).format(
              "YYYY-MM-DD HH:mm:ss"
            );
          }
          this.$set(this, "tableData", data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    deletcNotice(index, row) {
      ApiService.notice.delete_notice(row.id)
      .then(data => {
        this.tableData.splice(index, 1)
        this.$message.success('删除成功')
      })
      .catch(error => {
        this.$message.error('删除失败')
      })
    },
    createNotice () {
      this.notice = {title: '', content: ''}
      this.dialog.currentEdit = -1
      this.dialog.visible = true
      this.dialog.title = '发布公告'
    },
    post_notice (form) {
      ApiService.notice.post_notice(form.title, form.content)
      .then(data => {
        data.updated_time = dayjs(data.updated_time * 1000).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        this.tableData.unshift(data)
        this.$message.success('发布成功')
      })
      .catch(error => {
        console.error(error)
        this.$message.error('发布失败')
      })
      .then(() => {
        this.dialog.visible = false
      })
    },
    put_notice(form) {
      ApiService.notice.put_notice(form.id, form.title, form.content)
      .then(data => {
        data.updated_time = dayjs(data.updated_time * 1000).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        this.$set(this.tableData, this.currentEdit, data)
        this.$message.success('修改成功')
      })
      .catch(error => {
        console.error(error)
        this.$message.error('修改失败')
      })
      .then(() => {
        this.dialog.visible = false
      })
    },
    handleCommit(form) {
      console.log('currentEdit -> ', this.dialog.currentEdit)
      if (this.dialog.currentEdit !== -1) {
        this.put_notice(form)
      } else {
        this.post_notice(form)
      }
    },
  }
};
</script>

<style scoped>
.operato-row {
  margin: 10px
}
</style>
