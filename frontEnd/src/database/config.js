  // Initialize Firebase
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBPEWNx3BpzD_e-IQ07WbRMNjZYJ--5F4Q",
  authDomain: "photoapp-43471.firebaseapp.com",
  databaseURL: "https://photoapp-43471.firebaseio.com",
  projectId: "photoapp-43471",
  storageBucket: "photoapp-43471.appspot.com",
  messagingSenderId: "467330773365"
};
firebase.initializeApp(config);

const database = firebase.database();

export {database};