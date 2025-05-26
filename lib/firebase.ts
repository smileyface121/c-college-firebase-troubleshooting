// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXLEvnyVC6fXXa5I3FCuTpLv2DoYlemNo",
  authDomain: "cell-college.firebaseapp.com",
  projectId: "cell-college",
  storageBucket: "cell-college.appspot.com",
  messagingSenderId: "1067729882455",
  appId: "1:1067729882455:web:dee75f8800345cbeef8212",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
