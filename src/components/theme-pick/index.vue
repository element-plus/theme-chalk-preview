<template>
   <el-form
    :model="colors"
    ref="formRef"
    class="theme-form"
    label-position="top"
    label-width="70px">
    <el-form-item :label="langConfig.form.theme[lang]" prop="primary">
      <el-color-picker v-model="colors.primary" ></el-color-picker>
    </el-form-item>
    <el-form-item class="color-buttons">
      <el-button type="primary" @click="$emit('submit', colors.primary)">{{ langConfig.form.switch[lang] }}</el-button>
      <el-button @click="resetForm">{{ langConfig.form.reset[lang] }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
import { langConfig } from '../../constant'
export default defineComponent({
  props: {
    lang: {
      type: String,
      default: '/zh-CN'
    }
  },
  setup() {
    const formRef = ref(null)
    const colors = reactive({
      primary: '#409eff'
    })
    const resetForm = () => {
      formRef.value.resetFields()
    }

    return {
      colors,
      langConfig,
      formRef,
      resetForm,
    }
  },
})
</script>
