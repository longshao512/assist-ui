import Vue from 'vue'
import App from './App.vue'

// 第一步：导入button组件
import AsButton from './components/button.vue'
import AsDialog from './components/dialog.vue'
import AsInput from './components/input.vue'
import AsSwitch from './components/switch.vue'
import AsRadio from './components/radio.vue'
import AsRadioGroup from './components/radio-group.vue'
import AsCheckbox from './components/checkbox.vue'
import AsCheckboxGroup from './components/checkbox-group.vue'
import AsForm from './components/form.vue'
import AsFormItem from './components/form-item.vue'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

// 第二步：注册组件,设置(组件名，组件)
Vue.component(AsButton.name, AsButton)
Vue.component(AsDialog.name, AsDialog)
Vue.component(AsInput.name, AsInput)
Vue.component(AsSwitch.name, AsSwitch)
Vue.component(AsRadio.name, AsRadio)
Vue.component(AsRadioGroup.name, AsRadioGroup)
Vue.component(AsCheckbox.name, AsCheckbox)
Vue.component(AsCheckboxGroup.name, AsCheckboxGroup)
Vue.component(AsForm.name, AsForm)
Vue.component(AsFormItem.name, AsFormItem)
new Vue({
  render: h => h(App)
}).$mount('#app')
