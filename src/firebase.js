import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCp72rnxBZSq94jGhi3EWYNNQy-pYor60",
  authDomain: "login-auth-b7cc0.firebaseapp.com",
  projectId: "login-auth-b7cc0",
  storageBucket: "login-auth-b7cc0.appspot.com",
  messagingSenderId: "100861706033",
  appId: "1:100861706033:web:bc536d1b6136d0f706ba10",
  measurementId: "G-GX32ZFVCFL"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;  