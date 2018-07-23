<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" ref="loginForm">
      <div class="login-title">
        <h3>系统登录</h3>
      </div>
      <el-form-item>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on"/>
      </el-form-item>
      <el-form-item>
        <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleLogin">确定</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm)
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
