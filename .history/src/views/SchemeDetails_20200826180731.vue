<template>
  <v-app>
    <Header />
    <Side />
    <Footer />
    <v-main>
      <v-card ref="card" class="mb-12" height="100%" flat>
        <v-card-text>
          <v-card class="ma-4 overflow-y-auto overflow-x-hidden" :height="currentHeight" flat>
            <v-card-text>
              <v-row justify="space-between">
                <v-col>
                  <!--游戏类型-->
                  <v-row>
                    <v-col cols="4">
                      <v-subheader class="font-weight-black subtitle-1 pa-0">选择方案(必须)</v-subheader>
                    </v-col>
                    <v-col cols="8">
                      <v-text-field solo dense filled readonly label="AG百家乐" />
                      <!--<v-select
                        v-model="gameType"
                        solo
                        dense
                        filled
                        label="选择游戏类型"
                        item-text="name"
                        item-value="value"
                        :items="gameTypeItems"
                      />-->
                    </v-col>
                  </v-row>
                  <template v-if="gameType === 2">
                    <!--网站-->
                    <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">选择网站(必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-treeview
                          v-model="treeSelection"
                          dense
                          selectable
                          transition
                          rounded
                          hoverable
                          open-on-click
                          return-object
                          multiple-active
                          :items="treeSite"
                        />
                      </v-col>
                    </v-row>
                    <!--方案名称-->
                    <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">方案名称(必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field v-model="schemeName" filled dense solo color="primary" />
                      </v-col>
                    </v-row>
                    <!--方案金额-->
                    <v-row>
                      <p class="ma-4 blue--text">
                        如果网站选择数量为奇数，在随机范围和随机金额模式下，系统会随机选出一个网站全程不下注，直到方案停止运行为止。
                        <br />
                        在指定模式下，系统会根据用户指定的方案进行下注。
                      </p>
                    </v-row>
                    <!--止水金额-->
                    <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">止水金额(必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          v-model="totalLiushui"
                          solo
                          dense
                          filled
                          prefix="￥"
                          type="number"
                          color="primary"
                        />
                      </v-col>
                    </v-row>
                    <!--金额模式-->
                    <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">金额模式(必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-select
                          v-model="amountType"
                          solo
                          dense
                          filled
                          label="选择金额类型"
                          item-text="name"
                          item-value="value"
                          :items="amountTypeItems"
                        />
                      </v-col>
                    </v-row>
                    <template v-if="!isTreeSelected">
                      <v-row align-content="center">
                        <p class="red--text text-center">未选择网站</p>
                      </v-row>
                    </template>
                    <template v-else>
                      <template v-if="amountType === 1">
                        <v-col cols="12">
                          <p class="blue--text">
                            最大最小范围，使用*号做分隔，例如:20*100，如果最小值小于20，系统会默认最小金额为20，系统会随机选择范围之间的10的整数倍作为投注金额，投注方庄闲随机
                          </p>
                          <v-text-field v-model="randomRange" filled dense solo prefix="￥" color="primary" />
                        </v-col>
                      </template>
                      <template v-if="amountType === 2">
                        <v-col cols="12">
                          <p class="blue--text">
                            输入下注金额，使用*号做分隔，例如：20*50*100，如果最小值小于20，系统会默认最小金额为20，系统会从输入的数字中随机抽一个作为投注金额，投注方庄闲随机
                          </p>
                          <v-text-field v-model="randomValue" filled dense solo prefix="￥" color="primary" />
                        </v-col>
                      </template>
                      <template v-if="amountType === 3">
                        <p small class="blue--text">
                          手动分配每个网站的随机投注金额，数字之间使用*号做分割，第一个数字0或者1，用来标识下注分组，第二个数字0或者1，用标识止水金额，
                          <span class="font-weight-black red--text">只能有一个网站的第二个数字为1，其余必须为0</span>
                          ，其余网站的标识都为0，第三个数字以后的都是金额：0*0*20*50*100，如果最小值小于20，系统会默认最小金额为20，系统会从输入的数字中随机抽一组作为投注金额
                          <br />
                          <br />
                          例如三个网站分别输入网站1：0*1*50*100*200，网站2：1*0*30*70*160，网站3：1*0*20*30*40,系统会随机选择｛50，30，20｝或者｛100，70，30｝，或者｛200，160，40｝作为下注时候的金额，1组随机下注庄闲，2组下注1组的反方，系统会取第二个数字为1的网站下注金额累加与上面设定的止水金额进行对比，如果达到止水金额，则停止该方案下所有游戏链接
                          <br />
                          <br />
                          如果每个网站输入的数字个数不一致，或者个数小于3，会导致方案创建不成功。例如：
                          <br />
                          网站1：0*1*50*100*200，网站2：1*0*30*70，网站3：1*0*20，网站数字个数不一致，错误示范
                          <br />
                          网站1：0*1，网站2：1*0，网站3：1*0，网站数字个数小于3，错误示范
                          <br />
                          <br />
                          注意止水金额计算标准只能有一个。如果有多个自动停止下注结果不可预知。请自行确认所有金额设置是否合理，有没有亏水
                        </p>
                        <div v-for="(site, index) in specify" :key="index">
                          <v-row no-gutters justify="space-between">
                            <v-col cols="4">
                              <v-subheader class="font-weight-black red--text pa-0">网站：{{ site.name }}</v-subheader>
                            </v-col>
                            <v-col cols="8">
                              <v-text-field v-model="site.specifyValue" solo dense filled prefix="￥" color="primary" />
                            </v-col>
                          </v-row>
                        </div>
                      </template>
                    </template>

                    <!-- <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">补水类型(非必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-select
                          v-model="bushuiType"
                          solo
                          dense
                          filled
                          label="选择庄闲比例"
                          item-text="name"
                          item-value="value"
                          :items="bushuiTypeItems"
                        />
                      </v-col>
                    </v-row> -->

                    <!-- <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">下注金额取整(非必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-checkbox v-model="intType" label="个位数金额为0" />
                      </v-col>
                    </v-row> -->

                    <!--选择房间-->
                    <v-row>
                      <v-col cols="4">
                        <v-subheader class="font-weight-black subtitle-1 pa-0">选择房间(非必须)</v-subheader>
                      </v-col>
                      <v-col cols="8">
                        <v-select v-model="selectAGRoom" :items="room" label="选择房间" multiple solo dense filled>
                          <template v-slot:prepend-item>
                            <v-list-item class="ma-4" ripple @click="selectAllAGRoom">
                              <v-list-item-action>
                                <v-icon :color="selectAGRoom.length > 0 ? 'indigo darken-4' : ''">
                                  {{ AGicon }}
                                </v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                <v-list-item-title>选择所有房间</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mt-2"></v-divider>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                    <p class="blue--text">
                      没有指定房间系统将随机从所有房间中选择进行游戏
                      <br />
                      指定房间之后,系统将从指定的集合中随机选择进行游戏
                      <br />
                    </p>
                  </template>
                </v-col>
              </v-row>
            </v-card-text>
            <p v-if="!!errorMsg" class="red--text">{{ errorMsg }}</p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="ma-2" to="/scheme">关闭</v-btn>
              <v-btn class="ma-2" color="success" :disabled="!isReady" @click="submitAG">
                保存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import _ from 'lodash'
