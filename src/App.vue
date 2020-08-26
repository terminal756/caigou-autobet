<template>
  <v-app>
    <!-- 缓存页面 -->
    <keep-alive include="SchemeOperation">
      <router-view />
    </keep-alive>
  </v-app>
</template>
<script>
export default {}
</script>

<style>
html {
  overflow: hidden;
}
</style>
