// src/firebase.js

import "firebase/compat/firestore";
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDfoLhNUyS7zbNjivJJFRBaWoVOfm-3qGQ",
  authDomain: "bec-data-e08b7.firebaseapp.com",
  projectId: "bec-data-e08b7",
  storageBucket: "bec-data-e08b7.appspot.com",
  messagingSenderId: "1013867994146",
  appId: "1:1013867994146:web:8915bdcfba306989fbbe7b",
  measurementId: "G-2WTF07DX7D",
};

firebase.initializeApp(firebaseConfig);
const app=initializeApp(firebaseConfig)

//const app=initializeApp(firebaseConfig);

let firestore = getFirestore(app)

export { app, firestore };

/*
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config here
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
*/
