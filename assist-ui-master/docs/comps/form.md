# Form

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

## 基本用法
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

::: demo 
```html
<template>
  <as-form :model="models" label-width="100px">
      <as-form-item label="用户名">
        <as-input type="text" placeholder="请输入用户名" v-model="models.usernames"></as-input>
      </as-form-item>
  </as-form>
</template>
<script>
export default {
  data () {
    return {
      models: {
        usernames: '1111'
         }
      }
    }
}
</script>
```
:::

### 表单项(Form-item)

<br>

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

<br>

### 表单(Form)

<br>

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |

<br>
