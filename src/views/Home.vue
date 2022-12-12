<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";

</script>

<template>
  <div class="home-container">
  <Header/>
  <Hero/>
  <Footer/>
  </div>
</template>

<style scoped>
body {
  width:100vw;
}
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 3rem;
  
  background-color:blanchedalmond;

  top:0;
}
header {
  margin:0;
  padding:0;
}

form {
  display: flex;
  flex-direction: column;
}
</style>