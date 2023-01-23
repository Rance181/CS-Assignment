<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store/index.js";
import { auth } from "../firebase/index.js";
import { createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup, 
} from "firebase/auth";

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

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  router.push("./account")
  console.log(user);
};
</script>

<template>
  <div class="register-container">
    <h1>Register</h1>
    <button id="registergoogle" @click="registerUserByGoogle">Register By Google</button>

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

#registergoogle{
  margin-top:10px;
  left:auto;
  right:auto;

  width:60vw;
  height:30px;

  border-color:black;

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