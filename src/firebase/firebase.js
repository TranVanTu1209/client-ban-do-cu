import firebase from 'firebase';

//   const firebaseConfig = {
//   apiKey: "AIzaSyCi4FOtEmWuYR797Do2vgY2yvdXpXy3Xmo",
//   authDomain: "ban-do-cu.firebaseapp.com",
//   databaseURL: "https://ban-do-cu.firebaseio.com",
//   projectId: "ban-do-cu",
//   storageBucket: "ban-do-cu.appspot.com",
//   messagingSenderId: "985950111663",
//   appId: "1:985950111663:web:1dcc4e045d21f3b35b915a",
//   measurementId: "G-9DBD8YGQRL"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tiki-80cb5.firebaseapp.com",
  databaseURL: "https://tiki-80cb5.firebaseio.com",
  projectId: "tiki-80cb5",
  storageBucket: "tiki-80cb5.appspot.com",
  messagingSenderId: "1010898623547",
  appId: "1:1010898623547:web:5b2b98bdc56507eb59101e",
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage().ref();

export { db, auth, storage };

