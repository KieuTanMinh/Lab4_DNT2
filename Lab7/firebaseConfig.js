
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCMKoS6vCYExEMtdh-JMkWfRTr6MW2GqU",
  authDomain: "mod18309-minh.firebaseapp.com",
  projectId: "mod18309-minh",
  storageBucket: "mod18309-minh.appspot.com",
  messagingSenderId: "39332150478",
  appId: "1:39332150478:web:6b190c549d0a8182d0649f",
  measurementId: "G-LNYB2YVKPB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB= getFirestore(FIREBASE_APP);
export const DATABASE = getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
const analytics = getAnalytics(app);