<script setup lang="ts">
import { ref, computed } from 'vue'
const articleContent = ref([{para1: "some info about frozen yoghurt"}])

</script>

<template>
  <div class="mainPageBody">

    <header class="topBar">
      <h2><b>Fruit Lovers!</b> </h2>
    </header>

    <nav class="sideBar">
      <ul>
        <li class = "listItem strokeText" ><a>Home</a></li>
        <li class = "listItem strokeText"><a>Saved</a></li>
        <li class = "listItem strokeText"><a>About</a></li>
        <li class = "listItem strokeText"><a>Profile</a></li>
      </ul>
    </nav>

    <RouterView />
    <footer class="footer"></footer>
  </div>

</template>

<style>
.topBar {
  grid-area: top;
}
.sideBar {
  grid-area: side;
}
.articleContent {
  grid-area: main;
}
body h2 b {
  font-size:3rem;
  color:white;
  text-shadow:
      -4px -4px 0 #E9B934,
      4px -4px 0 #E9B934,
      -4px 4px 0 #E9B934,
      4px 4px 0 #E9B934;
}
body {
  color: #ffffff;
  background-color: #f7efdb;
  min-height: 40vh;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.articleItem {
  width:300px;
  margin:40px;
  background-color: #fdda7b;
  border-radius: 18px;
}
.articleItem h2{
  color: #FF626C;
}
.footer {
  grid-area: footer;
  color:#72BDDD;
}

</style>