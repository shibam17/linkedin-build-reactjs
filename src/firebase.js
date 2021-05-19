import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2o6NDrL7xa-NxgpzrTOBY8IEPJPdJjpY",
  authDomain: "linkedin-build.firebaseapp.com",
  projectId: "linkedin-build",
  storageBucket: "linkedin-build.appspot.com",
  messagingSenderId: "421362128465",
  appId: "1:421362128465:web:c75f1aac64ac526955ca70",
  measurementId: "G-W6ZH9ZMJ7C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export {auth, provider, storage};

export default db;