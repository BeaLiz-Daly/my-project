<script setup>
import { nextTick, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SiteNav from './components/siteNav.vue'
const route = useRoute()
//watch(() => route.fullPath, async () => { //
  //await nextTick()//
  // document.querySelector('#main-content h1')?.focus()//
// }) acsessability feature add later//

</script>

<template>
  <!--<a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="mainPageBody">  This is a skip link from Shape Up, may not be needed-->

  <!-- Top Bar -->

     <!--Main Content-->
      <main class="articleContent">
        <div id="newArticles">
          <h1>New Articles</h1>
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
        </div>
        <div id="savedArticles">
          <h1>Saved</h1>
          <div
              class="articleItem"
              v-for="item in articles"
              :key="item.articleID">
          </div>
        </div>


      </main>
      <footer class="footer"></footer>


      <SiteNav/>

      <main id="main-content" tabindex="-1">

        <RouterView/>

      </main>
  </template>

  <style scoped>

  </style>