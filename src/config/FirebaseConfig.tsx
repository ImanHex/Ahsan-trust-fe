import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD6oakT4Ou-2zJUCYrKiKfgILsUFBVo7z8",
  authDomain: "ahsan-trustmark.firebaseapp.com",
  projectId: "ahsan-trustmark",
  storageBucket: "ahsan-trustmark.appspot.com",
  messagingSenderId: "800934051616",
  appId: "1:800934051616:web:5f4803e400e04f4a566145",
  measurementId: "G-3KBHVMHQEL",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
