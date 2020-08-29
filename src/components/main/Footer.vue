<template>
  <v-footer app padless height="28px" style="-webkit-app-region: no-drag;" class="px-4">
    <span v-if="username" class="red--text font-weight-black">{{ msg }}</span>
    <v-spacer></v-spacer>
    <span>QQ交流群：972387805</span>
  </v-footer>
</template>

<script>
import moment from 'moment'
import { mapState, mapGetters } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState('user', ['userId', 'username', 'users']),
    ...mapGetters('user', ['isLogin', 'isAGActive', 'isBBINActive', 'isRMActive']),

    user() {
      return this.users.find((u) => u.userId === this.userId)
    },

    msg() {
      let msg
      if (this.isAGActive) {
        msg =
          'AG到期时间:\xa0\xa0' +
          moment(Number(this.user.agExpiredTime)).format('YYYY-MM-DD HH:mm:ss') +
          '\xa0\xa0\xa0\xa0'
      }
      if (this.isBBINActive) {
        msg =
          'BBIN到期时间:\xa0\xa0' +
          moment(Number(this.user.bbinExpiredTime)).format('YYYY-MM-DD HH:mm:ss') +
          '\xa0\xa0\xa0\xa0'
      }
      if (this.isRMActive) {
        msg =
          'RM到期时间:\xa0\xa0' +
          moment(Number(this.user.rmExpiredTime)).format('YYYY-MM-DD HH:mm:ss') +
          '\xa0\xa0\xa0\xa0'
      }
      return msg
    }
  },
  created() {},
  mounted() {},
  watch: {}
}
</script>
