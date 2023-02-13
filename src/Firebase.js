import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXkZezt69VfOYacdYQS6hfmfSmNoz-fTQ",
  authDomain: "netflix-f7c7c.firebaseapp.com",
  projectId: "netflix-f7c7c",
  storageBucket: "netflix-f7c7c.appspot.com",
  messagingSenderId: "328930609356",
  appId: "1:328930609356:web:d8d6a99b8ea24f00d39a69"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
export { auth };