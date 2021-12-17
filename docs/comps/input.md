# Input

通过鼠标或键盘输入字符

::: warning 

Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

## 基本用法

::: demo 
```html
<template>
  <as-input v-model="input" placeholder="请输入用户名" ></as-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

## 禁用状态
::: demo 
```html
<template>
  <as-input v-model="input" placeholder="请输入内容" :disabled="true"></as-input>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

## 可清空
::: demo 
```html
<as-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</as-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

## 密码框
::: demo 
```html
<as-input placeholder="请输入密码" v-model="input" show-password></as-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 输入框(Input)

<br>

| 属性         | 值      | 描述                               |
| ------------ | ------- | ---------------------------------- |
| placeholder  | String  | 占位符，默认为空字符串             |
| type         | String  | 表单类型，默认为'text'             |
| mimicry      | Boolean | 对话框是否为拟态风格，默认为 false |
| name         | String  | 表单命名，默认为空                 |
| value        | String  | 表单值，默认为空字符串             |
| disabled     | Boolean | 是否禁用，默认为 false             |
| clearable    | Boolean | 是否可清空，默认为 false           |
| showPassword | Boolean | 是否显示密码可见，默认为 false     |

<br>