import Side from '@/components/main/Side'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    scheme: {},
    gameType: 2,
    /* gameTypeItems: [
      { value: 1, name: 'BBIN百家乐' },
      { value: 2, name: 'AG百家乐' },
      { value: 3, name: 'RM富豪棋牌' }
    ],*/
    amountType: '',
    amountTypeItems: [
      { value: 1, name: '随机范围' },
      { value: 2, name: '随机金额' },
      { value: 3, name: '指定金额' }
    ],
    treeSelection: [],
    isTreeSelected: false,
    schemeName: null,
    totalLiushui: null,
    randomRange: null,
    randomValue: null,
    specify: [],
    specifyValue: [],
    // bushuiType: null,
    // bushuiTypeItems: [
    //   { value: null, name: '不选' },
    //   { value: 1, name: '庄多下2.5%' },
    //   { value: 2, name: '闲少下2.5%' }
    // ],
    selectBBINRoom: [],
    selectAGRoom: [],
    // intType: false,
    errorMsg: '',
    currentHeight: ''
  }),
  computed: {
    ...mapState('site', ['siteList']),
    ...mapState('scheme', ['schemeList']),
    ...mapState('treeSite', ['treeSite']),
    ...mapState('ag', ['config', 'room']),
    isAllAGRoom() {
      return this.selectAGRoom.length === this.room.length
    },
    isSomeAGRoom() {
      return this.selectAGRoom.length > 0 && !this.isAllAGRoom
    },
    AGicon() {
      if (this.isAllAGRoom) return 'mdi-close-box'
      if (this.isSomeAGRoom) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
    isReady() {
      return !!(this.isTreeSelected && this.schemeName && this.amountType && this.selectAGRoom.length)
    }
  },
  watch: {
    treeSelection() {
      if (this.treeSelection) {
        this.isTreeSelected = true
        this.specify = this.treeSelection.map((t) => {
          const specifyObj = {}
          specifyObj.id = t.id
          specifyObj.name = t.name
          if (this.schemeList.length && this.$route.params.schemeId) {
            const scheme = this.schemeList.find((s) => s.schemeId === this.$route.params.schemeId)
            const obj = scheme.specify ? JSON.parse(scheme.specify).find((s) => s.id === t.id) : null
            specifyObj.specifyValue = obj ? obj.specifyValue : null
          }
          return specifyObj
        })
      }
    }
  },
  created() {
    const schemeId = this.$route.params.schemeId
    if (schemeId) {
      this.scheme = this.schemeList.find((s) => s.schemeId === schemeId)
      this.gameType = this.scheme.gameType
      const sites = JSON.parse(this.scheme.sites)
      const siteList = this.siteList
      this.treeSelection = sites.map((s) => {
        const newSite = {}
        newSite.id = s
        debugger
        const site = siteList.find((siteState) => siteState.siteId === s)
        newSite.name = site.name
        return newSite
      })
      this.schemeName = this.scheme.schemeName
      this.totalLiushui = this.scheme.totalLiushui
      this.amountType = this.scheme.amountType
      this.randomRange = this.scheme.randomRange
      this.randomValue = this.scheme.randomValue

      if (this.scheme.specify) {
        const specifyArr = JSON.parse(this.scheme.specify)
        this.specify = specifyArr.map((spc) => {
          const specifyObj = {}
          const site = this.siteList.find((s) => s.siteId === spc.id)
          specifyObj.id = spc.id
          specifyObj.name = site.name
          specifyObj.specifyValue = spc.specifyValue
          return specifyObj
        })
      }

      // this.bushuiType = this.scheme.bushuiType
      // this.intType = this.scheme.intType === 0 ? (this.intType = false) : (this.intType = true)
      switch (this.gameType) {
        case 1:
          this.selectBBINRoom = JSON.parse(this.scheme.room)
          break
        case 2:
          this.selectAGRoom = JSON.parse(this.scheme.room)
          break
      }
    }
  },
  mounted() {
    // 获取并监听网页内容区域最外层card高度
    this.$nextTick(() => {
      this.currentHeight = window.innerHeight - 100 + 'px'
    })
    window.onresize = () => {
      this.currentHeight = window.innerHeight - 100 + 'px'
    }
  },
  methods: {
    ...mapActions('scheme', ['addSchemeAsync', 'updateSchemeAsync']),
    pushSpecify(id, specifyValue) {
      const specify = {
        id: id,
        specifyValue: specifyValue
      }
      if (specifyValue === '') {
        return
      }
      const index = this.specify.findIndex((s) => {
        return s.siteId === id
      })
      if (index > -1) {
        this.specify.splice(index, 1, specify)
      } else {
        this.specify.push(specify)
      }
    },
    async submitBBIN() {
      const scheme = {
        // gameType: this.gameType,
        gameType: 2,
        sites: this.treeSelection,
        schemeName: this.schemeName,
        totalLiushui: this.totalLiushui * 1,
        amountType: this.amountType * 1,
        randomRange: this.amountType === '1' ? this.randomRange : null,
        randomValue: this.amountType === '2' ? this.randomValue : null,
        specify: this.amountType === '3' && this.specify.length ? this.specify : null,
        // bushuiType: this.bushuiType,
        // intType: this.intType ? 1 : 0,
        room: this.selectAGRoom.length ? JSON.stringify(this.selectAGRoom) : null
      }
      const res = await this.addSchemeAsync(scheme)
      if (res.code !== 0) {
        this.errorMsg = res.msg
      } else if (res.code === 0) {
        this.$router.push({ path: '/scheme' })
      }
    },
    submitAG() {
      this.$route.params.schemeId ? this.updateAG() : this.addAG()
    },
    async addAG() {
      const sites = _.uniq(
        this.treeSelection.map((s) => {
          return s.id
        })
      )
      const newSpecify = this.specify.map((s) => {
        const obj = {}
        obj.id = s.id
        obj.specifyValue = s.specifyValue
        return obj
      })
      const scheme = {
        // gameType: this.gameType,
        gameType: 2,
        sites: JSON.stringify(sites),
        schemeName: this.schemeName,
        totalLiushui: this.totalLiushui * 1,
        amountType: this.amountType,
        randomRange: this.amountType === 1 ? this.randomRange : null,
        randomValue: this.amountType === 2 ? this.randomValue : null,
        specify: this.amountType === 3 && this.specify.length ? JSON.stringify(newSpecify) : null,
        // bushuiType: this.bushuiType * 1,
        // intType: this.intType ? 1 : 0,
        room: this.selectAGRoom.length ? JSON.stringify(this.selectAGRoom) : null
      }
      const res = await this.addSchemeAsync(scheme)
      if (res.code !== 0) {
        this.errorMsg = res.msg
      } else if (res.code === 0) {
        await this.$router.push({ path: '/scheme' })
      }
    },
    async updateAG() {
      const sites = _.uniq(
        this.treeSelection.map((s) => {
          return s.id
        })
      )
      const newSpecify = this.specify.map((s) => {
        const obj = {}
        obj.id = s.id
        obj.specifyValue = s.specifyValue
        return obj
      })
      const scheme = {
        schemeId: this.scheme.schemeId,
        // gameType: this.gameType,
        gameType: 2,
        sites: JSON.stringify(sites),
        schemeName: this.schemeName,
        totalLiushui: this.totalLiushui * 1,
        amountType: this.amountType,
        randomRange: this.amountType === 1 ? this.randomRange : null,
        randomValue: this.amountType === 2 ? this.randomValue : null,
        specify: this.amountType === 3 && this.specify.length ? JSON.stringify(newSpecify) : null,
        // bushuiType: this.bushuiType * 1,
        // intType: this.intType ? 1 : 0,
        room: this.selectAGRoom.length ? JSON.stringify(this.selectAGRoom) : null
      }
      const res = await this.updateSchemeAsync(scheme)
      if (res.code !== 0) {
        this.errorMsg = res.msg
      } else if (res.code === 0) {
        await this.$router.push({ path: '/scheme' })
      }
    },
    selectAllAGRoom() {
      if (this.isAllAGRoom) {
        this.selectAGRoom = []
      } else {
        this.selectAGRoom = this.room
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
