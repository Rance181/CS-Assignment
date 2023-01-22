<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useStore } from "../store/index.js";
import Modal from "../components/Modal.vue";

const store = useStore();

const movies = store.movies;
const genre = ref(28);

const showModal = ref(false);
const selectedId = ref(0);


const openModal = (movievalue) => {
  showModal.value = true;
  selectedId.value = movievalue;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  await store.getMovies(genre.value);
  console.log(movies)
}
</script>

<template>
  <select v-model="genre" @change="getGenres()">
      <option value="28">Action</option>
      <option value="12">Family</option>
      <option value="16">Science Fiction</option>
      <option value="35">Adventure</option>
      <option value="80">Fantasy</option>
    </select>
  <div class="poster-container">
    <div v-for=" movie in movies" :key="movie.id" class="movies">
      <div class="movie" @click="openModal(movie)">
        <p>
          {{ movie.title }}
        </p>
        <img v-if="movie.poster" :src="'https://image.tmdb.org/t/p/w500' + movie.poster" class="image">
      </div>
      <Modal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
    </div>
  </div>
</template>

<style scoped>
.poster-container {
  border: 0;
  padding: 0;
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  background-color: blanchedalmond;
}

.movies {
  background-color: black;
  border-radius: 20px;
  padding: 10px;
  margin: 20px;
  color: white;
  width: 20vw;

  font-family: 'Courier New', Courier, monospace;
}

.movie>img {
  border-radius: 20px;
  width: 16vw;
  height: auto;
}
</style>
