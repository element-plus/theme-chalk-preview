<template>
  <el-config-provider :locale="langLocale">
    <el-container class="wrapper">
      <el-header height="80px" :style="{ 'background-color': colors.primary }">
        <img
          src="./assets/element-plus.svg"
          alt="element-logo"
          class="header-logo"
        />
        <ul class="header-operations">
          <li @click="visible = true">{{ langConfig.header.switch[lang] }}</li>
          <li
            class="header-download"
            :class="{ 'is-available': canDownload }"
            @click="downloadZip"
          >
            {{ langConfig.header.download[lang] }}
          </li>
          <li @click="helpDialogVisible = true">
            {{ langConfig.header.help[lang] }}
          </li>
          <li>
            <router-link
              to="/zh-CN"
              :class="{ 'is-active': lang === '/zh-CN' }"
              class="header-lang"
            >
              中文
            </router-link>
            <span>/</span>
            <router-link
              to="/en-US"
              :class="{ 'is-active': lang === '/en-US' }"
              class="header-lang"
            >
              En
            </router-link>
          </li>
        </ul>
      </el-header>
      <el-container>
        <el-aside class="menu">
          <theme-menu :lang="lang"></theme-menu>
        </el-aside>
        <el-main class="content">
          <theme-breadcrumb :lang="lang"></theme-breadcrumb>
          <theme-form :lang="lang"></theme-form>
          <theme-table :lang="lang"></theme-table>
        </el-main>
      </el-container>
      <el-dialog
        center
        v-model="visible"
        :title="langConfig.header.switch[lang]"
        width="400px"
      >
        <theme-pick :lang="lang" @submit="submitForm"></theme-pick>
      </el-dialog>
      <el-dialog
        v-model="helpDialogVisible"
        :title="langConfig.help.title[lang]"
      >
        <div v-html="langConfig.help.content[lang]" class="help"></div>
        <template #footer>
          <el-button type="primary" @click="helpDialogVisible = false">{{
            langConfig.help.ok[lang]
          }}</el-button>
        </template>
      </el-dialog>
    </el-container>
  </el-config-provider>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import { langConfig } from './constant'
import { useFiles } from './hooks/useFiles'
import { useRouter } from 'vue-router'
import ThemeMenu from './components/theme-menu/index.vue'
import ThemePick from './components/theme-pick/index.vue'
import ThemeTable from './components/theme-table/index.vue'
import ThemeForm from './components/theme-form/index.vue'
import ThemeBreadcrumb from './components/theme-breadcrumb/index.vue'
import { writeNewStyle, getStyleTemplate, generateColors } from '../src/utils'
import JSZip from 'jszip'
import FileSaver from 'file-saver'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const { getFontFiles, getIndexStyle, getSeparatedStyles } = useFiles()

const colors = reactive({
  primary: '#409eff',
})
const fonts = ref(null)
const styleFiles = ref(null)
const originalStyle = ref('')
const helpDialogVisible = ref(false)

const visible = ref(false)
const canDownload = ref(false)

const fontFiles = ['element-icons.ttf', 'element-icons.woff']

const lang = computed(() => {
  const { currentRoute } = useRouter()
  const lang = currentRoute.value.path

  return lang
})

const langLocale = computed(() => {
  return lang.value === '/zh-CN' ? zhCn : en
})

const originalStylesheetCount = computed(() => {
  return document.styleSheets.length || -1
})

const submitForm = (primary) => {
  visible.value = false
  colors.primary = primary
  Object.assign(colors, generateColors(primary))
  canDownload.value = true
  writeNewStyle(originalStylesheetCount.value, originalStyle.value, colors)
}

getFontFiles(fontFiles).then((data) => {
  fonts.value = data
})

getIndexStyle().then((data) => {
  originalStyle.value = getStyleTemplate(data)
})

getSeparatedStyles().then((data) => {
  styleFiles.value = data.map((file) => {
    return {
      name: file.url,
      data: getStyleTemplate(file.data),
    }
  })
})

const downloadZip = () => {
  if (!canDownload.value) return
  let zip = new JSZip()
  fonts.value.forEach((font, index) => {
    zip.file(`fonts/${fontFiles[index]}`, font.data)
  })
  styleFiles.value.forEach((file) => {
    let cssText = file.data
    Object.keys(colors).forEach((key) => {
      cssText = cssText.replace(
        new RegExp('(:|\\s+)' + key, 'g'),
        '$1' + colors[key]
      )
    })
    zip.file(file.name, cssText)
  })
  zip.generateAsync({ type: 'blob' }).then((blob) => {
    FileSaver.saveAs(blob, `element-plus-${colors.primary}.zip`)
  })
}
</script>
