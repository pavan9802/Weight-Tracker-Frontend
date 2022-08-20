import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
