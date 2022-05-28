import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCESrvmqNqT3pmVQ1_TLwQflKqdPlHIk-I",
  authDomain: "videoblog-c3b56.firebaseapp.com",
  projectId: "videoblog-c3b56",
  storageBucket: "videoblog-c3b56.appspot.com",
  messagingSenderId: "1069489404223",
  appId: "1:1069489404223:web:60af93bbfdeb4dfd987b8a"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
