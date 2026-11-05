<script setup lang="ts">
import { ref, computed } from 'vue'

const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?' },
  {articleID: 2, articleTitle: 'When Life gives you Limes'},]);

</script>

<template>
  <body>
  <div id="app">
    <header>
      <div v-for="item in articles" :key="item.articleID">  <!--v-for to display objects in array 'articles' -->
        <h1> Article: {{item.articleTitle}}</h1>
      </div>
  </header>
  </div>
  </body>
</template>

<style>
</style>
