<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import { auth } from "../firebase/index.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const router = useRouter();
const store = useStore();

const registerUser = async () => {
  if (password1.value !== password2.value) {
    console.log("Password issue");
    return;
  } else {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
    router.push("./account")
  }


};

</script>

<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="registerUser()">
      <input v-model="email" type="email" placeholder="email" class="userLog" /> <br />
      <input v-model="password1" type="password" placeholder="password" class="userLog" /> <br />
      <input v-model="password2" type="password" placeholder="re-enter password" class="userLog" /> <br />
      <input type="submit" id="submitbutton" value="Register" />
    </form>
  </div>
</template>

<style scoped>
.register-container {
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