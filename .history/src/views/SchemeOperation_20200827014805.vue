<template>
  <v-app>
    <Header />
    <Side />
    <Footer />
    <v-main>
      <v-card height="100%" flat>
        <template v-if="schemes.length">
          <v-tabs v-model="tab" show-arrows background-color="primary">
            <v-tab v-for="scheme in schemes" :key="scheme.schemeId">
              {{ scheme.schemeName }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="scheme in schemes" :key="scheme.schemeId">
              <v-card-text class="pa-0 ma-0">
                <v-card-actions>
                  <v-btn color="error" :disabled="!scheme.isAllConnect" @click="stopScheme(scheme.schemeId)">
                    停止运行
                  </v-btn>
                  <v-card-text class="red--text font-weight-black">
                    {{ `止水金额：${scheme.totalLiushui}` }}
                  </v-card-text>
                  <v-card-text v-if="!scheme.isAllConnect" class="red--text font-weight-black">
                    游戏房间连接中，勿动
                  </v-card-text>
                </v-card-actions>
                <v-card flat>
                  <v-card-text>
                    <v-card :height="currentHeight - 220" flat>
                      <table>
                        <thead>
                          <tr v-for="(site, i) in currentScheme.sites" :key="i">
                            <th class="red--text font-weight-black">
                              {{
                                `网站：${site.name}——余额：${
                                  site.balance === undefined ? '读取中...' : site.balance
                                }——当前流水：${site.amount === undefined ? '读取中...' : site.amount}`
                              }}
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          style="overflow: auto; display: block;"
                          :style="{ height: `${currentHeight - currentHeadHeight - 270}px` }"
                        >
                          <tr v-for="(log, i) in currentWebSocketLog(scheme.schemeId)" :key="i">
                            <td>{{ log.msg }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </v-card>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </template>
        <template v-else>
          <v-card height="100%" class="d-flex text-center justify-center">
            <v-card-title>
              当前没有方案在运行
              <br />
              <br />
              去创建方案并点击运行
            </v-card-title>
          </v-card>
        </template>
      </v-card>
      <v-dialog v-model="stopSchemeDialog" persistent max-width="300">
        <v-card class="pa-2">
          <v-card-title class="text-center">
            确认停止执行该方案
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="stopSchemeDialog = false">
              返回
            </v-btn>
            <v-btn color="error" @click="stop">
              停止运行
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>
<script>
import _ from 'lodash'
import moment from 'moment'
import * as cmd from '@/utils/ag/cmd'
import { loginRoom } from '@/utils/ag/room'
import Side from '@/components/main/Side'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { mapState, mapActions, mapGetters } from 'vuex'
import { doSend } from '@/utils/ag/static/Cube-Socket-Live.v1943'
export default {
  name: 'SchemeOperation',
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    tab: null,
    schemes: [],
    gmcodeObj: [],
    currentHeight: null,
    currentHeadHeight: null,
    stopSchemeDialog: false,
    currentSchemeId: null,
    currentSchemeIndex: null,
    currentGameCode: null,
    siteEven: [],
    siteOdd: []
  }),
  computed: {
    ...mapState('site', ['siteList']),
    ...mapState('gameInfo', ['gameInfo']),
    ...mapState('ag', ['config', 'webSocketLog']),
    ...mapState('scheme', ['schemeList', 'operationList']),
    ...mapGetters('scheme', ['currentOperation']),
    ...mapGetters('ag', ['currentWebSocketLog']),
    currentScheme() {
      return this.operationList[this.tab] || []
    }
  },
  watch: {
    $route: {
      handler(route) {
        if (Object.keys(route.params).length !== 0) {
          console.log('执行 watch $route')
          setTimeout(() => {
            const operation = this.operationList.find((o) => o.schemeId === route.params.schemeId)
            if (!operation) {
              this.addOperationScheme()
              this.socket()
            }
          })
        }
      },
      immediate: true
    },
    schemes: {
      handler(val, oldVal) {
        val.map((o) => {
          // 确认该方案下的所有网站全部连接成功
          if (o.sites.every((s) => s.isConnect)) this.$set(o, 'isAllConnect', true)
        })
      },
      deep: true,
      immediate: true
    },
    gmcode() {
      const gmcode = this.gmcode.pop()
      const scheme = this.schemes.find((s) => s.schemeId === gmcode.schemeId)
      if (scheme.isAllConnect) {
        console.log('开始下注')
        if (o.amountType === 1) {
          const arr = o.randomRange.split('*').map(Number)
          let amount = Math.floor(Math.random() * (arr[1] - arr[0])) + arr[0]
          amount = amount < 20 ? 20 : amount
          amount = amount % 10 === 0 ? amount : amount + 10 - (amount % 10)

          const type = [1, 2]
          const type1 = type[Math.floor(Math.random() * type.length)]
          let type2
          type1 === 1 ? (type2 = 2) : (type2 = 1)

          const siteEven = o.sites.filter((s, i) => i % 2 === 0)
          const siteOdd = o.sites.filter((s, i) => i % 2 !== 0)

          siteEven.map((even) => {
            if (even.roomWebSocket && even.roomWebSocket.readyState === 1) {
              /*
                        计算下注金额的临界值
                        if (even.amount + amount >= this.currentScheme.totalLiushui) {
                          amount = this.currentScheme.totalLiushui - even.amount
                          amount = amount < 20 ? 20 : amount
                          amount = amount % 10 === 0 ? amount + 10 : amount - (amount % 10)
                        }
                      */
              even.roomWebSocket.send(
                doSend(
                  cmd.gameBetExt(s.gmcode, type1, amount),
                  even.socketId,
                  even.userEncryptKey,
                  even.userDecryptKey,
                  even.broadcastDecryptKey
                ).buffer
              )
              this.$set(even, 'amount', even.amount + amount)
              this.updateOperation(o)
              this.addWebSocketLog({
                schemeId: o.schemeId,
                msg: `${moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')}——网站：${even.name}——房间：${
                  even.vid
                }，局号：${s.gmcode}，下注：${type1 === 1 ? '庄' : '闲'}，金额：${amount}`
              })
            }
          })
          siteOdd.map((odd) => {
            if (odd.roomWebSocket && odd.roomWebSocket.readyState === 1) {
              /*
                    计算下注金额的临界值
                    if (odd.amount + amount >= this.currentScheme.totalLiushui) {
                      amount = this.currentScheme.totalLiushui - odd.amount
                      amount = amount < 20 ? 20 : amount
                      amount = amount % 10 === 0 ? amount + 10 : amount - (amount % 10)
                    }
                  */
              odd.roomWebSocket.send(
                doSend(
                  cmd.gameBetExt(s.gmcode, type2, amount),
                  odd.socketId,
                  odd.userEncryptKey,
                  odd.userDecryptKey,
                  odd.broadcastDecryptKey
                ).buffer
              )
              this.$set(odd, 'amount', odd.amount + amount)
              this.updateOperation(o)
              this.addWebSocketLog({
                schemeId: o.schemeId,
                msg: `${moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')}——网站：${odd.name}——房间：${
                  odd.vid
                }，局号：${s.gmcode}，下注：${type2 === 1 ? '庄' : '闲'}，金额：${amount}`
              })
            }
          })
        } else if (o.amountType === 2) {
          console.log(2)
        } else {
          console.log(3)
        }
      }
    }
  },
  created() {
    console.log('执行created')
  },
  mounted() {
    console.log('执行 mounted')
    if (this.tab) this.currentHeadHeight = 22 * this.operationList[this.tab].sites.length
    this.currentHeight = window.innerHeight
    window.onresize = () => {
      this.currentHeight = window.innerHeight
    }
  },
  methods: {
    ...mapActions('scheme', ['addOperation', 'deleteOperation', 'updateOperation']),
    ...mapActions('ag', ['addWebSocketLog', 'deleteWebSocketLog']),

    addOperationScheme() {
      console.log('执行 method socket')
      const schemeId = this.$route.params.schemeId
      const schemeState = this.schemeList.find((s) => s.schemeId === schemeId)
      schemeState.sites = JSON.parse(schemeState.sites)
      if ((schemeState.amountType === 1 || schemeState.amountType === 2) && schemeState.sites.length % 2 !== 0) {
        schemeState.sites.splice(schemeState.sites.length - 1, 1)
      }
      schemeState.sites = schemeState.sites.map((siteId) => {
        return this.siteList.find((s) => s.siteId === siteId)
      })
      schemeState.isAllConnect = false
      this.addOperation(schemeState)
    },
    socket() {
      const schemeId = this.$route.params.schemeId
      const gameInfo = this.gameInfo.find((i) => i.schemeId === schemeId)
      const scheme = this.operationList.find((o) => o.schemeId === schemeId)
      if (this.schemes.length) {
        if (!this.schemes.some((s) => s.schemeId === schemeId)) this.schemes.push(scheme)
      } else {
        this.schemes.push(scheme)
      }
      const agInfo = scheme.sites.map((s) => {
        return gameInfo.agInfo.find((a) => a.siteId === s.siteId)
      })
      const room = JSON.parse(scheme.room)
      const roomRandom = room[Math.floor(Math.random() * room.length)]
      const loginPort = this.config.find((c) => c.hostType === 'login').port
      const plazaPort = this.config.find((c) => c.hostType === 'plaza').port
      const roomPort = this.config.filter((c) => c.vids).find((c) => c.vids.find((v) => v === roomRandom)).port
      agInfo.map(async (agConfig) => {
        const site = scheme.sites[scheme.sites.findIndex((s) => s.siteId === agConfig.siteId)]
        this.$set(agConfig, 'loginPort', loginPort)
        this.$set(agConfig, 'plazaPort', plazaPort)
        this.$set(agConfig, 'vid', roomRandom)
        this.$set(agConfig, 'roomPort', roomPort)
        this.$set(site, 'vid', roomRandom)
        this.$set(site, 'amount', 0)
        const result = await loginRoom(
          agConfig,
          (msg) => {
            this.addWebSocketLog({
              schemeId: scheme.schemeId,
              msg: `${moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')}——网站：${site.name}——` + msg
            })
          },
          (balance) => {
            this.$set(site, 'balance', balance)
            this.updateOperation(scheme)
          },
          (gmcode) => {
            this.gmcode.push({ schemeId: schemeId, gmcode: gmcode })
          },
          (userEncryptKey) => {
            this.$set(site, 'userEncryptKey', userEncryptKey)
            this.updateOperation(scheme)
          },
          (userDecryptKey) => {
            this.$set(site, 'userDecryptKey', userDecryptKey)
            this.updateOperation(scheme)
          },
          (broadcastDecryptKey) => {
            this.$set(site, 'broadcastDecryptKey', broadcastDecryptKey)
            this.updateOperation(scheme)
          }
        )
        if (result) {
          this.$set(site, 'isConnect', true)
          this.$set(site, 'platformWebSocket', result.currentPlatformWebSocket)
          this.$set(site, 'plazaWebSocket', result.currentPlazaWebSocket)
          this.$set(site, 'roomWebSocket', result.currentRoomWebSocket)
          this.$set(site, 'socketId', result.socketId)
          this.updateOperation(scheme)
        }
      })

      if (scheme.amountType === 3) {
        const specifyArr = JSON.parse(scheme.specify)
        specifyArr.map((s) => {
          const site = scheme.sites.find((ss) => ss.siteId === s.id)
          this.$set(site, 'specifyValue', s.specifyValue.split('*').map(Number))
          this.updateOperation(scheme)
        })
      }
    },
    stopScheme(schemeId) {
      this.currentSchemeId = schemeId
      this.stopSchemeDialog = true
    },
    stop() {
      for (const site of this.currentScheme.sites) {
        site.platformWebSocket.close()
        site.plazaWebSocket.close()
        site.roomWebSocket.close()
      }
      this.deleteOperation(this.tab)
      this.deleteWebSocketLog(this.currentSchemeId)
      this.stopSchemeDialog = false
    }
  }
}
</script>
<style scoped>
.v-window,
.window__container,
.v-window-item {
  height: 100%;
}
.table {
  overflow: auto;
  border-collapse: collapse;
  border-spacing: 0;
}
table thead tr,
table tbody tr {
  text-align: left;
  display: table;
  width: 100%;
  table-layout: fixed;
}
</style>
