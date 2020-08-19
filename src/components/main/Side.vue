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

      <v-list-item v-if="isRecharge" link exact to="/sitegroup" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-web</v-icon>
        </v-list-item-icon>
        <v-list-item-title>网站</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="isRecharge" link exact to="/scheme" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-reorder-horizontal</v-icon>
        </v-list-item-icon>
        <v-list-item-title>方案</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="isRecharge && operationList.length" link exact to="/schemeOperation" active-class="grey--text">
        <v-list-item-icon>
          <v-icon>mdi-code-braces</v-icon>
        </v-list-item-icon>
        <v-list-item-title>方案运行日志</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getAgConfig } from '@/api/ag'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapGetters('user', ['isLogin', 'isAGActive', 'isBBINActive', 'isRMActive']),
    ...mapState('scheme', ['operationList']),

    isRecharge() {
      return this.isLogin && (this.isAGActive || this.isBBINActive || this.isRMActive)
    }
  },
  created() {
    if (this.isLogin) {
      this.$store.dispatch('group/getGroupAsync')
      this.$store.dispatch('site/getSiteAsync')
      this.$store.dispatch('treeSite/getTreeSiteAsync')
      this.$store.dispatch('scheme/getSchemeAsync')
    }

    this.agConfig()
  },
  methods: {
    ...mapActions('ag', ['addConfig', 'addRoom']),

    async agConfig() {
      const res = await getAgConfig()
      if (res.code === 0) {
        const room = []
        res.data
          .filter((a) => !!a.vids)
          .map((a) => {
            room.push.apply(room, a.vids)
          })
        this.addConfig(res.data)
        this.addRoom(room)
      }
    }
  }
}
</script>
