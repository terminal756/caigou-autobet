<template>
  <v-app>
    <Header />
    <Side />
    <Footer />
    <v-content>
      <v-container class="fill-height d-flex justify-center align-center">
        <v-card hover width="400" class="pa-4 ma-4">
          <v-card-title>使用流程</v-card-title>
          <v-card-text class="font-weight-black">
            <p>1. 注册</p>
            <p>2. 登陆</p>
            <p>3. 购买激活码</p>
            <p>4. 激活账号</p>
            <p>5. 创建网站</p>
            <p>6. 创建方案</p>
            <p>7. 执行方案</p>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-btn
              class="success"
              @click="openActive"
            >激活账户</v-btn
            >
            <v-btn class="primary">购买激活码</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
    <v-dialog v-model="activeDialog" width="400">
      <v-card class="pa-4">
        <v-card-title>
          <v-text-field
            v-model="key"
            required
            label="请输入激活码"
            :error-messages="errorMsg"
          />
        </v-card-title>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn color="success" @click="active">激活</v-btn>
          <v-btn color="primary" @click="activeDialog = false">返回</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="timeout" light rounded>
      未登录
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          mdi-close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import Side from '../components/main/Side'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'

import { active } from '../api/user'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    activeDialog: false,
    key: null,
    errorMsg: null,
    snackbar: false,
    timeout: 3000
  }),

  computed: {
    ...mapGetters('user', ['isLogin'])
  },

  methods: {
    ...mapActions('user', ['addUser']),

    openActive() {
      this.isLogin ? this.activeDialog = true : this.snackbar = true
    },

    async active() {
      if (!this.key) {
        this.errorMsg = '激活码必填'
      } else if (this.key.length !== 32) {
        this.errorMsg = '激活码长度不正确'
      } else {
        const res = await active({ active: this.key })
        console.log(res)
        if (res.code === 0) {
          this.addUser(res.data)
          this.activeDialog = false
        } else {
          this.errorMsg = res.msg
        }
      }
    }
  }
}
</script>
