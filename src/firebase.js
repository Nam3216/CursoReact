// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDh8Gv1fEN_Tadhd2zZQERHTeu5MSR4dfA',
  authDomain: 'ecommerce-react-45765.firebaseapp.com',
  projectId: 'ecommerce-react-45765',
  storageBucket: 'ecommerce-react-45765.appspot.com',
  messagingSenderId: '492631342338',
  appId: '1:492631342338:web:930000a3d325860bca961b',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); //esto lo agrego yo
export default db; //esto lo agrego yo
