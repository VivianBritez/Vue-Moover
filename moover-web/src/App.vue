<template>
  <div id="app">
    <PmResponsiveNav />
    <router-view />
  </div>
</template>
<script>
import PmResponsiveNav from '@/component/layout/NavBarComponent.vue'

export default {
  components: { PmResponsiveNav }
}
</script>

<style scoped lang="scss">
#app {
  margin: -8px;
}
</style>
