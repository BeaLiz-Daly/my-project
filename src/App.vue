<script setup lang="ts">
import { ref, computed } from 'vue'
const articleContent = ref([{para1: "some info about frozen yoghurt"}])

</script>

<template>
  <div class="mainPageBody">

    <header class="topBar">
      <h2><b>FruitLovers!</b> </h2>
    </header>

    <nav class="sideBar">
      <ul>
        <li class = "listItem strokeText" ><RouterLink to="/">Home</RouterLink></li>
        <li class = "listItem strokeText"><RouterLink to="/create">Create</RouterLink></li>
        <li class = "listItem strokeText"><RouterLink to="/about">About</RouterLink></li>
        <li class = "listItem strokeText"><RouterLink to="/profile">Profile</RouterLink></li>
      </ul>
    </nav>

    <div id="ArticleBox">
      <RouterView />
    </div>

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
#ArticleBox {
  grid-area: main;
}
body h2 b {
  font-size:3rem;
  color:white;
  text-shadow:
      -4px -4px 0 #fdbb55,
      4px -4px 0 #ffb129,
      -4px 4px 0 #fa901e,
      4px 4px 0 #ff9d2e;
}
body {
  color: #ffffff;
  background-color: #f7efdb;
  min-height: 40vh;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}

.articleItem h2{
  margin:18px;
  color: #fd616b;
}
.footer {
  grid-area: footer;
  color:#72BDDD;
}
.sideBar a {
  color: white;
  text-decoration: none;
}
h1{
  margin:0;
  color:#FFBC56;
  font-size:3.2rem;
  padding-top:1.6rem;
  padding-left:3.1rem;
}
</style>