# Dialog

在保留当前页面状态的情况下，告知用户并承载相关操作。


## 基本用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

::: demo 
```html
<template>
    <as-button type="primary" @click="visible = true">按钮</as-button>
         <!-- <as-dialog width="40%" top="200px" :visible="visible" @close="close"> -->
           <as-dialog width="40%" top="200px" :visible.sync="visible">
           <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
           </ul>
            <template v-slot:footer>
              <as-button type="primary" @click="visible = false">确定</as-button>
              <as-button @click="visible = false">取消</as-button>
            </template>
         </as-dialog>
</template>
<script>
export default {
  data () {
     return {
       visible: false
      }
   }
}
</script>
```
:::

<br>

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| visiable | Boolean | 对话框可见状态，默认为 false       |
| mimicry  | Boolean | 对话框是否为拟态风格，默认为 false |
| width    | String  | 对话框宽度，默认为 60%             |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br>

---
