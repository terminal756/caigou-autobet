<template>
  <v-app>
    <Header />
    <Side />
    <Footer />
    <v-content>
      <v-card flat height="100%">
        <iframe ref="iframe" width="100%" height="100%" src="https://hh66432.com/"></iframe>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/main/Header'
import Side from '@/components/main/Side'
import Footer from '@/components/main/Footer'

export default {
  components: {
    Header,
    Side,
    Footer
  },
  data: () => ({}),
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  methods: {}
}
</script>
