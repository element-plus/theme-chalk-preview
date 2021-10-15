<template>
  <el-breadcrumb>
    <el-breadcrumb-item>{{
      langConfig.breadcrumb.main[lang]
    }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{
      langConfig.breadcrumb.project[lang]
    }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{
      langConfig.breadcrumb.page[lang]
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { langConfig } from '../../constant'

defineProps({
  lang: {
    type: String,
    default: '/zh-CN',
  },
})
</script>
