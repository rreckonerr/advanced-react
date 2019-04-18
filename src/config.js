import firebase from "firebase";

export const appName = "advanced-react";
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: `${appName}-48ec3.firebaseapp.com`,
  databaseURL: `https://${appName}-48ec3.firebaseio.com`,
  projectId: `${appName}-48ec3`,
  storageBucket: `${appName}-48ec3.appspot.com`,
  messagingSenderId: "943148550056"
};

firebase.initializeApp(firebaseConfig);
