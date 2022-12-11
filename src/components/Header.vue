<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const moveLogin = () => {
    router.push("./login");
};

const moveCart = () => {
    router.push("./cart");
};

</script>

<template>
<div class="grid-container">
<div class="item">
    <p id="logo">TMDB</p>
</div>
<div class="grid-item">
    <p/>
</div>
<div class="grid-item">
    <button id="login" @click="moveLogin">Login</button>
</div>
<div class="grid-item">
    <button id="cart" @click="moveCart">Cart</button>
</div>
</div>
</template>

<style scoped>
.grid-container {
  position:absolute;

  display: grid;
  grid-template-columns: 2fr 6fr 2fr 2fr;
  width:100vw;
  height:50px;

  margin-top:0;
  padding-top:0;

  top:5px;
}

#logo {
  margin-top:0;
  padding-top:0;
  padding-left:20px;

  height:40px;
  width:auto;
}

.grid-item {
  background-color: blanchedalmond;
  font-size: 30px;
  text-align: center;
  height:50px;
  width:auto;
}

</style>