<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "Jimmy" && password.value === "section33") {
    router.push("./account");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="login-container">
    <h1>Home</h1>
    <form @submit.prevent="login()">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" />
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
}

form {
  display: flex;
  flex-direction: column;
}
</style>