<template>
  <el-table :data="tableData[lang]" class="table" stripe border>
    <el-table-column prop="date" :label="langConfig.table.date[lang]" sortable width="200"></el-table-column>
    <el-table-column prop="name" :label="langConfig.table.name[lang]" width="200"></el-table-column>
    <el-table-column prop="address" :label="langConfig.table.address[lang]"></el-table-column>
    <el-table-column prop="zip" :label="langConfig.table.zip[lang]" width="200"></el-table-column>
    <el-table-column :label="langConfig.table.operations[lang]" width="160">
      <template #default="scope">
        <el-button size="mini">{{ langConfig.table.edit[lang] }}</el-button>
        <el-button size="mini" type="danger">{{ langConfig.table.delete[lang] }}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { langConfig, tableData } from '../../constant'
export default defineComponent({
  props: {
    lang: {
      type: String,
      default: '/zh-CN'
    }
  },
  setup() {
    return { tableData, langConfig }
  },
})
</script>
