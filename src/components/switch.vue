<template>
     <div class="as-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="as-switch_core" ref="core">
      <span class="as-switch_button"></span>
    </span>
    <!-- 用户在使用switch组件的时候，实质上是当成表单元素来使用的。因此可能会用到组件的name属性。
    所以需要在switch组件中添加一个checkbox，并且当值改变的时候，也需要设置checkbox的value值。 -->
     <input type="checkbox" class="as-switch_input" :name="name" ref="input">
  </div>

</template>

<script>
export default {
  name: 'AsSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      console.log(this.value)
      // 等待value发生了改变，在执行setColor
      // 等待数据修改后，等待DOM更新，再修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value
    },
    setColor () {
    // 点击的时候，还需要修改背景颜色
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        console.log(color)
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
  .as-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .as-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .as-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
   // 隐藏input标签
  .as-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
   }
  }

    // 选中样式
  .is-checked {
    .as-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .as-switch_button {
        transform: translateX(20px);
      }
    }
  }
</style>
