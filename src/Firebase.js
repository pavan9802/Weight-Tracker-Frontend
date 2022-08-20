import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnHj_91gyn5U2MycImF9PLiYx57X1xqj4",
  authDomain: "weighttracker-development.firebaseapp.com",
  projectId: "weighttracker-development",
  storageBucket: "weighttracker-development.appspot.com",
  messagingSenderId: "189048376390",
  appId: "1:189048376390:web:cbc0279116682eade80e47",
  measurementId: "G-HHWWRB9Q6L",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
