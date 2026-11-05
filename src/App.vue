<script setup lang="ts">
import { ref, computed } from 'vue'

const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?' },
  {articleID: 2, articleTitle: 'When Life gives you Limes'},
  {articleID: 3, articleTitle: 'The Comprehensive History Of Figs'}]);

let nextID = articles.value.length+1;  //variable initialised to 4 for function to add an article

</script>

<template>
  <body>
  <div id="app">
    <header>What to put here...hmmm</header>
      <div v-for="item in articles" :key="item.articleID">  <!--v-for to display objects in array 'articles' -->
        <h1> Article: {{item.articleID}} {{item.articleTitle}} <br></h1>
      </div> <!--app-->
  </div>
  </body>
</template>

<style>
</style>
