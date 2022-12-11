<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";

const store = useStore();
 
const router = useRouter();

const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./account");
    store.logged = true;
    console.log(store.logged)
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="login-container">
    <h1>Home</h1>
    <form @submit.prevent="login()">
      <input type="text" class="userLog" placeholder="Username" v-model="username" />
      <input type="password" class="userLog" placeholder="Password" v-model="password" />
      <input type="submit" id="submitbutton" value="Login" />
    </form>
    <div v-if="error">
      <p>Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 3rem;

  background-color:bisque;
}

.userLog {
  width:60vw;
  height:30px;
  margin-top:10px;
}

#submitbutton {
  margin-top:10px;
  left:auto;
  right:auto;
}

form {
  display: flex;
  flex-direction: column;
}
</style>