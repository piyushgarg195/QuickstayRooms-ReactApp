// const Firebase = require("firebase");
import firebase from "firebase";
// import app from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBP_FvjVOsMxCCwVFEHnbMHeDEsPQYvQ2I",
  authDomain: "quickstay-rooms.firebaseapp.com",
  databaseURL: "https://quickstay-rooms.firebaseio.com",
  projectId: "quickstay-rooms",
  storageBucket: "quickstay-rooms.appspot.com",
  messagingSenderId: "337290543560",
  appId: "1:337290543560:web:17d4514c6341c30daac0fd",
  measurementId: "G-7X4SJ5Z11D"
};

// const firebase = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;
