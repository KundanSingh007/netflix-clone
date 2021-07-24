import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBBOAvRMEbwTiznoevUbkCU6fw_rtg7Dc4",
  authDomain: "netflix-clone-kd.firebaseapp.com",
  projectId: "netflix-clone-kd",
  storageBucket: "netflix-clone-kd.appspot.com",
  messagingSenderId: "245827596350",
  appId: "1:245827596350:web:2743e86526fbb556bca16f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;

