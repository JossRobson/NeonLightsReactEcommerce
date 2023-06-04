// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJZMNFpURi0Op1on_xJBPPVy3QFgT0oZ0",
  authDomain: "neon-lights-react-ecommerce.firebaseapp.com",
  projectId: "neon-lights-react-ecommerce",
  storageBucket: "neon-lights-react-ecommerce.appspot.com",
  messagingSenderId: "454366090313",
  appId: "1:454366090313:web:66f66eeb912fea33bfdb98",
  measurementId: "G-23ER5LL5GP"
};


const app = initializeApp(firebaseConfig);

//export const initFirebase = () => app
export const initFirestore =() =>app
  
  
