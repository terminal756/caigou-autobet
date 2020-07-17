<template>
  <v-app>
    <Header />
    <Side />

    <v-content>
      <v-stepper v-model="e1">
        <v-stepper-step :complete="e1 > 1" step="1">选择游戏</v-stepper-step>

        <v-stepper-content step="1">
          <v-card class="mb-12" height="100%">
            <v-card-text>
              <!--:mandatory="false"-->
              <v-radio-group v-model="gameType" row class="d-flex align-center justify-center">
                {{ gameType }}
                <v-radio value="1" label="BBIN 百家乐" />
                <v-radio value="2" label="AG 百家乐" />
                <v-radio value="3" label="富豪棋牌 扎金花" />
              </v-radio-group>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="ma-2" to="/scheme">关闭</v-btn>
              <v-btn class="ma-2" color="primary" :disabled="!gameType" @click="e1 = 2">下一步</v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
        <v-stepper-step step="2">设置方案</v-stepper-step>
        <template v-if="gameType === '1'">
          <v-stepper-content step="2" style="overflow: auto;">
            <v-card class="mb-12 overflow-y-auto overflow-x-hidden" style="max-height: 500px;">
              <v-row justify="space-between">
                <v-card-text>
                  <v-card class="ma-4">
                    <v-card-text>
                      <p class="title">选择网站</p>
                      <v-treeview
                        v-model="treeSelection"
                        :items="treeSite"
                        dense
                        selectable
                        transition
                        rounded
                        hoverable
                        open-on-click
                        return-object
                        multiple-active
                      />
                    </v-card-text>
                  </v-card>
                </v-card-text>
                <template v-if="!treeSelection.length">
                  <v-col>
                    <v-card-title class="red--text font-weight-black ma-4">
                      网站必选
                    </v-card-title>
                  </v-col>
                </template>
                <template v-else>
                  <v-col>
                    <v-card-text>
                      <v-card class="ma-4">
                        <v-card-text>
                          <v-row>
                            <v-col cols="4">
                              <v-subheader class="font-weight-black subtitle-1 pa-0">方案名称</v-subheader>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field v-model="schemeName" filled dense outlined color="primary" />
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>

                      <v-card class="ma-4">
                        <v-card-title>投注金额</v-card-title>
                        <v-card-text>
                          <p small>如果网站勾选有重复，系统会自动去重。</p>
                          <p small>
                            如果网站选择数量为奇数，在随机范围和随机金额模式下，系统会随机选出一个网站全程不下注，直到方案停止运行为止。
                          </p>
                          <p small>在手动模式下，系统会根据用户指定的方案进行下注。</p>

                          <v-container fluid>
                            <v-row>
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">止水金额</v-subheader>
                              </v-col>
                              <v-col cols="6">
                                <v-text-field
                                  v-model="totalLiushui"
                                  filled
                                  dense
                                  outlined
                                  prefix="￥"
                                  type="number"
                                  color="primary"
                                />
                              </v-col>
                            </v-row>
                            <v-row align="center">
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">金额模式</v-subheader>
                              </v-col>
                              <v-col cols="12">
                                <v-radio-group v-model="amountType" row>
                                  <v-radio label="随机范围" value="1"></v-radio>
                                  <v-radio label="随机金额" value="2"></v-radio>
                                  <v-radio label="手动指定" value="3"></v-radio>
                                </v-radio-group>
                              </v-col>
                            </v-row>
                            <template v-if="amountType === '1'">
                              <v-col cols="12">
                                <small class="red--text">
                                  输入两个数字，使用*号做分隔，例如:20*100，庄闲随机
                                </small>
                                <v-text-field v-model="randomRange" filled dense outlined prefix="￥" color="primary" />
                              </v-col>
                            </template>
                            <template v-if="amountType === '2'">
                              <v-col cols="12">
                                <small class="red--text">
                                  随便输入数字个数，使用*号做分隔，例如：20*50*100，庄闲随机
                                </small>
                                <v-text-field v-model="randomValue" filled dense outlined prefix="￥" color="primary" />
                              </v-col>
                            </template>
                            <template v-if="amountType === '3'">
                              <small class="red--text">
                                手动分配每个网站的随机投注金额，数字之间使用*号做分割，例如：20*50*100，庄闲随机，注意打水金额是否一致，不要亏水
                              </small>
                              <div v-for="(site, index) in treeSelection" :key="site.id">
                                <v-row no-gutters justify="space-between">
                                  <v-col cols="4">
                                    <v-subheader class="font-weight-black pa-0">网站：{{ site.name }}</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                    <v-text-field
                                      v-model="specifyValue[index]"
                                      filled
                                      dense
                                      outlined
                                      prefix="￥"
                                      color="primary"
                                      @blur="pushSpecify(site.id, specifyValue[index])"
                                    />
                                  </v-col>
                                </v-row>
                              </div>
                            </template>

                            <v-row align="center">
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">补水类型</v-subheader>
                              </v-col>
                              <v-col cols="8">
                                <v-radio-group v-model="bushuiType" row>
                                  <v-radio label="庄多下2.5%" value="1" />
                                  <v-radio label="闲少下2.5%" value="2" />
                                </v-radio-group>
                              </v-col>
                            </v-row>

                            <v-row align="center">
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">下注金额取整</v-subheader>
                              </v-col>
                              <v-col cols="6">
                                <v-checkbox v-model="isInt" label="个位数金额为0" />
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>

                      <v-card class="ma-4">
                        <v-card-title>选择桌台</v-card-title>
                        <v-card-text>
                          <v-row>
                            <v-col>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐A01" value="a01"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐A02" value="a02"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐A03" value="a03"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐A05" value="a05"></v-checkbox>
                            </v-col>
                            <v-col>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐A06" value="a06"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐A07" value="a07"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="共咪百家乐B01" value="b01"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="共咪百家乐B02" value="b02"></v-checkbox>
                            </v-col>
                            <v-col>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐B03" value="b03"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="多彩百家乐B05" value="b05"></v-checkbox>
                              <v-checkbox v-model="selectBBINRoom" label="百家乐B06" value="b06"></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-card-text>
                  </v-col>
                </template>
              </v-row>
              <p v-if="!!errorMsg">{{ errorMsg }}</p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="ma-2" to="/scheme">关闭</v-btn>
                <v-btn class="ma-2" color="primary" @click="e1 = 1">上一步</v-btn>
                <v-btn class="ma-2" color="success" :disabled="!treeSelection.length" @click="submitBBIN">保存</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </template>
        <template v-if="gameType === '2'">
          <v-stepper-content step="2" style="overflow: auto;">
            <v-card class="mb-12 overflow-y-auto overflow-x-hidden" style="max-height: 500px;">
              <v-row justify="space-between">
                <v-card-text>
                  <v-card class="ma-4">
                    <v-card-text>
                      <p class="title">选择网站</p>
                      <v-treeview
                        v-model="treeSelection"
                        :items="treeSite"
                        dense
                        selectable
                        transition
                        rounded
                        hoverable
                        open-on-click
                        return-object
                        multiple-active
                      />
                    </v-card-text>
                  </v-card>
                </v-card-text>

                <template v-if="!treeSelection.length">
                  <v-col>
                    <v-card-title class="red--text font-weight-black ma-4">
                      网站必选
                    </v-card-title>
                  </v-col>
                </template>
                <template v-else>
                  <v-col>
                    <v-card-text>
                      <v-card class="ma-4">
                        <v-card-text>
                          <v-row>
                            <v-col cols="4">
                              <v-subheader class="font-weight-black subtitle-1 pa-0">方案名称</v-subheader>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field v-model="schemeName" filled dense solo outlined color="primary" />
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>

                      <v-card class="ma-4">
                        <v-card-title>投注金额</v-card-title>
                        <v-card-text>
                          <p small>如果网站勾选有重复，系统会自动去重。</p>
                          <p small>
                            如果网站选择数量为奇数，在随机范围和随机金额模式下，系统会随机选出一个网站全程不下注，直到方案停止运行为止。
                          </p>
                          <p small>在手动模式下，系统会根据用户指定的方案进行下注。</p>

                          <v-container fluid>
                            <v-row>
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">止水金额</v-subheader>
                              </v-col>
                              <v-col cols="6">
                                <v-text-field
                                  v-model="totalLiushui"
                                  filled
                                  dense
                                  outlined
                                  prefix="￥"
                                  type="number"
                                  color="primary"
                                />
                              </v-col>
                            </v-row>
                            <v-row align="center">
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">金额模式</v-subheader>
                              </v-col>
                              <v-col cols="12">
                                <v-radio-group v-model="amountType" row>
                                  <v-radio label="随机范围" value="1"></v-radio>
                                  <v-radio label="随机金额" value="2"></v-radio>
                                  <v-radio label="手动指定" value="3"></v-radio>
                                </v-radio-group>
                              </v-col>
                            </v-row>
                            <template v-if="amountType === '1'">
                              <v-col cols="12">
                                <small class="red--text">
                                  输入两个数字，使用*号做分隔，例如:20*100，庄闲随机
                                </small>
                                <v-text-field v-model="randomRange" filled dense outlined prefix="￥" color="primary" />
                              </v-col>
                            </template>
                            <template v-if="amountType === '2'">
                              <v-col cols="12">
                                <small class="red--text">
                                  随便输入数字个数，使用*号做分隔，例如：20*50*100，庄闲随机
                                </small>
                                <v-text-field v-model="randomValue" filled dense outlined prefix="￥" color="primary" />
                              </v-col>
                            </template>
                            <template v-if="amountType === '3'">
                              <small class="red--text">
                                手动分配每个网站的随机投注金额，数字之间使用*号做分割，例如：20*50*100，庄闲随机，注意打水金额是否一致，不要亏水
                              </small>
                              <div v-for="(site, index) in treeSelection" :key="site.id">
                                <v-row no-gutters justify="space-between">
                                  <v-col cols="4">
                                    <v-subheader class="font-weight-black pa-0">网站：{{ site.name }}</v-subheader>
                                  </v-col>
                                  <v-col cols="8">
                                    <v-text-field
                                      v-model="specifyValue[index]"
                                      filled
                                      dense
                                      outlined
                                      prefix="￥"
                                      color="primary"
                                      @blur="pushSpecify(site.id, specifyValue[index])"
                                    />
                                  </v-col>
                                </v-row>
                              </div>
                            </template>

                            <v-row align="center">
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">补水类型</v-subheader>
                              </v-col>
                              <v-col cols="8">
                                <v-radio-group v-model="bushuiType" row>
                                  <v-radio label="庄多下2.5%" value="1" />
                                  <v-radio label="闲少下2.5%" value="2" />
                                </v-radio-group>
                              </v-col>
                            </v-row>

                            <v-row align="center">
                              <v-col cols="4">
                                <v-subheader class="font-weight-black subtitle-1 pa-0">下注金额取整</v-subheader>
                              </v-col>
                              <v-col cols="6">
                                <v-checkbox v-model="isInt" label="个位数金额为0" />
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                      </v-card>

                      <v-card class="ma-4">
                        <v-card-title>选择房间</v-card-title>
                        <v-card-text>
                          <v-container fluid>
                            <v-select v-model="selectAGRoom" :items="roomConfig" label="选择房间" multiple dense solo>
                              <template v-slot:prepend-item>
                                <v-list-item ripple>
                                  <v-list-item-action>
                                    <v-icon :color="roomConfig.length > 0 ? 'indigo darken-4' : ''">
                                      {{ AGicon }}
                                    </v-icon>
                                  </v-list-item-action>
                                  <v-list-item-content>
                                    <v-list-item-title @click="selectAllAGRoom">选择所有房间</v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-divider class="mt-2"></v-divider>
                              </template>
                            </v-select>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-card-text>
                  </v-col>
                </template>
              </v-row>
              <p v-if="!!errorMsg">{{ errorMsg }}</p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="ma-2" to="/scheme">关闭</v-btn>
                <v-btn class="ma-2" color="primary" @click="e1 = 1">上一步</v-btn>
                <v-btn class="ma-2" color="success" :disabled="!treeSelection.length" @click="submitBBIN">保存</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </template>
        <template v-if="gameType === '3'">
          <v-stepper-content step="2">
            <v-card class="mb-12" height="100%">
              <p>富贵棋牌</p>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="ma-2" to="/scheme">关闭</v-btn>
                <v-btn class="ma-2" color="primary" @click="e1 = 1">上一步</v-btn>
                <v-btn class="ma-2" color="success">保存</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </template>
      </v-stepper>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/main/Header'
