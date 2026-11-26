<script setup lang="js">
import articles from '../data/articles.js'
import ArticleItem from '../components/ArticleItem.vue'
</script>

<template>
  <h1>This is home</h1>
  <div class="articleContainer">
    <ArticleItem
        v-for="article in articles"
        :key="article.articleID"
        :article="article"
    />
  </div>

</template>

<style scoped>

</style>