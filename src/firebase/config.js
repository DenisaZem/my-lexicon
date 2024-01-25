import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMUAM_whiCe3AFycKkRkc7GksfcxBVh8g",
  authDomain: "mylexicon-304a7.firebaseapp.com",
  projectId: "mylexicon-304a7",
  storageBucket: "mylexicon-304a7.appspot.com",
  messagingSenderId: "15237121917",
  appId: "1:15237121917:web:5366af18f2719c72eeae14"
}

firebase.initializeApp(firebaseConfig)

const MyLexicon = firebase.firestore()

export {MyLexicon}