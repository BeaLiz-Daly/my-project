<script setup lang="ts">
import { ref, computed } from 'vue'

const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?', category: 'ThinkPiece', image: '/fruitImages/froYo.jpg', },
  {articleID: 2, articleTitle: 'When Life gives you Limes', category: 'Recipe'},
  {articleID: 3, articleTitle: 'The Comprehensive History Of Figs', category: 'Educational'}]);

const articleContent = ref([{para1: "some info about frozen yoghurt"}])

let nextID = articles.value.length+1;  //variable initialised to 4 for function to add an article

</script>

<template>
    <div id="app">

      <div class="sideBar">
        <ul>
          <li class = "listItem"><a>Home</a></li>
          <li class = "listItem"><a>Activities</a></li>
          <li class = "listItem"><a>Clubs</a></li>
          <li class = "listItem"><a>Societies</a></li>
          <li class = "listItem"><a>Calendar</a></li>
        </ul>
      </div>

      <!--   <header><h1>New Articles</h1></header> -->
<!-- <div class ="articleItem" v-for="item in articles" :key="item.articleID">  v-for to display objects in array 'articles' -->
<!--  <h2> Article {{item.articleID}} : {{item.articleTitle}}</h2>  -->
<!-- <img :src="item.image" :alt="item.articleTitle" width="200" height="220"> -->
<!-- </div> -->
  </div>


</template>

<style>

</style>
