<script setup>
import axios from "axios";
import { useStore } from "../../store/index.js";
import Poster from "../Hero/Poster.vue";

const store = useStore();

const movieData = store.movies;



</script>

<template>
  <div class="hero-container">
    <div v-for="(movie, index) in movieData">
      <Poster mid= movie></Poster>

    </div>
  </div>
</template>

<style scoped>
</style>