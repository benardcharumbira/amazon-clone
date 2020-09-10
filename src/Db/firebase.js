import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD37730LBpHNqyMEJRRNzp0RmSvKO_HFZA",
  authDomain: "clone-7323e.firebaseapp.com",
  databaseURL: "https://clone-7323e.firebaseio.com",
  projectId: "clone-7323e",
  storageBucket: "clone-7323e.appspot.com",
  messagingSenderId: "387903967998",
  appId: "1:387903967998:web:78aa447d86b6357fc54baf",
  measurementId: "G-TYE37EPEPP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
