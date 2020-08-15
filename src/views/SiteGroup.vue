<template>
  <v-app>
    <Header />
    <Side />
    <Footer />
    <v-main style="overflow: auto;">
      <v-toolbar flat>
        <v-dialog v-model="groupDialog" :retain-focus="false" persistent max-width="500">
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" color="primary" v-on="on">
              添加分组
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ groupTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="groupForm">
                <v-text-field
                  v-model="groupForm.groupName"
                  filled
                  label="分组名称"
                  :rules="[(v) => !!v || '分组名称必填']"
                />
                <v-textarea v-model="groupForm.groupDescription" filled auto-grow label="分组描述" />
                <p v-if="result.code !== 0" class="text-center red--text">
                  {{ result.msg }}
                </p>
                <small>分组用于管理网站列表</small>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="closeGroup">
                返回
              </v-btn>
              <v-btn color="success" @click="saveGroup">
                提交
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="siteDialog" persistent max-width="500">
          <template v-slot:activator="{ on }">
            <v-btn class="mx-2" color="primary" v-on="on">
              添加网站
            </v-btn>
          </template>
          <v-card height="100%">
            <v-card-title class="align-center">
              网站信息
            </v-card-title>
            <v-card-text>
              <v-form ref="siteForm">
                <v-text-field
                  v-model="siteForm.name"
                  dense
                  persistent-hint
                  label="网站名称 必填"
                  :rules="[(v) => !!v || '网站名称必填']"
                />
                <v-text-field
                  v-model="siteForm.url"
                  dense
                  persistent-hint
                  label="链接  必填"
                  :rules="[(v) => !!v || '网站地址必填']"
                />
                <!-- (v) => /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(v) || '网站地址格式不正确' -->
                <v-text-field v-model="siteForm.shoucunAll" dense label="首存优惠" />
                <v-text-field v-model="siteForm.shoucunAllLiushui" dense label="首存流水" />
                <v-text-field v-model="siteForm.ricun" dense label="日存优惠" />
                <v-text-field v-model="siteForm.ricunLiushui" dense label="日存流水" />
                <v-textarea v-model="siteForm.description" dense auto-grow label="备注" />
                <v-select
                  v-model="siteForm.groupId"
                  dense
                  chips
                  label="网站分组"
                  item-text="groupName"
                  item-value="groupId"
                  :items="groupList"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class="ma-4" color="primary" @click="closeSite">
                返回
              </v-btn>
              <v-btn class="ma-4" color="success" @click="submitSite">
                提交
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <template v-if="getSiteWithoutGroup && getSiteWithoutGroup.length !== 0">
        <v-card>
          <v-card-title>未分组网站列表</v-card-title>
          <v-data-table hide-default-footer :headers="headers" :items="getSiteWithoutGroup">
            <template v-slot:item.edit="{ item }">
              <v-icon small class="mr-2" @click="editSite(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="openDeleteSiteDialog(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </template>
      <template v-if="groupList && groupList.length !== 0">
        <v-card>
          <v-card-title>分组列表</v-card-title>
          <v-expansion-panels>
            <v-expansion-panel v-for="item in groupList" :key="item.groupId">
              <v-expansion-panel-header v-slot="{ open }">
                <v-row no-gutters>
                  <v-col cols="3">
                    <span>{{ item.groupName }}</span>
                  </v-col>
                  <v-col cols="9" class="text--secondary">
                    <v-fade-transition leave-absolute>
                      <span v-if="open" class="body-2">{{ item.groupDescription }}</span>
                      <v-row v-else no-gutters style="width: 100%;">
                        <v-col cols="6" style="max-width: 200px;" class="d-inline-block text-truncate body-2 mr-4">
                          {{ item.groupDescription }}
                        </v-col>
                        <v-col cols="3">
                          <span class="body-2">网站 :{{ siteCount(item.groupId) }}</span>
                        </v-col>
                        <v-col>
                          <v-icon dense class="mr-2" @click.stop="editGroup(item)">
                            mdi-pencil
                          </v-icon>
                          <v-icon dense @click.stop="openDeleteDialog(item)">
                            mdi-delete
                          </v-icon>
                        </v-col>
                      </v-row>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <template v-if="$store.getters['site/getSiteByGroupId'](item.groupId).length !== 0">
                <v-expansion-panel-content style="overflow: auto;">
                  <v-data-table
                    hide-default-footer
                    :headers="headers"
                    :items="$store.getters['site/getSiteByGroupId'](item.groupId)"
                  >
                    <template v-slot:item.edit="{ item }">
                      <v-icon small class="mr-2" @click="editSite(item)">
                        mdi-pencil
                      </v-icon>
                      <v-icon small @click="openDeleteSiteDialog(item)">
                        mdi-delete
                      </v-icon>
                    </template>
                  </v-data-table>
                </v-expansion-panel-content>
              </template>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </template>
      <v-dialog v-model="deleteGroupDialog" persistent max-width="300">
        <v-card height="100%">
          <v-card-title class="align-center">
            确认删除该分组
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn class="ma-4" color="primary" @click="deleteGroupDialog = false">
              返回
            </v-btn>
            <v-btn class="ma-4" color="error" @click="deleteGroup">
              删除
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="deleteSiteDialog" persistent max-width="300">
        <v-card height="100%">
          <v-card-title class="align-center">
            确认删除该网站
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn class="ma-4" color="primary" @click="deleteSiteDialog = false">
              返回
            </v-btn>
            <v-btn class="ma-4" color="error" @click="deleteSite">
              删除
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>
<script>
import Side from '@/components/main/Side'
import Header from '@/components/main/Header'
import Footer from '@/components/main/Footer'
import { getSiteListByGroupId } from '@/api/site'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({
    groupDialog: false,
    deleteGroupDialog: false,
    siteDialog: false,
    deleteSiteDialog: false,
    headers: [
      {
        text: '网站名称',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: '链接', value: 'url', sortable: false },
      { text: '首存优惠', value: 'shoucunAll' },
      { text: '首存流水', value: 'shoucunAllLiushui' },
      { text: '日存优惠', value: 'ricun' },
      { text: '日存流水', value: 'ricunLiushui' },
      { text: '备注', value: 'description', sortable: false },
      { text: '编辑', value: 'edit', sortable: false }
    ],
    result: {
      code: '',
      msg: '',
      data: {}
    },
    editIndex: -1,
    groupForm: {
      groupId: '',
      groupName: '',
      groupDescription: ''
    },
    siteForm: {
      siteId: '',
      groupId: '',
      name: '',
      url: '',
      shoucunAll: '',
      shoucunAllLiushui: '',
      ricun: '',
      ricunLiushui: '',
      description: ''
    },
    currentSite: null
  }),
  computed: {
    ...mapGetters('site', ['getSiteWithoutGroup']),
    ...mapState('site', ['siteList']),
    ...mapState('group', ['groupList']),
    groupTitle() {
      return this.editIndex === -1 ? '添加分组' : '编辑分组'
    },
    siteCount() {
      return (groupId) => {
        let count = 0
        this.siteList.forEach((site) => {
          if (site.groupId === groupId) {
            count++
          }
        })
        return count
      }
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    deleteGroupDialog(v) {
      if (!v) this.bar = false
    }
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations('group', ['addGroup']),
    ...mapActions('group', ['addGroupAsync', 'updateGroupAsync', 'deleteGroupAsync']),
    ...mapActions('site', ['addSiteAsync', 'updateSiteAsync', 'deleteSiteAsync']),
    ...mapActions('scheme', ['updateScheme']),
    editGroup(item) {
      this.editIndex = this.groupList.indexOf(item)
      this.groupForm = Object.assign({}, item)
      this.groupDialog = true
    },
    openDeleteDialog(item) {
      this.groupForm.groupId = item.groupId
      this.deleteGroupDialog = true
    },
    openDeleteSiteDialog(site) {
      this.currentSite = site
      this.deleteSiteDialog = true
    },
    async deleteGroup() {
      const groupId = this.groupForm.groupId
      const res = await this.deleteGroupAsync(groupId)
      if (res.code === 0) {
        this.deleteGroupDialog = false
      }
    },
    closeGroup() {
      this.$nextTick(() => {
        this.groupDialog = false
        this.editIndex = -1
        this.$refs.groupForm.reset()
      })
    },
    async saveGroup() {
      if (this.$refs.groupForm.validate()) {
        let res
        if (this.editIndex > -1) {
          res = await this.updateGroupAsync({
            index: this.editIndex,
            group: {
              groupId: this.groupForm.groupId,
              groupName: this.groupForm.groupName,
              groupDescription: this.groupForm.groupDescription
            }
          })
        } else {
          res = await this.addGroupAsync({
            groupName: this.groupForm.groupName,
            groupDescription: this.groupForm.groupDescription
          })
          this.groupForm.groupName = ''
          this.groupForm.groupDescription = ''
        }
        this.result = res
        if (res.code === 0) {
          this.groupDialog = false
          this.$refs.groupForm.reset()
          this.editIndex = -1
        }
      }
    },
    async submitSite() {
      if (this.$refs.siteForm.validate()) {
        const site = {
          siteId: this.siteForm.siteId,
          groupId: this.siteForm.groupId,
          name: this.siteForm.name,
          url:
            this.siteForm.url.substr(0, 7).toLowerCase() === 'http://' ||
            this.siteForm.url.substr(0, 8).toLowerCase() === 'https://'
              ? this.siteForm.url
              : 'http://' + this.siteForm.url,
          shoucunAll: this.siteForm.shoucunAll,
          shoucunAllLiushui: this.siteForm.shoucunAllLiushui,
          ricun: this.siteForm.ricun,
          ricunLiushui: this.siteForm.ricunLiushui,
          description: this.siteForm.description
        }
        let res
        if (this.editIndex > -1) {
          const payload = {
            index: this.editIndex,
            site: site
          }
          res = await this.updateSiteAsync(payload)
        } else {
          res = await this.addSiteAsync(site)
        }
        this.editIndex = -1
        if (res.code === 0) {
          this.siteDialog = false
          this.$refs.siteForm.reset()
        }
      }
    },
    async deleteSite() {
      const site = {
        index: this.siteList.indexOf(this.currentSite),
        siteId: this.currentSite.siteId
      }
      const res = await this.deleteSiteAsync(site)
      if (res.code === 0) {
        this.deleteSiteDialog = false
        await this.updateScheme(res.data)
      }
    },
    async getSiteListByGroupId(groupId) {
      const res = await getSiteListByGroupId(groupId)
      return res
    },
    editSite(site) {
      this.editIndex = this.siteList.indexOf(site)
      this.siteForm = Object.assign({}, site)
      this.siteDialog = true
    },
    closeSite() {
      this.siteDialog = false
      this.editIndex = -1
      this.$refs.siteForm.reset()
    }
  }
}
</script>
