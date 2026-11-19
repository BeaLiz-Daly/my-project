<script setup lang="ts">
import { ref, computed } from 'vue'
const articleContent = ref([{para1: "some info about frozen yoghurt"}])
const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?', category: 'ThinkPiece', image: '/fruitImages/froYo.jpg', },
  {articleID: 2, articleTitle: 'When Life gives you Limes', category: 'Recipe', image: 'src/assets/fruitImages/limes.jpg' },
  {articleID: 3, articleTitle: 'The Comprehensive History Of Figs', category: 'Educational', image: 'src/assets/fruitImages/niceLittleFig.jpg'
  }]);
let nextID = articles.value.length+1;
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

    <main class="articleContent">
       <h1>New Articles</h1>
<div
    class="articleItem"
    v-for="item in articles"
    :key="item.articleID">

   <img
   :src="item.image"
   :alt="item.articleTitle"
   width="300" height="190">

  <h2> Article {{item.articleID}} : {{item.articleTitle}}</h2>
 </div>
</main>

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
