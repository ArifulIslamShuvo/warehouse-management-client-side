// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_p6U55Hr-upXcRqT2dxDTGgrJU2Q5u5Y",
  authDomain: "real-furniture-inventory.firebaseapp.com",
  projectId: "real-furniture-inventory",
  storageBucket: "real-furniture-inventory.appspot.com",
  messagingSenderId: "303941351947",
  appId: "1:303941351947:web:3374ee834ecf5c3e3ee50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 