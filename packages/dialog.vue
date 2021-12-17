<template>
<!-- 使用transition包裹一个元素后，这个元素在显示隐藏就会自动添加一些类名 -->
<transition name="dialog-fade">
<!-- 对话框的遮罩  self代表只有点击自己才会触发-->
    <div class="as-dialog_wrapper" v-show="visible" @click.self="handleClose">
        <div class="as-dialog" :style="{width:width,marginTop:top}">
            <div class="as-dialog_header">
                <slot name="title">
               <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
                <span class="as-dialog_title">
                    {{title}}
                </span>
            </slot>
            <button class="as-dialog_headerbtn" @click="handleClose">
                <i class="as-icon-warning"></i>
            </button>
        </div>
        <div class="as-dialog_body">
            <!-- 默认插槽 -->
            <slot></slot>
        </div>
         <!-- 如果footer不传递内容，则不显示footer -->
         <div class="as-dialog_footer" v-if="$slots.footer">
              <!-- 默认插槽 -->
            <slot name="footer" ></slot>
        </div>
        </div>
    </div>
</transition>
</template>

<script>

export default {
  name: 'AsDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '40%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 子组件中使用update绑定参数的方法进行回调
    handleClose () {
    //   this.visible = false
    //   this.$emit('close', false)
      this.$emit('update:visible', false)
    }
  }
}

</script>

<style lang="scss" scoped>
// scoped会给当前组件的模板中的所有元素都添加一个随机的属性
// scoped会给当前组件中所有的样式 添加一个对应的属性选择器
.as-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .as-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .as-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .as-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    //深度选择器scss ::v-deep  less /deep/ 防止组件库的样式覆盖不了
      ::v-deep .as-button:first-child{
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
