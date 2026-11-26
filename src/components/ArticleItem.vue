<script setup lang="js">
import articles from 'src/data/articles.js';
</script>

<template>
  <div
      class="articleItem"
      v-for="item in articles"
      :key="item.articleID">
    <img
        :src="item.image"
        :alt="item.articleTitle"
        width="300" height="190">
    <h2> {{item.articleTitle}}</h2>
  </div>
</template>