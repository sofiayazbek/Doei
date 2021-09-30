<template>
  <div class="container.is-widescreen">

    <v-nav-bar />
<section class="section">
  <router-view />
</section>
  
    <v-footer-bar />

  </div>
</template>

<script>
import VNavBar from './components/vnavbar.vue'
import VFooterBar from './components/vfooterbar.vue'

export default {
  name: 'App',
  components: {
    'v-nav-bar': VNavBar,
    'v-footer-bar': VFooterBar
  }
}
</script>

