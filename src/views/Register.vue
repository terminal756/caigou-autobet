<template>
  <v-app>
    <v-card height="100%">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-2" @click="registerClose">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text>
        <p class="display-1 font-weight-bold mt-4 mb-8 layout row justify-center">注册页面</p>
      </v-card-text>
      <v-form>
        <v-text-field outlined rounded dense prepend-icon="person" type="text" label="登陆账号" class="mx-4" />
        <v-text-field outlined rounded dense prepend-icon="lock" type="password" label="登陆密码" class="mx-4" />
        <v-text-field outlined rounded dense prepend-icon="lock" type="password" label="确认密码" class="mx-4" />
      </v-form>
      <v-card-actions>
        <v-row>
          <v-col cols="12">
            <v-row class="mx-2"></v-row>
            <v-row class="mx-2">
              <v-col cols="12" class="layout column justify-center" @click="submitRegister">
                <v-btn>提交注册</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  methods: {
    registerClose: () => {
      ipcRenderer.send('registerClose')
    },
    submitRegister() {}
  }
}
</script>
