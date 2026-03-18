import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJV0n244GO2DGFQRN1mxh6hLu_SS7_fQc",
  authDomain: "horario-cloud.firebaseapp.com",
  projectId: "horario-cloud",
  storageBucket: "horario-cloud.firebasestorage.app",
  messagingSenderId: "559047281649",
  appId: "1:559047281649:web:c3f0d7a2c4600d52085250"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
