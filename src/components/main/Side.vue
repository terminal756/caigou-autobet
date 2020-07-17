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

      <v-list-item link exact to="/sitegroup" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-web</v-icon>
        </v-list-item-icon>
        <v-list-item-title>我的网站</v-list-item-title>
      </v-list-item>

      <v-list-item link exact to="/scheme" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-note</v-icon>
        </v-list-item-icon>
        <v-list-item-title>我的方案</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getAGHostConfig } from '../../api/api'
import { mapActions } from 'vuex'

export default {
  data: () => ({}),
  created() {
    this.$store.dispatch('group/getGroupAsync')
    this.$store.dispatch('site/getSiteAsync')
    this.$store.dispatch('treeSite/getTreeSiteAsync')
    this.$store.dispatch('scheme/getSchemeAsync')
    this.AGHostConfig()
  },
  methods: {
    ...mapActions('agConfig', ['addAGConfig', 'addRoomConfig']),
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
        const roomConfig = configArr.filter((c) => c.$.gameType === 'BAC')
        const newRoomConfig = roomConfig.map((c) => {
          c.$.vids = c.$.vids.split(' ')
          return c.$
        })
        config.push.apply(config, newRoomConfig)
        this.addAGConfig(config)

        const room = []
        for (const el of newRoomConfig) {
          room.push.apply(room, el.vids)
        }
        this.addRoomConfig(room)
      })
    }
  }
}
</script>
