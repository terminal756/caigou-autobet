<template>
  <v-app>
    <Header :openCardUrl="openCardUrl" />
    <Side />
    <Footer />
    <v-main>
      <v-container class="fill-height d-flex">
        <v-row>
          <v-col cols="12">
            <v-card flat width="400" class="pa-4 ma-4 d-flex justify-space-around">
              <v-btn @click="docuementUrl">使用说明文档</v-btn>
            </v-card>
          </v-col>
          <v-col cols="12">
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
                <v-btn class="success" @click="openActive">激活账户</v-btn>
                <v-btn class="primary" @click="openCardUrl">购买激活码</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-dialog v-model="activeDialog" width="600">
      <v-card class="pa-4">
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="4">
              <v-subheader class="font-weight-black">{{ hasReferrer ? '推荐人已绑定' : '推荐人选填' }}</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                dense
                flat
                v-model="referrer"
                required
                :error-messages="refererError"
                :disabled="hasReferrer"
              />
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="4">
              <v-subheader class="font-weight-black">激活码必填</v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field flat dense v-model="key" required :error-messages="keyError" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn color="success" @click="active">激活</v-btn>
          <v-btn color="primary" @click="activeDialog = false">返回</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="timeout" light rounded>
      未登录
      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" color="error" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import Side from '@/components/main/Side'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { mapActions, mapGetters, mapState } from 'vuex'
import { active, getUserByUsername, getUserById } from '@/api/user'
const { shell } = window.require('electron')

export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    key: null,
    referrer: null,
    refererError: null,
    keyError: null,
    snackbar: false,
    timeout: 3000,
    activeDialog: false
  }),

  computed: {
    ...mapGetters('user', ['isLogin']),
    ...mapState('user', ['userId', 'username', 'users']),

    user() {
      return this.users.find((u) => u.userId === this.userId)
    },

    hasReferrer() {
      return this.userId && this.user && this.user.referrer
    }
  },

  created() {
    if (this.isLogin) this.getReferrer()
  },
  mounted() {},
  watch: {},

  methods: {
    ...mapActions('user', ['addUser']),

    openActive() {
      this.isLogin ? (this.activeDialog = true) : (this.snackbar = true)
    },

    async getReferrer() {
      if (this.user.referrer) {
        const referrerUser = await getUserById(this.user.referrer)
        if (referrerUser.code === 0) {
          this.referrer = referrerUser.data
        }
      }
    },

    async active() {
      if (!this.key) {
        this.keyError = '激活码必填'
      } else if (this.key.length !== 32) {
        this.keyError = '激活码长度不正确'
      } else {
        if (this.referrer) {
          const userRes = await getUserByUsername({ username: this.referrer })
          if (userRes.code !== 0) {
            this.refererError = userRes.msg
          }
        }
        const activeRes = await active({ referrer: this.referrer, key: this.key })
        if (activeRes.code !== 0) {
          this.keyError = activeRes.msg
        } else {
          this.addUser(activeRes.data)
          this.activeDialog = false
          this.key = null
          this.keyError = null
          if (!this.hasReferrer) {
            this.referrer = null
          }
          this.refererError = null
        }
      }
    },
    openCardUrl() {
      const url = 'https://www.vqd.com/links/CBFFA5ED'
      shell.openExternal(url)
    },
    docuementUrl() {
      const url = 'https://docs.qq.com/doc/DSElXeFFNZmN0SEVx'
      shell.openExternal(url)
    }
  }
}
</script>
