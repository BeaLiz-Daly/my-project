<script setup lang="ts">
import { ref, computed } from 'vue'
const articleContent = ref([{para1: "some info about frozen yoghurt"}])
const articles = ref([
  {articleID: 1, articleTitle: 'Frozen Yoghurt, Better than Ice Cream?', category: 'ThinkPiece', image: '/fruitImages/froYo.jpg', },
  {articleID: 2, articleTitle: 'When Life gives you Limes', category: 'Recipe', image: 'src/assets/fruitImages/limes.jpg' },
  {articleID: 3, articleTitle: 'The Comprehensive History Of Figs', category: 'Educational', image: 'src/assets/fruitImages/niceLittleFig.jpg'
  }]);
let nextID = articles.value.length+1;
</script>

<template>

  <div class="mainPageBody">

    <header class="topBar">
      <h2><b>Fruit Lovers!</b></h2>
    </header>

      <nav class="sideBar">
        <ul>
          <li class = "listItem strokeText" ><a>Home</a></li>
          <li class = "listItem strokeText"><a>Saved</a></li>
          <li class = "listItem strokeText"><a>About</a></li>
          <li class = "listItem strokeText"><a>Profile</a></li>
        </ul>
      </nav>

    <main class="articleContent">

     <div id="newArticles">
        <h1>New Articles</h1>
            <div  class="articleItem" v-for="item in articles" :key="item.articleID">
            <img :src="item.image" :alt="item.articleTitle" width="300" height="190">

            <h2> {{item.articleTitle}}</h2>
           </div>
     </div>

     <div id="savedArticles">
       <h1>Saved</h1>
       <div  class="articleItem" v-for="item in articles" :key="item.articleID"></div>
     </div>
</main>
    <footer class="footer"></footer>
</div>
</template>


<style>
#newArticles h1 {
  font-size:2.7rem;
  grid-column: 1 / -1;
}
.topBar{
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainPageBody {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 117px 1fr 160px;
  grid-template-areas:
        "top top top top top top"
        "side main main main main main"
        "side footer footer footer footer footer";
}
.sideBar {
  grid-area: side;
  margin: 0;
}
.sideBar ul {
  margin-right:50px;
}
.articleContent {
  grid-area: main;
}
body {
  margin: 0;
  color: #ffffff;
  background-color: #f7efdb;
  min-height: 40vh;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.articleItem {
  width:300px;
  margin:28px;
  background-color: #fdda7b;
  border-radius: 18px;
}
.articleItem h2{
  color: #FF626C;
  padding-left:10px;
  padding-right:10px;
}
.footer {
  min-height: 180px;
  grid-area: footer;
  background-color:#72BDDD;
}
.articleContent h1 {
  padding:1.5rem;
  font-size:2rem;
  margin: 0;
  color: #fdbb55;
}
.articleContent{
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 30px;
}
#newArticles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}


</style>
