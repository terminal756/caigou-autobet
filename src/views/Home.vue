<template>
  <v-app>
    <Header />
    <Side />
    <Footer />
    <v-content>
      <v-container class="fill-height d-flex justify-center align-center">
        <v-card hover width="400" class=" pa-4 ma-4">
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
            <v-btn>购买激活码</v-btn>
            <v-btn @click="activeDialog = !activeDialog">激活账户</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
    <v-dialog v-model="activeDialog" width="400">
      <v-card class="pa-4 ma-4">
        <v-card-text>
          <v-text-field v-model="key" required label="请输入激活码" flat />
        </v-card-text>
        <v-card-actions>
          <v-btn>提交激活码</v-btn>
          <v-btn @click="activeDialog = false">返回</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Header from '../components/main/Header'
import Side from '../components/main/Side'
import Footer from '../components/main/Footer'

export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    activeDialog: false,
    key: null
  }),
  computed: {},
  mounted() {},
  methods: {}
}
</script>
