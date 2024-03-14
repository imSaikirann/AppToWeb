
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

// Your web app's Firebase configuration
const  firebaseConfig = {
  apiKey: "AIzaSyBwGeaCs1qTv9Ir5Cw1Abh6g_wJeBj3Zww",
  authDomain: "testing-792fa.firebaseapp.com",
  projectId: "testing-792fa",
  storageBucket: "testing-792fa.appspot.com",
  messagingSenderId: "756500435103",
  appId: "1:756500435103:web:b262550e6313e4f8fe52aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

export default fireStore;