<script setup></script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
*,
body{
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: balnchedalmond;
}

RouterView{
  top:0;
  padding:0;
  margin:0;
}

.app-container {
  margin:0;
  padding:0;
  width: 100vw;
  height: 100vh;

  left:0;

  top:0;
}
</style>
