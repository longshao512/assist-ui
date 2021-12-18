# Button
常用的操作按钮。

## 基本用法

适用广泛的基础单选

##### 默认按钮
::: demo 
```html
<template>
  <as-button>按钮</as-button>
  <as-button type="primary">primary按钮</as-button>
  <as-button type="success">success按钮</as-button>
  <as-button type="info">info按钮</as-button>
  <as-button type="danger">danger按钮</as-button>
  <as-button type="warning">warning按钮</as-button>
</template>
```
:::
##### 朴素按钮
::: demo 
```html
<template>
 <as-button plain>按钮</as-button>
 <as-button plain type="primary">primary按钮</as-button>
 <as-button plain type="success">success按钮</as-button>
 <as-button plain type="info">info按钮</as-button>
 <as-button plain type="danger">danger按钮</as-button>
 <as-button plain type="warning">warning按钮</as-button>

</template>
```
:::
##### 圆角按钮
::: demo 
```html
<template>
<as-button plain round>按钮</as-button>
    <as-button plain round type="primary">primary按钮</as-button>
    <as-button plain round type="success">success按钮</as-button>
    <as-button plain round type="info">info按钮</as-button>
    <as-button plain round type="danger">danger按钮</as-button>
    <as-button plain round type="warning">warning按钮</as-button>

</template>
```
:::

##### 图标按钮
::: demo 
```html
<template>
 <as-button circle icon="seleted"></as-button>
 <as-button circle type="primary" icon="service"></as-button>
 <as-button circle type="success" icon="aviation"></as-button>
 <as-button circle type="info" icon="task-management"></as-button>
 <as-button circle type="danger" icon="smile"></as-button>
 <as-button circle type="warning" icon="warning"></as-button>
</template>
```
:::

##### 禁用状态
::: demo 
```html
<template>
  <as-button disabled>按钮</as-button>
  <as-button type="primary" disabled>primary按钮</as-button>
  <as-button type="success" disabled>success按钮</as-button>
  <as-button type="info" disabled>info按钮</as-button>
  <as-button type="danger" disabled>danger按钮</as-button>
  <as-button type="warning" disabled>warning按钮</as-button>
</template>
```
:::

##### 点击事件
::: demo 
```html
<template>
   <as-button @click="getInfo">按钮</as-button>
</template>
<script>
export default {
  name: '',
  methods: {
    getInfo () {
      alert('1')
    }
 }
}
</script>
```
:::

### Attributes

<br>

| 参数     | 说明             | 值               | 可选值          | 默认值     |
| -------- | ---------------- | ---------------- | -------------- |------------ |
| type     | 按钮类型         | String           | primary,info,success,warning,danger | —— |
| plain    | 是否为朴素按钮   | Boolean          | —— | false|    
| mimicry  | 是否为拟态按钮   | Boolean          | plain(和 plain 不能同时设置，会被 plain 覆盖)| false |
| disabled | 是否禁用按钮     | Boolean          | —— | false |
| round    | 是否为圆角按钮   | Boolean          | —— | false |
| circle   | 是否为圆形按钮   | Boolean          | —— | false |
| icon     | font-awesome 字体数组  | Array 或 Boolean | —— | false |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |

<br>
