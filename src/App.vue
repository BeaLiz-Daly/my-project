<script setup lang="ts">
import { ref, computed } from 'vue'

const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?', category: 'ThinkPiece' },
  {articleID: 2, articleTitle: 'When Life gives you Limes', category: 'Recipe'},
  {articleID: 3, articleTitle: 'The Comprehensive History Of Figs', category: 'Educational'}]);

const articleContent = ref([{para1: "some info about frozen yoghurt"}])

let nextID = articles.value.length+1;  //variable initialised to 4 for function to add an article

</script>

<template>
  <body>
  <div id="app">  <!--telling vue where to start-->
    <header><h1>New Articles</h1></header>
      <div v-for="item in articles" :key="item.articleID">  <!--v-for to display objects in array 'articles' -->
        <h2> Article {{item.articleID}} : {{item.articleTitle}} <img src="/fruitImages/froYo.jpg" alt="frozenYoghurt"></h2>
      </div> <!--app-->
  </div>
  </body>
</template>

<style>
</style>
