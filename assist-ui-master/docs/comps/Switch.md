# Switch

表示两种相互对立的状态间的切换，多用于触发「开/关」。


## 基本用法

::: demo 
```html

  <as-switch
    v-model="value">
  </as-switch>
  
  <script>
    export default {
      data() {
        return {
          value: true
        }
      }
    };
  </script>
```
:::

## 颜色变换
::: demo 绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
```html

  <as-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </as-switch>
  
  <script>
    export default {
      data() {
        return {
          value: true
        }
      }
    };
  </script>
```
:::

### 切换(Switch)

<br>

| 属性          | 值      | 描述                               |
| ------------- | ------- | ---------------------------------- |
| mimicry       | Boolean | 对话框是否为拟态风格，默认为 false |
| name          | String  | 表单命名，默认为空                 |
| value         | String  | 表单值，默认为空字符串             |
| disabled      | Boolean | 是否禁用，默认为 false             |
| activeColor   | String  | 激活状态颜色，默认为#dcdfe6        |
| inactiveColor | String  | 未激化状态颜色，默认为#dcdfe6      |

<br>

| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| change | Function | 状态修改触发事件，返回修改后的状态 |

<br>

---
