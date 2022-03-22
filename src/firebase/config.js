import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const apiKey = process.env.REACT_APP_FIREBASE_KEY;
const appid = process.env.REACT_APP_FIREBASE_APPID;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const authdomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const storagebucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingsenderid = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;

const firebaseConfig = {
  apiKey: "AIzaSyAGMZyuJslEws0OiWTPEsqrafKpJFRj3JQ",
  authDomain: `${authdomain}`,
  projectId: `${projectId}`,
  storageBucket: `${storagebucket}`,
  messagingSenderId: `${messagingsenderid}`,
  appId: `${appid}`,
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db };
export { auth };
