<template>
  <el-menu default-active="1">
    <el-menu-item index="1">{{ langConfig.menu.pageOne[lang] }}</el-menu-item>
    <el-menu-item index="2">{{ langConfig.menu.pageTwo[lang] }}</el-menu-item>
    <el-menu-item index="3">{{ langConfig.menu.pageThree[lang] }}</el-menu-item>
  </el-menu>
</template>

<script setup>
import { langConfig } from '../../constant'

defineProps({
  lang: {
    type: String,
    default: '/zh-CN',
  },
})
</script>
