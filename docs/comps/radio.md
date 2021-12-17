# Button按钮

在一组备选项中进行单选

## 基本用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
::: demo 
```html
<template>
  <as-radio v-model="radio" label="1">备选项</as-radio>
  <as-radio v-model="radio" label="2">备选项</as-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

## 单选框组

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
::: demo 
```html
<template>
 <as-radio-group v-model="gender">
    <as-radio label="1" >男</as-radio>
    <as-radio label="0">女</as-radio>
 </as-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        gender: '1',
      };
    }
  }
</script>
```
:::
 
### 单选框(Radio)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 单选框组(RadioGroup)

<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

<br>
