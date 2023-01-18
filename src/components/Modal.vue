<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCart } from "../store/index.js";
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const cart = useCart();

console.log(props);

</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')" custom>
        <div class="modal-inner-container">
          <button class="close-button" @click="emits('toggleModal')">X</button>
          <div class="wrapper">
            <div class="img">
              <img :src="'https://image.tmdb.org/t/p/w500' + props.id.poster" class="image"/>
            </div>
            <div class="introduction">
              <h1>{{ props.id.title }}</h1>
              Original Title - {{ props.id.original_title }} <br /><br/>
              Release Date: {{ props.id.release_date }} <br /><br/>
              Overview: {{ props.id.overview }}<br /><br/>
              <button class="cart" id="btn_sub" @click="cart.addToCart(props.id)">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1F2123;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.wrapper {
  display:grid;
  grid-template-columns: 1fr 1fr;
}

.wrapper > .img > img{
  height:400px;
  width:auto;
}

.wrapper > .introduction {
  color:white;
}
</style>