<template>
  <v-app>
    <Header />
    <Side />
    <Footer />

    <v-content style="overflow-x: hidden; overflow-y: auto;">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="7">
            <v-card hover @click="show = !show">
              <v-card-title>激活码</v-card-title>
              <v-card-actions>
                <v-btn text>购买激活码</v-btn>
                <v-btn text>激活账户</v-btn>
                <v-spacer></v-spacer>
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    激活码详情介绍11111111111111111111111111111111111111111111111111111111
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <v-col cols="7">
            <v-card hover>
              <v-card-title>网站</v-card-title>
              <v-card-actions>
                <v-btn text>设置分组</v-btn>
                <v-btn text>添加网站</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="7">
            <v-card hover>
              <v-card-title>方案</v-card-title>
              <v-card-actions>
                <v-btn text>选择游戏</v-btn>
                <v-btn text>创建方案</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
  data: () => ({
    show: false
  }),
  computed: {},
  mounted() {},
  methods: {}
}
</script>
