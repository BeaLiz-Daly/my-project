<script setup lang="ts">
import { ref, computed } from 'vue'


const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?', category: 'ThinkPiece', image: '/fruitImages/froYo.jpg', },
  {articleID: 2, articleTitle: 'When Life gives you Limes', category: 'Recipe', image: 'assets/fruitImages/limes.jpg' },
  {articleID: 3, articleTitle: 'The Comprehensive History Of Figs', category: 'Educational'}]);

const articleContent = ref([{para1: "some info about frozen yoghurt"}])

let nextID = articles.value.length+1;  //variable initialised to 4 for function to add an article

</script>

<template>
      <div class="sideBar">
        <nav>
        <ul>
          <li class = "listItem strokeText" ><a>Home</a></li>
          <li class = "listItem strokeText"><a>Saved</a></li>
          <li class = "listItem strokeText"><a>About</a></li>
          <li class = "listItem strokeText"><a>Profile</a></li>
        </ul>
        </nav>
      </div>

       <header><h1>New Articles</h1></header>
<div class ="articleItem" v-for="item in articles" :key="item.articleID">
 <img :src="item.image" :alt="item.articleTitle" width="300" height="220">
  <h2> Article {{item.articleID}} : {{item.articleTitle}}</h2>
 </div>


</template>

<style>

body {
  color: #ffffff;
  background-color: #f7efdb;
  min-height: 40vh;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}

.articleItem {
  background-color: #fdda7b;
  border-radius: 18px;
}

.articleItem h2{
  color: #FF626C;
}

</style>
