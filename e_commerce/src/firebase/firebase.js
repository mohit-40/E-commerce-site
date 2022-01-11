import { initializeApp } from "firebase/app"; 
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBfKjGBrwLqG3GdhaWuZolJF4LP9JV3V1U",
  authDomain: "my-shop-98684.firebaseapp.com",
  projectId: "my-shop-98684",
  storageBucket: "my-shop-98684.appspot.com",
  messagingSenderId: "308311856275",
  appId: "1:308311856275:web:7486746307216705fde966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize service
const storage = getStorage();

export {storage};
export default app;
