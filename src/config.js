import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC967seiyd1UVm-ttCjzkHJDHEvXD9OTWU",
  authDomain: "snapback-10982.firebaseapp.com",
  projectId: "snapback-10982",
  storageBucket: "snapback-10982.appspot.com",
  messagingSenderId: "924134557896",
  appId: "1:924134557896:web:b023c9ead73ccf1bb77dfd",
  measurementId: "G-B0PVSQJJZD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


export default app;
