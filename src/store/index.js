import { defineStore } from 'pinia'
import axios from 'axios';
import { ref } from "vue";

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      logged:[]
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "ad891932e4907c23fc8a99002a4b5d3f",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          release_date: movie.release_date,
          overview: movie.overview,
          poster: movie.poster_path,
        }
      });
    },
    toLog(){
      this.logged = false;
    }
  }
});

export const loge = ref(false);

export const useCart = defineStore('cart',{
  state: () => {
    return {
      purchase:[],
      size:0, 
    }
  },
  actions:{
    addToCart(movie){
      this.purchase[this.size]=movie;
      this.size=this.size+1;
    },

    getItem(index){
      return this.purchase[index];
    }
  }
})