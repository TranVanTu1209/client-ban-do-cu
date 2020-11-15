import firebase from 'firebase';

/*
  const firebaseConfig = {
  apiKey: "AIzaSyCi4FOtEmWuYR797Do2vgY2yvdXpXy3Xmo",
  authDomain: "ban-do-cu.firebaseapp.com",
  databaseURL: "https://ban-do-cu.firebaseio.com",
  projectId: "ban-do-cu",
  storageBucket: "ban-do-cu.appspot.com",
  messagingSenderId: "985950111663",
  appId: "1:985950111663:web:1dcc4e045d21f3b35b915a",
  measurementId: "G-9DBD8YGQRL"
};
*/

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


export { db, auth };

/* 
  file upload

  var uploadTask = storageRef.child('images/rivers.jpg').put(file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});
*/
