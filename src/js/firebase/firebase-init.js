import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXOZK3A1Cq15OnSZCNcL4xLJCGEJYmxRw",
  authDomain: "js-project-4c530.firebaseapp.com",
  projectId: "js-project-4c530",
  storageBucket: "js-project-4c530.appspot.com",
  messagingSenderId: "937211680361",
  appId: "1:937211680361:web:25bd764f13088b464ff4f8",
  measurementId: "G-8TX94BS9ML"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);