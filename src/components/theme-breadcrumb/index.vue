<template>
   <el-breadcrumb>
    <el-breadcrumb-item>{{ langConfig.breadcrumb.main[lang] }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ langConfig.breadcrumb.project[lang] }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ langConfig.breadcrumb.page[lang] }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { langConfig } from '../../constant'
export default defineComponent({
  props: {
    lang: {
      type: String,
      default: '/zh-CN'
    }
  },
  setup() {
    return { langConfig }
  },
})
</script>
