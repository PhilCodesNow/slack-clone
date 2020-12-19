import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQHZI6sp7GOFVOMEc5DTSfA-bGw0N3UWA",
    authDomain: "slack-clone-fac22.firebaseapp.com",
    projectId: "slack-clone-fac22",
    storageBucket: "slack-clone-fac22.appspot.com",
    messagingSenderId: "1012242056674",
    appId: "1:1012242056674:web:9e06abeecf7aa1168e65bb",
    measurementId: "G-VT9CHSBSN6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;