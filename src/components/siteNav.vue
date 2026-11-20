<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="topBar">
    <h2><b>Fruit Lovers!</b> </h2>
  </header>
  <!--side Nav Bar-->
  <nav class="sideBar">
    <ul>
      <li class = "listItem strokeText" ><a href="#">Home</a></li>
      <li class = "listItem strokeText"><a href="#">Saved</a></li>
      <li class = "listItem strokeText"><a href="#">About</a></li>
      <li class = "listItem strokeText"><a href="#">Profile</a></li>
    </ul>
  </nav>
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