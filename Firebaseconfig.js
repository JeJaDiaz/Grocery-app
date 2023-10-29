import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT3PYGfE8O6-K58VKXEdi2onnq-jB_HoU",
  authDomain: "grocery-d18b7.firebaseapp.com",
  projectId: "grocery-d18b7",
  storageBucket: "grocery-d18b7.appspot.com",
  messagingSenderId: "244413712149",
  appId: "1:244413712149:web:57e9a8786567b186c08b1c",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };
