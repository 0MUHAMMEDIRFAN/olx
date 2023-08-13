import firebase from "firebase";
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA76NhTIEZkrRXdX7xpodLnu6Nfjqb1TzM",
    authDomain: "olx-clone-787a5.firebaseapp.com",
    projectId: "olx-clone-787a5",
    storageBucket: "olx-clone-787a5.appspot.com",
    messagingSenderId: "714489887420",
    appId: "1:714489887420:web:db17c1bd402b9ae37eeeb9",
    measurementId: "G-RBPCL2ZVRP"
};

export default firebase.initializeApp(firebaseConfig)

