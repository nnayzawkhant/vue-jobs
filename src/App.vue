<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Header />

  <main>
    <router-view></router-view>
  </main>

  <Footer />
</template>

<style scoped>
    main {
      min-height: 80vh;
      padding-top: 50px;
    }
</style>
