import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM32V7-HNktpL36q-qzNGJW3TSmFdmHEY",
  authDomain: "netflix-f7c7.firebaseapp.com",
  projectId: "netflix-f7c7",
  storageBucket: "netflix-f7c7.appspot.com",
  messagingSenderId: "758516134101",
  appId: "1:758516134101:web:e1b0b32411ec76fcd3f25c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

