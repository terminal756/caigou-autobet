<template>
  <v-navigation-drawer app clipped permanent style="overflow-x: hidden; overflow-y: auto;">
    <v-list nav rounded>
      <!-- 不带下拉框的一级菜单 -->
      <v-list-item link exact to="/home" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>首页</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="isLogin" link exact to="/sitegroup" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-web</v-icon>
        </v-list-item-icon>
        <v-list-item-title>网站</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="isLogin" link exact to="/scheme" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-reorder-horizontal</v-icon>
        </v-list-item-icon>
        <v-list-item-title>方案</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isLogin && operationList.length" link exact to="/schemeOperation" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-code-braces</v-icon>
        </v-list-item-icon>
        <v-list-item-title>方案运行日志</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getAGHostConfig } from '../../api/api'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapGetters('user', ['isLogin']),
    ...mapState('scheme', ['operationList'])
  },
  created() {
    this.$store.dispatch('group/getGroupAsync')
    this.$store.dispatch('site/getSiteAsync')
    this.$store.dispatch('treeSite/getTreeSiteAsync')
    this.$store.dispatch('scheme/getSchemeAsync')
    this.AGHostConfig()
  },
  methods: {
    ...mapActions('ag', ['addConfig', 'addRoom']),
    AGHostConfig() {
      getAGHostConfig({
        timestamp: new Date().getTime(),
        _count: 0
      }).then((res) => {
        // console.log(res.config.environment[0].host)
        const config = []
        const configArr = res.config.environment[0].host
        const loginConfig = configArr.find((c) => {
          return c.$.hostType === 'login'
        })
        if (loginConfig) config.push(loginConfig.$)
        const plazaConfig = configArr.find((c) => {
          return c.$.hostType === 'plaza'
        })
        if (plazaConfig) config.push(plazaConfig.$)
        const oldRoom = configArr.filter((c) => c.$.gameType === 'BAC')
        const newRoom = oldRoom.map((c) => {
          c.$.vids = c.$.vids.split(' ')
          return c.$
        })
        config.push.apply(config, newRoom)
        this.addConfig(config)

        const room = []
        for (const el of newRoom) {
          room.push.apply(room, el.vids)
        }
        this.addRoom(room)
      })
    }
  }
}
</script>
