import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-hPN34sS0AcfGYJZ_3eaFb9SomhkWMHY",
  authDomain: "ecss-a82b4.firebaseapp.com",
  projectId: "ecss-a82b4",
  storageBucket: "ecss-a82b4.firebasestorage.app",
  messagingSenderId: "232733438455",
  appId: "1:232733438455:web:a2735061d680cf4d157ef2",
  measurementId: "G-D2KK72FS42",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
