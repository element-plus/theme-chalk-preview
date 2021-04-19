<template>
  <el-form inline :model="query" label-position="right" label-width="60px" class="query-form">
    <el-form-item :label="langConfig.query.name[lang]" prop="name">
      <el-input v-model="query.name" :placeholder="langConfig.query.nameHolder[lang]"></el-input>
    </el-form-item>
    <el-form-item :label="langConfig.query.date[lang]" prop="date">
      <el-date-picker
        v-model="query.date"
        type="daterange"
        :placeholder="langConfig.query.dateHolder[lang]">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">{{ langConfig.query.search[lang] }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { langConfig } from '../../constant'
export default defineComponent({
  props: {
    lang: {
      type: String,
      default: '/zh-CN'
    }
  },
  setup() {
    const query = reactive({
      name: '',
      dateHolder: ''
    })
    return { langConfig, query}
  },
})
</script>
