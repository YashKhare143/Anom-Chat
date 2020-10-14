// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3DkU1oW5kjws6tnNjKMBb29KWR3oWXnY",
  authDomain: "anom-chat.firebaseapp.com",
  databaseURL: "https://anom-chat.firebaseio.com",
  projectId: "anom-chat",
  storageBucket: "anom-chat.appspot.com",
  messagingSenderId: "818880582633",
  appId: "1:818880582633:web:f8bd0f3515631450b07178",
  measurementId: "G-MNLVVE8X4P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export {auth, provider};
export default db;