<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from "axios";
import { useStore } from "../store/index.js";

const store = useStore();
await store.getMovies();

const movies = store.movies;
console.log(movies);


</script>

<template>
  <div class="poster-container" >
    <div v-for=" movie in movies" :key="movie.id" class="movies">
        <p>
          {{ movie.title }}
        </p>
          <img v-if="movie.poster" :src="'https://image.tmdb.org/t/p/w500' + movie.poster" class="image"/>
    </div>
  </div>
</template>

<style scoped>
.poster-container{
  border:0;
  padding:0;
  display: grid;
  width:100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  background-color:blanchedalmond;
}

.movies{
    background-color:black;
    border-radius:20px;
    padding:10px;
    margin:20px;
    color:white;
    width:20vw;

    font-family:'Courier New', Courier, monospace;
}
.movies>img{
    border-radius: 20px;
    width:16vw;
    height:auto;
}
</style>