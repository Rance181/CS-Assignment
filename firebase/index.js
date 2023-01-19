import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf5H1NqXJ13lDnJAhBhHzIeWK7DYsiirA",
  authDomain: "fir-assignment-ha.firebaseapp.com",
  projectId: "fir-assignment-ha",
  storageBucket: "fir-assignment-ha.appspot.com",
  messagingSenderId: "411649506945",
  appId: "1:411649506945:web:63d4077a61d23628085780",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage };
