import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlasZnz9gxbGCXUOgckP7zpDb5_1pmT4Q",
  authDomain: "netflix-84513.firebaseapp.com",
  projectId: "netflix-84513",
  storageBucket: "netflix-84513.appspot.com",
  messagingSenderId: "349394759394",
  appId: "1:349394759394:web:c25be1b2cf79bf2f0df8bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
export { auth };