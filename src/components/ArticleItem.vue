<script setup>
defineProps({
  article: Object
})
</script>

<template>
  <div class="articleItem">
    <img
        :src="article.image"
        :alt="article.articleTitle"
        width="300"
        height="180"
    >
    <h2>{{ article.articleTitle }}</h2>
  </div>
</template>