import Side from '@/components/main/Side'
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
    treeSelection: [],
    e1: 1,
    selectBBINRoom: [],
    selectAGRoom: [],
    isInt: false,
    errorMsg: ''
  }),
  computed: {
    ...mapState('scheme', ['schemeList']),
    ...mapState('treeSite', ['treeSite']),
    ...mapState('agConfig', ['agConfig', 'roomConfig']),
    // 游戏类型
    gameType() {
      return this.scheme ? this.scheme.gameType : null
    },
    // 方案名称
    schemeName() {
      return this.scheme ? this.scheme.schemeName : null
    },
    // 止水金额
    totalLiushui() {
      return this.scheme ? this.scheme.totalLiushui : null
    },
    // 投注金额类型
    amountType() {
      return this.scheme ? this.scheme.amountType : null
    },
    // 补水类型
    bushuiType() {
      return this.scheme ? this.scheme.bushuiType : null
    },
    // 随机范围
    randomRange() {
      return this.scheme ? this.scheme.randomRange : null
    },
    // 随机金额
    randomValue() {
      return this.scheme ? this.scheme.randomValue : null
    },
    // 指定金额
    specifyValue() {
      return this.scheme ? this.scheme.specifyValue : null
    },
    specify() {
      return this.scheme ? this.scheme.specify : null
    },

    isAllAGRoom() {
      return this.selectAGRoom.length === this.roomConfig.length
    },
    isSomeAGRoom() {
      return this.selectAGRoom.length > 0 && !this.isAllAGRoom
    },
    AGicon() {
      if (this.isAllAGRoom) return 'mdi-close-box'
      if (this.isSomeAGRoom) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    }
  },
  created() {
    const schemeId = this.$route.params.schemeId
    this.scheme = this.schemeList.find((s) => s.schemeId === schemeId)
  },
  mounted() {},
  methods: {
    ...mapActions('scheme', ['addSchemeAsync']),

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
        gameType: this.gameType * 1,
        sites: this.treeSelection,
        schemeName: this.schemeName,
        totalLiushui: this.totalLiushui * 1,
        amountType: this.amountType * 1,
        randomRange: this.amountType === '1' ? this.randomRange : null,
        randomValue: this.amountType === '2' ? this.randomValue : null,
        specifies: this.amountType === '3' && this.specify.length ? this.specify : null,
        bushuiType: this.bushuiType * 1,
        intType: this.isInt ? 1 : 0,
        room: this.selectBBINRoom.length ? JSON.stringify(this.selectBBINRoom) : null
      }
      const res = await this.addSchemeAsync(scheme)
      if (res.code !== 0) {
        this.errorMsg = res.msg
      } else if (res.code === 0) {
        this.$router.push({ path: '/scheme' })
      }
    },

    selectAllAGRoom() {
      this.$nextTick(() => {
        if (this.isAllAGRoom) {
          this.selectAllAGRoom = []
        } else {
          this.selectAllAGRoom = this.roomConfig.slice()
        }
      })
    }
  }
}
</script>
