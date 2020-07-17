<template>
  <v-app>
    <Header />
    <Side />
    <v-content>
      <v-card flat>
        <v-toolbar flat>
          <v-btn color="primary" to="/schemeDetails">创建方案</v-btn>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="输入方案名称搜索" dense solo hide-details />
        </v-toolbar>
        <v-card-text>
          <v-data-table hide-default-footer :headers="headers" :items="schemes" :search="search">
            <template v-slot:item.url="{ item }">
              <v-btn class="mr-2" @click="openUrl(item)">
                {{ isSchemeLogin(item) ? '已登录' : '未登录' }}
              </v-btn>
            </template>
            <template v-slot:item.operation="{ item }">
              <v-btn class="mr-2" @click="operation(item)">
                {{ isSchemeLogin(item) ? '已登录' : '未登录' }}
              </v-btn>
            </template>
            <template v-slot:item.edit="{ item }">
              <router-link :to="{ name: 'SchemeDetails', params: { schemeId: item.schemeId } }" tag="button">
                <v-icon small class="mr-2">
                  mdi-pencil
                </v-icon>
              </router-link>
              <v-icon small @click="openDeleteScheme(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
        <v-dialog v-model="deleteSchemeDialog" persistent max-width="300">
          <v-card height="100%">
            <v-card-title class="align-center">
              想清楚
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn class="ma-4" color="primary" @click="deleteSchemeDialog = false">
                返回
              </v-btn>
              <v-btn class="ma-4" color="error" @click="deleteScheme">
                删除
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Header from '../components/main/Header'
import Side from '../components/main/Side'
import Footer from '../components/main/Footer'
import { mapState, mapActions, mapGetters } from 'vuex'
import { remote, ipcRenderer } from 'electron'
export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    schemes: [],
    search: '',
    headers: [
      {
        text: '方案名称',
        align: 'start',
        sortable: false,
        value: 'schemeName'
      },
      { text: '游戏类型', value: 'gameType', filterable: false },
      { text: '登陆状态', value: 'url', filterable: false, sortable: false },
      { text: '运行方案', value: 'operation', filterable: false, sortable: false },
      { text: '编辑', value: 'edit', filterable: false, sortable: false }
    ],
    editSchemeObj: {},
    deleteSchemeObj: {},
    deleteSchemeDialog: false
  }),
  computed: {
    ...mapState('site', ['siteList']),
    ...mapState('scheme', ['schemeList']),
    ...mapState('gameInfo', ['info']),
    ...mapState('agConfig', ['agConfig', 'roomConfig'])
  },
  watch: {},
  created() {
    // 监听从主进程中转发送过来的游戏登录信息
    ipcRenderer.on('gameInfo', (event, message) => {
      const gameInfo = JSON.parse(message)
      const scheme = this.schemeList.find((s) => s.schemeId === gameInfo.schemeId)
      switch (scheme.gameType) {
        case 2:
          this.addAGInfo(gameInfo)
          break
      }
    })
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.schemeList.length)
      if (this.schemeList) {
        this.schemes = this.schemeList.map((s) => {
          const n = {}
          n.schemeId = s.schemeId
          n.schemeName = s.schemeName
          switch (s.gameType) {
            case 1:
              n.gameType = 'BBIN百家乐'
              break
            case 2:
              n.gameType = 'AG百家乐'
              break
            case 3:
              n.gameType = 'RM富豪棋牌扎金花'
              break
          }
          const siteArr = JSON.parse(s.sites)
          n.sites = siteArr.map((siteId) => {
            const site = this.siteList.find((s) => s.siteId === siteId)
            const remoteSite = {}
            remoteSite.siteId = siteId
            remoteSite.name = site.name
            remoteSite.url = site.url
            return remoteSite
          })
          return n
        })
      }
    })
  },
  methods: {
    ...mapActions('scheme', ['deleteSchemeAsync']),
    ...mapActions('gameInfo', ['addAGInfo']),
    openUrl(item) {
      const siteview = new remote.BrowserWindow({
        width: 1000,
        height: 600,
        center: true,
        frame: false, // 无边框
        webPreferences: {
          nodeIntegration: true,
          webviewTag: true
          // 预加载脚本
          // preload: path.resolve('src/components/preload/gameInfo.js')
        }
      })
      if (process.env.NODE_ENV !== 'production' && !process.env.IS_TEST) {
        siteview.webContents.openDevTools()
      }
      const betUrl =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:8080/siteview'
          : `file://${__dirname}/index.html#/siteview`
      siteview.loadURL(betUrl)
      siteview.removeMenu()
      // 共享参数
      remote.getGlobal('scheme').scheme = item
    },
    isSchemeLogin(scheme) {
      return this.info.find((i) => i.schemeId === scheme.schemeId)
        ? this.info.find((i) => i.schemeId === scheme.schemeId).agInfo.length === scheme.sites.length
        : false
    },
    operation(scheme) {},
    openDeleteScheme(scheme) {
      this.deleteSchemeObj = scheme
      this.deleteSchemeDialog = true
    },
    async deleteScheme() {
      if (this.schemes) {
        const schemeObj = {
          schemeId: this.deleteSchemeObj.schemeId,
          index: this.schemes.findIndex((s) => s.schemeId === this.deleteSchemeObj.schemeId)
        }
        const res = await this.deleteSchemeAsync(schemeObj)
        if (res.code === 0) {
          this.deleteSchemeDialog = false
        }
      }
    }
  }
}
</script>
