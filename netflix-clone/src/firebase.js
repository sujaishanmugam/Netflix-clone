import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCGt_g5IKGU7CJJXFCI0Vy-FuUImkcjl8Q",
    authDomain: "netflix-clone-d580a.firebaseapp.com",
    projectId: "netflix-clone-d580a",
    storageBucket: "netflix-clone-d580a.appspot.com",
    messagingSenderId: "653897476467",
    appId: "1:653897476467:web:fe83a78a2b17780a543d06",
    measurementId: "G-Q6XSRHFX2Q"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;