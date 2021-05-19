import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5cGjwLY4Ci2M6L-vyOMaX1JLyJaUJ3xI",
  authDomain: "linkedin-clone-f5477.firebaseapp.com",
  projectId: "linkedin-clone-f5477",
  storageBucket: "linkedin-clone-f5477.appspot.com",
  messagingSenderId: "1062429581094",
  appId: "1:1062429581094:web:0517b321c3686b6548abe7",
  measurementId: "G-RX76SJ5HM8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, storage, provider };
export default db;
