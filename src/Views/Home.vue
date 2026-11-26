<script setup lang="js">
import { articles, yourArticles } from '../data/articles.js'
import ArticleItem from '../components/ArticleItem.vue'
</script>

<template>
  <h1>New Articles</h1>
  <div class="articleContainer">
    <ArticleItem
        v-for="article in articles"
        :key="article.articleID"
        :article="article"
    />
  </div>
  <h1 id="savedArticles">Your Articles</h1>
  <div class="articleContainer">
    <ArticleItem
        v-for="article in yourArticles"
        :key="article.articleID"
        :article="article"
    />
  </div>


</template>

<style scoped>
.articleContainer {
  display: flex;
  margin-left:30px;
  flex-direction: row;
  flex-wrap: wrap;
}
#savedArticles{
  padding:15px;
  margin:0;
  margin-top:30px;
}
</style>