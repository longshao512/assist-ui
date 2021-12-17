<template>
  <div id="app">
    <div class="row">
    <as-button>按钮</as-button>
    <as-button type="primary">primary按钮</as-button>
    <as-button type="success">success按钮</as-button>
    <as-button type="info">info按钮</as-button>
    <as-button type="danger">danger按钮</as-button>
    <as-button type="warning">warning按钮</as-button>
    </div>

    <div class="row">
    <as-button plain>按钮</as-button>
    <as-button plain type="primary">primary按钮</as-button>
    <as-button plain type="success">success按钮</as-button>
    <as-button plain type="info">info按钮</as-button>
    <as-button plain type="danger">danger按钮</as-button>
    <as-button plain type="warning">warning按钮</as-button>
    </div>

    <div class="row">
    <as-button plain round>按钮</as-button>
    <as-button plain round type="primary">primary按钮</as-button>
    <as-button plain round type="success">success按钮</as-button>
    <as-button plain round type="info">info按钮</as-button>
    <as-button plain round type="danger">danger按钮</as-button>
    <as-button plain round type="warning">warning按钮</as-button>
    </div>

       <div class="row">
      <as-button circle icon="seleted"></as-button>
      <as-button circle type="primary" icon="service"></as-button>
      <as-button circle type="success" icon="aviation"></as-button>
      <as-button circle type="info" icon="task-management"></as-button>
      <as-button circle type="danger" icon="smile"></as-button>
      <as-button circle type="warning" icon="warning"></as-button>
    </div>

    <div class="row">
  <as-button disabled>按钮</as-button>
  <as-button @click="getInfo">按钮</as-button>
</div>

      <!-- <as-dialog title="温馨提示"></as-dialog> -->
       <!-- <as-dialog> -->
        <!-- 使用v-slot指定插槽进行编辑 -->
        <!-- <template v-slot:title>
          <h3 style="color:red">我是标题</h3>
        </template>
      </as-dialog> -->

<!-- sync修饰符是一个语法糖 父组件中的使用sync语法糖，传递和接收参数 -->
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

       <as-input placeholder="请输入密码" type="password" name="name" disabled></as-input>
       <input v-model="username" />
       <!-- v-model实质上就是一个语法糖，等价于 -->
       <input type="text" :value="username" @input="username=$event.target.value"/>
    <as-input v-model="username" type='password' showPassword></as-input>
     <as-input v-model="username" clearable></as-input>

     <as-switch v-model="active" ></as-switch>
     <as-switch v-model="active"  active-color="red" inactive-color="green"></as-switch>

    <as-radio label="1" v-model="gender" >男</as-radio>
      <as-radio label="0" v-model="gender" >女</as-radio>
        <!-- <as-radio label="1" v-model="gender" ></as-radio>
      <as-radio label="0" v-model="gender" ></as-radio> -->
      <as-radio-group v-model="gender">
        <as-radio label="1" >男</as-radio>
        <as-radio label="0">女</as-radio>
      </as-radio-group>

      <as-checkbox v-model="actives">是否选中</as-checkbox>
      <as-checkbox-group v-model="hobby">
          <as-checkbox label="抽烟"></as-checkbox>
          <as-checkbox label="喝酒"></as-checkbox>
          <as-checkbox label="烫头"></as-checkbox>
      </as-checkbox-group>

      <as-form :model="models" label-width="100px">
        <as-form-item label="用户名">
          <as-input type="text" placeholder="请输入用户名" v-model="models.usernames"></as-input>
        </as-form-item>
      </as-form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: 'zs',
      active: false,
      gender: '1',
      actives: false,
      hobby: ['抽烟'],
      models: {
        usernames: '1111'
      }
    }
  },
  methods: {
    getInfo () {
      alert('1')
    },
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .as-input{
    width: 200px;
  }
}
.row{
  margin-right: 20px;
}
</style>
