import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXkZezt69VfOYacdYQS6hfmfSmNoz-fTQ",
  authDomain: "netflix-f7c7c.firebaseapp.com",
  projectId: "netflix-f7c7c",
  storageBucket: "netflix-f7c7c.appspot.com",
  messagingSenderId: "328930609356",
  appId: "1:328930609356:web:8c4901ef8b5751c5d39a69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

