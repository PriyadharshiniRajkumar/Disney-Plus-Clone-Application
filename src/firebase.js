import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbxcy_6BdRd8DvQZPKs7lcOE7-xwwSu-8",
  authDomain: "disneyplus-project-1f3ab.firebaseapp.com",
  projectId: "disneyplus-project-1f3ab",
  storageBucket: "disneyplus-project-1f3ab.appspot.com",
  messagingSenderId: "1081482727109",
  appId: "1:1081482727109:web:718c2eced2c1fa8df3aaac",
  measurementId: "G-VLFX9WX8MP"
};




/*//const firebaseConfig = {
  apiKey: "AIzaSyBTVWb2g2rt6unmdG4PouUtYWqJMAGn1ks",
  authDomain: "disneyplus-project.firebaseapp.com",
  projectId: "disneyplus-project",
  storageBucket: "disneyplus-project.appspot.com",
  messagingSenderId: "1071638111515",
  appId: "1:1071638111515:web:6f27410610111e46bd1fbe",
  measurementId: "G-PZ7YH5WLT1"
};
*/



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
