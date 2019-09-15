import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyXF2OHrhh5kEe6OFBY1FDnZmSpRPa33Y",
  authDomain: "ecom-db-77593.firebaseapp.com",
  databaseURL: "https://ecom-db-77593.firebaseio.com",
  projectId: "ecom-db-77593",
  storageBucket: "",
  messagingSenderId: "1064869029906",
  appId: "1:1064869029906:web:4d7eed49a00c52d54890cb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
