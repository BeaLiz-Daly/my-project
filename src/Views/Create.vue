<script setup lang="ts">
const addButton = document.getElementById("addButton");
function addArticle() {
  console.log("button was clicked");
}
</script>

<template>
  <h1>
    <button class=addButton type="button" @click="addArticle">
      Create New
    </button>
  </h1>
</template>

<style scoped>
.addButton {
  font-size:2.4rem;
  font-weight:700;
  height:85px;
  width:240px;
  border-color: darkorange;
  border-style: solid;
  border-width: medium;
  background-color: #fdbb55;
  color: white;
  border-radius:10px;
}
.addButton{

}
</style>