<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { createApp } from "vue";
  import { useStore } from "../store/index.js"
  import Header from "../components/Header.vue"

  const store = useStore();

</script>

<template>
  <div class="cart-container">
    <Header class="header" v-bind:lon="true" /><br/><br/><br/><br/>
    <div class="itemsbought">
      <div v-for="item in Array.from(store.cart.values())" class="items">
        <div class="item">
            <p>
              {{ item.title }}
            </p>
              <img v-if="item.poster" :src="'https://image.tmdb.org/t/p/w500' + item.poster" class="image">
              <br/>
          <button @click="store.removeFromCart(item.id)" id="removebutton">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color:blanchedalmond;
}


.cart-container {
  padding:0;
  margin:0;
  height:200vh;
  background-color:blanchedalmond;
}

.itemsbought{
  width:100vw;
  height:100vh;

  z-index:0;
  border:0;
  padding:0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  background-color:blanchedalmond;
}

.items{
  color:black;
  z-index:2;
}

.items{
    background-color:black;
    border-radius:20px;
    padding:10px;
    margin:20px;
    color:white;
    width:20vw;
    height:440px;

    font-family:'Courier New', Courier, monospace;
}
.item > img{
    border-radius: 20px;
    width:16vw;
    height:auto;
}

.item > button{
  margin-left:auto;
  margin-right:auto;
  position:absolute;

  color:white;
  background-color:black;
  border:none;

}
</style>