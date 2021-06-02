import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEWJNXe5ytrIjrDsWtlldwVmDQP4bDuyI",
    authDomain: "linkedln-upgraded.firebaseapp.com",
    projectId: "linkedln-upgraded",
    storageBucket: "linkedln-upgraded.appspot.com",
    messagingSenderId: "1000827961379",
    appId: "1:1000827961379:web:885a310a3987604eec7196"
  };

  const firebasApp = firebase.initializeApp(firebaseConfig);
  const db = firebasApp.firestore();
  const auth = firebase.auth();

  export { db, auth };