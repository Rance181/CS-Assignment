import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export var totalPages = ref(0);

export const useStore = defineStore("store", {
  state: () => {
    return {
      movies: [],
      cart: new Map(),
    };
  },
  actions: {
    async getMovies(id) {
      let data = (
        await axios.get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "ad891932e4907c23fc8a99002a4b5d3f",
            with_genres: id,
          },
        })
      ).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          release_date: movie.release_date,
          overview: movie.overview,
          poster: movie.poster_path,
        };
      });
    },
    async searchMovies(que, pg) {
      let data = (
        await axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "ad891932e4907c23fc8a99002a4b5d3f",
            query: que,
            page: pg
          },
        })
      ).data.results;
      
      totalPages.value = data.total_pages;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          release_date: movie.release_date,
          overview: movie.overview,
          poster: movie.poster_path,
        };
      });
    },
    addToCart(id, data) {
      this.cart.set(id, data);
    },
    removeFromCart(id) {
      this.cart.delete(id);
    }
  },
});

export const loge = ref(false);

export const useCart = defineStore("cart", {
  state: () => {
    return {
      purchase: [],
      size: 0,
    };
  },
  actions: {
    addToCart(movie) {
      this.purchase[this.size] = movie;
      this.size = this.size + 1;
    },

    getItem(index) {
      return this.purchase[index];
    },
  },
});
