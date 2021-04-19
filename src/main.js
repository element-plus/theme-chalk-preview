import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './styles/index.scss';

import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDatePicker,
  ElButton,
  ElDialog,
  ElColorPicker,
  ElIcon,
  ElTableColumn,
  ElTable,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTabs,
  ElForm,
  ElMain,
  ElInput,
  ElFormItem,
} from 'element-plus';
const components = [
  ElContainer,
  ElHeader,
  ElIcon,
  ElMain,
  ElDialog,
  ElColorPicker,
  ElTable,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElAside,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDatePicker,
  ElButton,
  ElTableColumn,
  ElTabs,
  ElForm,
  ElFormItem,
]

const app = createApp(App)
setupRouter(app)

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')
