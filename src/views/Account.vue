<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from "vue";
import { useStore } from "../store/index.js";
import { ref } from "vue";


const store = useStore();

const movieData = ref(false);
let trailers = ref([]);

movieData.value = store.movies.value;

for (let movie of movieData.value) {
      trailers.value.push(
        (
          await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
            params: {
              api_key: "23b3a0cee96fcac58b28918686474f75",
              append_to_response: "videos",
            },
          })
        ).data.videos.results
          .filter((trailer) => trailer.type === "Trailer")
          .at(0).key
      );      
}
  console.log(trailers)
</script>


<template>
  <div class="account-container">
    <div v-for="(movie, index) in movieData.value">
      <img
      :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
      class="image"
    />
    </div>
  </div>
</template>

<style scoped>

</style>