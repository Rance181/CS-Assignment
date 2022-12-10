<script setup></script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
*,
::before,
::after {
  padding: 0;
  margin: 0;
  color: white;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #000000aa;
}

.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
