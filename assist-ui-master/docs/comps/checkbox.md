# Checkbox

一组备选项中进行多选

## 基本用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
::: demo
```html
<template>
  <!-- `checked` 为 true 或 false -->
  <as-checkbox v-model="checked">备选项</as-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::


## 复选框组

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
::: demo
```html
<template>
  <as-checkbox-group v-model="hobby">
     <as-checkbox label="抽烟"></as-checkbox>
     <as-checkbox label="喝酒"></as-checkbox>
     <as-checkbox label="烫头"></as-checkbox>
  </as-checkbox-group>
</template>
<script>
  export default {
    data() {
      return {
       hobby: ['抽烟','烫头'],
      };
    }
  };
</script>
```
:::




### 复选框(Checkbox)

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 复选框组(CheckboxGroup)

<br>

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

<br>
