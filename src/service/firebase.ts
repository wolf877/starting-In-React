// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth' 
import {getDatabase} from 'firebase/database'
import * as firebase from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78ZHyLtBBNnrkLQQZX3tgj3-u4Lpaw0E",
  authDomain: "projeto001-f1718.firebaseapp.com",
  databaseURL: "https://projeto001-f1718-default-rtdb.firebaseio.com",
  projectId: "projeto001-f1718",
  storageBucket: "projeto001-f1718.appspot.com",
  messagingSenderId: "104261187857",
  appId: "1:104261187857:web:ff3ba23c984af354e734b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const database = getDatabase(app);

export {firebase, auth, database};