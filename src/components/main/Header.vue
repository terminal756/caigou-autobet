<template>
  <v-app-bar app clipped-left height="36px" style="-webkit-app-region: drag; -webkit-user-select: none;">
    <span class="pr-4 font-weight-black">菜狗投注</span>
    <span>版本 v{{ version }}</span>
    <v-spacer />
    <span v-show="isLogin">{{ username }}</span>
    <v-btn v-show="isLogin" icon style="-webkit-app-region: no-drag;" @click="openLogoutDialog">
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
    <span v-show="isLogin && !isRecharge">未激活</span>
    <!--
    更换主题皮肤
    <v-btn icon
           @click="$vuetify.theme.dark = !$vuetify.theme.dark"
           style="-webkit-app-region: no-drag;">
        <v-icon>mdi-brightness-6</v-icon>
    </v-btn>
    -->

    <!-- 登陆弹窗 -->
    <v-dialog v-model="loginDialog" width="300" persistent origin="center center">
      <template v-slot:activator="{ on }">
        <v-btn v-show="!isLogin" text style="-webkit-app-region: no-drag;" v-on="on">
          未登录
        </v-btn>
      </template>
      <v-card height="100%" style="overflow: hidden;">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-2" @click="loginDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <p class="display-1 font-weight-bold mt-4 mb-8 layout row justify-center">
            登陆页面
          </p>
        </v-card-text>
        <v-form ref="loginForm" v-model="valid" lazy-validation novalidate="true">
          <v-text-field
            v-model="loginForm.username"
            outlined
            rounded
            dense
            :counter="10"
            required
            type="text"
            label="账号"
            class="mx-4"
            prepend-icon="mdi-account"
            :rules="[(v) => !!v || '用户名必填', (v) => (v && v.length <= 10) || '不能超过10位']"
          />
          <v-text-field
            v-model="loginForm.password"
            outlined
            rounded
            dense
            required
            label="密码"
            class="mx-4"
            :counter="10"
            type="password"
            prepend-icon="mdi-lock"
            :rules="[(v) => !!v || '密码必填', (v) => (v && v.length <= 10) || '不能超过10位']"
          />
          <v-row justify="space-around">
            <v-checkbox v-model="loginForm.remember" label="记住密码"></v-checkbox>
            <v-checkbox v-model="loginForm.autoLogin" label="自动登录"></v-checkbox>
          </v-row>
        </v-form>
        <p v-if="loginFail" class="caption text-center ma-0 red--text">
          {{ result.msg }}
        </p>
        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <v-row class="mx-2">
                <v-col cols="12" class="layout column justify-center">
                  <v-btn @click="login">登陆</v-btn>
                </v-col>
              </v-row>

              <!-- 注册弹窗 -->
              <v-dialog v-model="registerDialog" width="300" persistent origin="center center">
                <template v-slot:activator="{ on }">
                  <v-row class="mx-2">
                    <v-col cols="12" class="layout column justify-center" @click="registerDialog = true">
                      <v-btn v-on="on">注册</v-btn>
                    </v-col>
                  </v-row>
                </template>

                <v-card light height="100%" style="overflow: hidden;">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-2" @click="registerDialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-card-title>
                    注册
                  </v-card-title>
                  <v-form>
                    <v-text-field
                      v-model.trim="registerForm.username"
                      dense
                      rounded
                      outlined
                      required
                      persistent-hint
                      hint="必填"
                      type="text"
                      label="账号"
                      class="mx-4"
                      :counter="10"
                      validate-on-blur
                      prepend-icon="mdi-account"
                      :error-messages="registerForm.usernameErrors"
                    />
                    <v-text-field
                      v-model="registerForm.password"
                      outlined
                      rounded
                      dense
                      persistent-hint
                      :counter="10"
                      required
                      hint="必填"
                      label="密码"
                      class="mx-4"
                      type="password"
                      prepend-icon="mdi-lock"
                      :rules="[(v) => !!v || '密码必填', (v) => (v && v.length <= 10) || '不能超过10位']"
                    />
                    <v-text-field
                      v-model="registerForm.repeatPassword"
                      dense
                      outlined
                      rounded
                      required
                      :counter="10"
                      class="mx-4"
                      label="确认密码"
                      type="password"
                      prepend-icon="mdi-lock"
                      :error-messages="registerForm.repeatPasswordErrors"
                    />
                    <v-text-field
                      v-model="registerForm.email"
                      outlined
                      rounded
                      dense
                      persistent-hint
                      type="email"
                      label="邮箱"
                      hint="选填"
                      class="mx-4"
                      prepend-icon="mdi-email"
                      :error-messages="registerForm.emailErrors"
                    />
                    <v-text-field
                      v-model.number="registerForm.phone"
                      outlined
                      rounded
                      dense
                      :counter="11"
                      persistent-hint
                      type="tel"
                      hint="选填"
                      class="mx-4"
                      label="手机号"
                      prepend-icon="mdi-cellphone"
                      :error-messages="registerForm.phoneErrors"
                    />
                    <p class="caption text-center ma-0 red--text">
                      {{ result.msg }}
                    </p>
                    <v-card-actions>
                      <v-row>
                        <v-row class="mx-2">
                          <v-col cols="12" class="layout column justify-center">
                            <v-btn :disabled="!valid" @click="register">
                              提交
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-row>
                    </v-card-actions>
                  </v-form>
                </v-card>

                <v-snackbar v-model="snackbar" :timeout="timeout">
                  {{ result.msg }}
                  <v-btn v-show="!registerFail" text @click=";(snackbar = false), (registerDialog = false)">
                    去登陆
                  </v-btn>
                  <v-btn v-show="registerFail" text @click="snackbar = false">
                    关闭
                  </v-btn>
                </v-snackbar>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn icon style="-webkit-app-region: no-drag;" @click="min">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn icon style="-webkit-app-region: no-drag;" @click="max">
      <v-icon>{{ isMax ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}</v-icon>
    </v-btn>
    <v-btn icon style="-webkit-app-region: no-drag;" @click="openCloseDialog">
      <v-icon>mdi-close</v-icon>
    </v-btn>

    <v-dialog v-model="logoutDialog" width="300">
      <v-card height="100%">
        <v-card-title class="align-center red--text">
          确认退出账号？
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn class="ma-4" color="primary" @click="logoutDialog = false">
            返回
          </v-btn>
          <v-btn class="ma-4" color="error" @click="logout">
            退出
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="closeDialog" width="300">
      <v-card height="100%">
        <v-card-title class="align-center red--text">
          确认关闭菜狗投注？
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn class="ma-4" color="primary" @click="closeDialog = false">
            返回
          </v-btn>
          <v-btn class="ma-4" color="error" @click="close">
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="logoutWithConnectDialog" width="300">
      <v-card height="100%">
        <v-card-title class="align-center red--text">
          当前有方案在运行，停止所有运行中的方案才能退出
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn class="ma-4" color="primary" @click="logoutWithConnectDialog = false">
            返回
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
<script>
import _ from 'underscore'
import { mapState, mapGetters, mapActions } from 'vuex'
import { login, logout, register, getUser, getUserByUsername } from '@/api/user'
import { min, max, unmax, close, ismax, hide } from '@/utils/renderer'
export default {
  data: () => ({
    valid: true,
    snackbar: false,
    timeout: 0,
    key: '',
    loginDialog: false,
    logoutDialog: false,
    logoutWithConnectDialog: false,
    closeDialog: false,
    activeDialog: false,
    registerDialog: false,
    registerAlert: false,
    loginForm: {
      username: '',
      password: '',
      remember: '',
      autoLogin: ''
    },
    registerForm: {
      username: '',
      usernameErrors: [],
      password: '',
      passwordErrors: [],
      repeatPassword: '',
      repeatPasswordErrors: [],
      email: '',
      emailErrors: [],
      phone: '',
      phoneErrors: []
    },
    result: {
      code: '',
      msg: '',
      data: {
        userId: '',
        username: '',
        token: ''
      }
    },
    loginFail: false,
    registerFail: false,
    isMax: false,
    version: require('root/package.json').version
  }),
  computed: {
    ...mapState('user', ['username']),
    ...mapGetters('user', ['isLogin', 'isAGActive', 'isBBINActive', 'isRMActive']),
    ...mapState('scheme', ['operationList']),
    isRecharge() {
      return this.isAGActive || this.isBBINActive || this.isRMActive
    }
  },
  watch: {
    loginForm: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.loginFail = false
        }
      }
    },
    'registerForm.username'(v) {
      this.debouncedCheckUsername(v)
    },
    'registerForm.repeatPassword'(v) {
      this.debouncedRepeatPassword(v)
    },
    'registerForm.phone'(v) {
      this.debouncedPhone(v)
    },
    'registerForm.email'(v) {
      this.debouncedEmail(v)
    }
  },
  created() {
    this.debouncedCheckUsername = _.debounce(this.checkUsername, 500)
    this.debouncedRepeatPassword = _.debounce(this.checkRepeatPassword, 500)
    this.debouncedPhone = _.debounce(this.checkPhone, 1000)
    this.debouncedEmail = _.debounce(this.checkEmail, 1000)
  },
  mounted() {
    window.onresize = () => {
      this.isMax = ismax()
    }
  },
  methods: {
    ...mapActions('user', ['addUsername', 'addToken', 'logoutActions', 'addUser']),
    min() {
      min()
    },
    max() {
      this.isMax ? unmax() : max()
    },
    close() {
      close()
    },
    async login() {
      if (this.$refs.loginForm.validate()) {
        const result = await login({
          username: this.loginForm.username,
          password: this.loginForm.password,
          rememberMe: this.loginForm.autoLogin
        })
        if (result.code === 0) {
          this.addUsername(this.loginForm.username)
          this.addToken(result.data)
          const res = await getUserByUsername({
            username: this.loginForm.username
          })
          if (res.code === 0) {
            this.addUser(res.data)
          }
          this.loginDialog = false
          this.loginFail = false
        } else {
          this.result = result
          this.loginFail = true
        }
      }
    },
    openLogoutDialog() {
      this.operationList.length ? (this.logoutWithConnectDialog = true) : (this.logoutDialog = true)
    },
    openCloseDialog() {
      this.operationList.length ? (this.logoutWithConnectDialog = true) : (this.closeDialog = true)
    },
    async logout() {
      const result = await logout()
      if (result.code === 0) {
        this.logoutActions()
        this.logoutDialog = false
        await this.$router.push('/')
      }
    },
    async register() {
      if (this.registerForm.username === '') {
        this.registerForm.usernameErrors = '用户名不能为空'
      } else if (this.registerForm.username.length > 10) {
        this.registerForm.usernameErrors = '长度不能超过10位'
      } else if (this.registerForm.password === '') {
        this.registerForm.passwordErrors = '密码不能为空'
      } else if (this.registerForm.password.length > 10) {
        this.registerForm.passwordErrors = '长度不能超过10位'
      } else if (this.registerForm.repeatPassword === '') {
        this.registerForm.repeatPasswordErrors = '密码不能为空'
      } else if (this.registerForm.repeatPassword.length > 10) {
        this.registerForm.repeatPasswordErrors = '长度不能超过10位'
      } else if (this.registerForm.repeatPassword !== this.registerForm.password) {
        this.registerForm.repeatPasswordErrors = '输入密码不一致'
      } else if (this.registerForm.email.trim() !== '' && !this.isEmail(this.registerForm.email)) {
        this.registerForm.emailErrors = '邮箱格式不正确'
      } else if (this.registerForm.phone !== '' && !this.isPhone(this.registerForm.phone)) {
        this.registerForm.phoneErrors = '手机格式不正确'
      } else {
        const res = await register({
          username: this.registerForm.username,
          password: this.registerForm.password,
          email: this.registerForm.email,
          phone: this.registerForm.phone
        })
        this.result = res
        this.registerFail = res.code !== 0
        if (res.code === 0) this.registerDialog = false
      }
    },
    sendKey() {},
    async checkUsername(username) {
      if (username === '') {
        this.registerForm.usernameErrors = '用户名不能为空'
      } else if (username && username.length > 10) {
        this.registerForm.usernameErrors = '长度不能超过10位'
      } else {
        const res = await getUser({
          username: username
        })
        this.registerForm.usernameErrors = res.code === 0 ? [] : res.msg
      }
    },
    checkRepeatPassword(repeatPassword) {
      if (repeatPassword.trim() === '') {
        this.registerForm.repeatPasswordErrors = '用户名不能为空'
      } else if (repeatPassword.length > 10) {
        this.registerForm.repeatPasswordErrors = '长度不能超过10位'
      } else {
        this.registerForm.repeatPasswordErrors = this.registerForm.password === repeatPassword ? [] : '输入密码不一致'
      }
    },
    async checkPhone(phone) {
      if (phone !== '') {
        if (!this.isPhone(phone)) {
          this.registerForm.phoneErrors = '手机格式不正确'
        } else {
          const res = await getUser({
            phone: phone
          })
          this.registerForm.phoneErrors = res.code === 0 ? [] : res.msg
        }
      }
    },
    async checkEmail(email) {
      if (email.trim() !== '') {
        if (!this.isEmail(email)) {
          this.registerForm.emailErrors = 'email格式不正确'
        } else {
          const res = await getUser({
            email: email
          })
          this.registerForm.emailErrors = res.code === 0 ? [] : res.msg
        }
      }
    },
    isEmail(email) {
      return /.+@.+..+/.test(email)
    },
    isPhone(phone) {
      return /^1[3456789]\d{9}$/.test(phone)
    }
  }
}
</script>
