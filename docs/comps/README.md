## 简介

一个寻常的 Vue UI 组件

## 使用

1. 安装

```
npm i assist-ui
```

2. 全局注册

```js
import AssistUI from 'assist-ui'
Vue.use(AssistUI)
```

3. 按需导入

```js
import AssistUI, { Button, Form } from 'assist-ui'
Vue.use(AssistUI, {
  components: [Button, Form]
})
```

3. 导入样式

```js
import 'assist-ui/dist/assist-ui.css'
```

4. 导入 font-awesome 字体图标

```js
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faEnvelope,
  faStar,
  faEdit,
  faTrashAlt,
  faSmile,
  faTimesCircle,
  faEye
} from '@fortawesome/free-regular-svg-icons'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
```
