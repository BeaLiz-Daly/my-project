<script setup lang="js">
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
        height="190"
    >

    <h2>{{ article.articleTitle }}</h2>
  </div>
</template>

<style scoped>

</style>