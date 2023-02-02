// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsVnCG1ASTdC_EeOluVAY3-wo72y3RPTc",
  authDomain: "confessionsite-344d8.firebaseapp.com",
  projectId: "confessionsite-344d8",
  storageBucket: "confessionsite-344d8.appspot.com",
  messagingSenderId: "438191958783",
  appId: "1:438191958783:web:44a2daf65819fcb147baca",
  measurementId: "G-9S82J2MVSF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const dbInstance = collection(database, "users");
export const reportDbIn = collection(database, "reports");
