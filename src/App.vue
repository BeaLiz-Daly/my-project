<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="site-nav" aria-label="Main navigation">
    <RouterLink to="/" active-class="nav-active"
                exact-active-class="nav-current">New Articles
    </RouterLink>

    <RouterLink to="/manage" active-class="nav-active"
                exact-active-class="nav-current">Saved
    </RouterLink>
  </nav>
</template>

<style scoped>

</style>