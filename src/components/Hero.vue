<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
  <div class="hero-container">
    <h1 class="content">
    TMDB MOVIE WEBSITE
    </h1>
    <p class="content">
    There will be some movies that can change you
    </p>
  </div>
</template>

<style scoped>
.hero-container {
  position:relative;
  width:100%;
  height:75%;
  font-size: 3rem;
}

.hero-container::before {
  content: "";
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
  background-image:url(../../../img/53755-movies-The_Shawshank_Redemption.jpg);
  background-size:cover;
  position: absolute;
}

.content{
  font-family:'Times New Roman', Times, serif;
  position:relative;
  opacity:0.95 !important;
}
</style>