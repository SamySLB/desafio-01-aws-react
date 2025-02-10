import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_PzzD63dZbciAjbO2LUEg-PExjUCHEwg",

    authDomain: "project-rebuildp.firebaseapp.com",
  
    projectId: "project-rebuildp",
  
    storageBucket: "project-rebuildp.firebasestorage.app",
  
    messagingSenderId: "730915329406",
  
    appId: "1:730915329406:web:43165e9f8ed891044d0f2f",
  
    measurementId: "G-WSSTFSNQS5"
  
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
