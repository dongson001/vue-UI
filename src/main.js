import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import './mock/index.js'
createApp(App).use(ElementPlus,{
  locale: zhCn,
}).use(router).mount('#app')
