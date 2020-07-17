<template>
  <v-app-bar app clipped-left height="36px" style="-webkit-app-region: drag; -webkit-user-select: none;">
    <span class="pr-4 font-weight-black">菜狗投注</span>
    <span>版本 v{{ version }}</span>
    <v-spacer />

    <span v-show="isLogin && isLogin != null">{{ getUsername }}</span>

    <v-dialog v-model="login_dialog" width="300" persistent origin="center center">
      <template v-slot:activator="{ on }">
        <v-btn v-show="!isLogin" text style="-webkit-app-region: no-drag;" v-on="on">未登录</v-btn>
      </template>
      <v-card height="100%" style="overflow: hidden;">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-2" @click="login_dialog = false">
            <v-icon>close</v-icon>
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
            prepend-icon="person"
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
            prepend-icon="lock"
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

              <v-dialog v-model="register_dialog" width="300" persistent origin="center center">
                <template v-slot:activator="{ on }">
                  <v-row class="mx-2">
                    <v-col cols="12" class="layout column justify-center" @click="register_dialog = true">
                      <v-btn v-on="on">注册</v-btn>
                    </v-col>
                  </v-row>
                </template>

                <v-card light height="100%" style="overflow: hidden;">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-2" @click="register_dialog = false">
                      <v-icon>close</v-icon>
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
                      prepend-icon="person"
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
                      prepend-icon="lock"
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
                      prepend-icon="lock"
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
                            <v-btn :disabled="!valid" @click="register">提交</v-btn>
                          </v-col>
                        </v-row>
                      </v-row>
                    </v-card-actions>
                  </v-form>
                </v-card>

                <v-snackbar v-model="snackbar" :timeout="timeout">
                  {{ result.msg }}
                  <v-btn v-show="!registerFail" text @click=";(snackbar = false), (register_dialog = false)">
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

    <!-- 输入激活码弹窗 -->
    <v-dialog v-model="active_dialog" width="300" persistent origin="center center">
      <template v-slot:activator="{ on }">
        <v-btn text style="-webkit-app-region: no-drag;" v-on="on">未激活</v-btn>
      </template>

      <v-card style="overflow: hidden;">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="mr-2" @click="active_dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="key" required label="请输入激活码"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <v-row class="mx-2">
                <v-col
                  cols="12"
                  class="layout column justify-center"
                  @click=";(active_dialog = false), sendKey(), (key = '')"
                >
                  <v-btn>提交激活码</v-btn>
                </v-col>
              </v-row>
              <v-row class="mx-2">
                <v-col cols="12" class="layout column justify-center">
                  <v-btn>购买激活码</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn v-show="isLogin" icon style="-webkit-app-region: no-drag;" @click="logout">
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>

    <!--        <v-btn icon-->
    <!--               @click="$vuetify.theme.dark = !$vuetify.theme.dark"-->
    <!--               style="-webkit-app-region: no-drag;">-->
    <!--            <v-icon>mdi-brightness-6</v-icon>-->
    <!--        </v-btn>-->
    <v-btn icon style="-webkit-app-region: no-drag;" @click="min">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn icon style="-webkit-app-region: no-drag;" @click="max">
      <v-icon>{{ this.isMax ? 'fullscreen_exit' : 'fullscreen' }}</v-icon>
    </v-btn>
    <v-btn icon style="-webkit-app-region: no-drag;" @click="close">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import _ from 'underscore'
import { mapGetters, mapMutations } from 'vuex'
import { login, logout, register, getUserByParam } from '../../api/api'

const RendererWindowUtils = require('../../utils/RendererWindowUtils')

export default {
  data: () => ({
    valid: true,
    snackbar: false,
    timeout: 0,
    key: '',
    login_dialog: false,
    active_dialog: false,
    register_dialog: false,
    register_alert: false,
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
    version: require('../../../package.json').version
  }),

  created() {
    this.debouncedCheckUsername = _.debounce(this.checkUsername, 500)
    this.debouncedRepeatPassword = _.debounce(this.checkRepeatPassword, 500)
    this.debouncedPhone = _.debounce(this.checkPhone, 1000)
    this.debouncedEmail = _.debounce(this.checkEmail, 1000)
  },

  mounted() {
    window.onresize = () => {
      this.isMaxWindow()
    }
  },
  computed: {
    ...mapGetters('user', ['isLogin', 'getUsername'])
  },

  watch: {
    loginForm: {
      deep: true, // 深度监听
      immediate: true, // 立即执行
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

  methods: {
    ...mapMutations('user', ['SET_USERNAME', 'SET_TOKEN', 'IS_LOGIN']),

    min() {
      RendererWindowUtils.minWindow()
    },
    max() {
      RendererWindowUtils.maxWindow()
    },
    close() {
      RendererWindowUtils.hide()
    },

    async login() {
      if (this.$refs.loginForm.validate()) {
        await login({
          username: this.loginForm.username,
          password: this.loginForm.password,
          rememberMe: this.loginForm.autoLogin
        }).then((res) => {
          if (res.code === 0) {
            this.login_dialog = false
            this.loginFail = false
            this.SET_USERNAME(this.loginForm.username)
            this.SET_TOKEN(res.data)
            this.IS_LOGIN(true)
          } else {
            this.result = res
            this.loginFail = true
          }
        })
      }
    },
    async logout() {
      await logout().then((res) => {
        if (res.code === 0) {
          this.SET_USERNAME('')
          this.SET_TOKEN('')
          this.IS_LOGIN('')
        }
      })
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
      }
    },

    sendKey() {},
    isMaxWindow() {
      this.isMax = RendererWindowUtils.isMaxWindow()
    },
    async checkUsername(username) {
      if (username === '') {
        this.registerForm.usernameErrors = '用户名不能为空'
      } else if (username && username.length > 10) {
        this.registerForm.usernameErrors = '长度不能超过10位'
      } else {
        const res = await getUserByParam({ username: username })
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
          const res = await getUserByParam({ phone: phone })
          this.registerForm.phoneErrors = res.code === 0 ? [] : res.msg
        }
      }
    },

    async checkEmail(email) {
      if (email.trim() !== '') {
        if (!this.isEmail(email)) {
          this.registerForm.emailErrors = 'email格式不正确'
        } else {
          const res = await getUserByParam({ email: email })
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
