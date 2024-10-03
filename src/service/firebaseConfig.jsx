import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD38_u6v3RuBH9eOv0_LXNbhSHYzTaNJQM",
  authDomain: "ai-travel-planner-9e12b.firebaseapp.com",
  projectId: "ai-travel-planner-9e12b",
  storageBucket: "ai-travel-planner-9e12b.appspot.com",
  messagingSenderId: "401849721331",
  appId: "1:401849721331:web:9881e45019dcd15b147286",
  measurementId: "G-BKC502RXKV",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
