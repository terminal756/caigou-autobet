<template>
  <v-app>
    <Header />
    <Side />
    <v-main>
      <v-toolbar flat>
        <v-btn color="primary" to="/schemeDetails">创建方案</v-btn>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="输入方案名称搜索" dense solo hide-details />
      </v-toolbar>
      <v-card height="100%" flat>
        <v-data-table
          :headers="headers"
          :items="schemes"
          :search="search"
          :height="currentHeight - 50"
          dense
          fixed-header
          hide-default-footer
          disable-pagination
        >
          <template v-slot:item.url="{ item }">
            <v-btn class="my-2" @click="openUrl(item)">
              {{ isSchemeLogin(item) ? '已登录游戏' : '未登录游戏' }}
            </v-btn>
          </template>
          <template v-slot:item.operation="{ item }">
            <template v-if="!isSchemeLogin(item)">
              <v-card-text>先登录游戏</v-card-text>
            </template>
            <template v-else>
              <v-btn
                class="my-2"
                :to="{
                  name: 'SchemeOperation',
                  params: { schemeId: item.schemeId }
                }"
                :disabled="isClick(item)"
              >
                {{ isOperation(item) ? '执行中' : '执行方案' }}
              </v-btn>
            </template>
          </template>
          <template v-slot:item.edit="{ item }">
            <router-link
              :to="{
                name: 'SchemeDetails',
                params: { schemeId: item.schemeId }
              }"
              tag="button"
              :disabled="isOperation(item)"
            >
              <v-icon small class="mr-2">
                mdi-pencil
              </v-icon>
            </router-link>
            <v-icon small :disabled="isOperation(item)" @click="openDeleteScheme(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog v-model="deleteSchemeDialog" persistent max-width="300">
        <v-card height="100%">
          <v-card-title class="align-center">
            确认删除该方案
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
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Side from '@/components/main/Side'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { mapState, mapActions, mapGetters } from 'vuex'
const { remote, ipcRenderer } = window.require('electron')
export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    schemes: [],
    currentHeight: null,
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
      {
        text: '运行方案',
        value: 'operation',
        filterable: false,
        sortable: false
      },
      { text: '编辑', value: 'edit', filterable: false, sortable: false }
    ],
    editSchemeObj: {},
    deleteSchemeObj: {},
    deleteSchemeDialog: false
  }),
  computed: {
    ...mapState('site', ['siteList']),
    ...mapState('scheme', ['schemeList', 'operationList']),
    ...mapState('gameInfo', ['gameInfo']),
    ...mapState('ag', ['config', 'room'])
  },
  watch: {
    schemeList: {
      deep: true,
      handler() {
        this.schemes = this.schemeList.map((s) => {
          const scheme = {}
          scheme.schemeId = s.schemeId
          scheme.schemeName = s.schemeName
          if (s.gameType === 1) {
            scheme.gameType = 'BBIN'
          } else if (s.gameType === 2) {
            scheme.gameType = 'AG'
          } else {
            scheme.gameType = 'RM'
          }
          if (s.sites) {
            scheme.sites = JSON.parse(s.sites).map((siteId) => this.siteList.find((site) => site.siteId === siteId))
          }
          return scheme
        })
      }
    }
  },
  created() {
    // 监听从主进程中转发送过来的游戏登录信息
    ipcRenderer.on('gameInfo', (event, message) => {
      const gameInfo = JSON.parse(message)
      const scheme = this.schemeList.find((s) => s.schemeId === gameInfo.schemeId)
      // console.log('监听到的消息', scheme)
      switch (scheme.gameType) {
        case 2:
          this.addAGInfo(gameInfo)
          break
      }
    })
  },
  mounted() {
    this.$nextTick(() => {
      if (this.schemeList.length) {
        this.schemes = this.schemeList.map((s) => {
          const scheme = {}
          scheme.schemeId = s.schemeId
          scheme.schemeName = s.schemeName
          if (s.gameType === 1) {
            scheme.gameType = 'BBIN'
          } else if (s.gameType === 2) {
            scheme.gameType = 'AG'
          } else {
            scheme.gameType = 'RM'
          }
          if (s.sites) {
            scheme.sites = JSON.parse(s.sites).map((siteId) => this.siteList.find((site) => site.siteId === siteId))
          }
          return scheme
        })
      }
    })
    this.currentHeight = window.innerHeight - 100
    window.onresize = () => {
      this.currentHeight = window.innerHeight - 100
    }
  },
  methods: {
    ...mapActions('scheme', ['deleteSchemeAsync']),
    ...mapActions('gameInfo', ['addAGInfo']),
    openUrl(item) {
      const view = new remote.BrowserWindow({
        width: 1000,
        height: 600,
        center: true,
        frame: false, // 无边框
        webPreferences: {
          webviewTag: true,
          nodeIntegration: true,
          enableRemoteModule: true
        }
      })
      view.removeMenu()
      const isDev = process.env.VUE_APP_ENV === 'development'
      if (isDev) {
        view.loadURL('http://localhost:8080/index.html#/siteview')
        view.webContents.openDevTools()
      } else {
        view.loadURL(`file://${__dirname}/index.html#/siteview`)
      }
      // 共享参数
      // console.log('remote参数:', item)
      remote.getGlobal('scheme').scheme = item
    },
    isSchemeLogin(scheme) {
      return this.gameInfo.find((i) => i.schemeId === scheme.schemeId)
        ? this.gameInfo.find((i) => i.schemeId === scheme.schemeId).agInfo.length === scheme.sites.length
        : false
    },
    isOperation(scheme) {
      return !!this.operationList.find((o) => o.schemeId === scheme.schemeId)
    },
    isClick(scheme) {
      return !!(this.isSchemeLogin(scheme) && this.isOperation(scheme))
    },
    openDeleteScheme(scheme) {
      this.deleteSchemeObj = scheme
      this.deleteSchemeDialog = true
    },
    async deleteScheme() {
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
</script>
