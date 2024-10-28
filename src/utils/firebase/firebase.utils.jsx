// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Authentication
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgLc4YQE0EdBq0AkaX-5P4UVP52guMdkI",
  authDomain: "crown-clothing-db-b8e25.firebaseapp.com",
  projectId: "crown-clothing-db-b8e25",
  storageBucket: "crown-clothing-db-b8e25.appspot.com",
  messagingSenderId: "35613220929",
  appId: "1:35613220929:web:6fd2bad3a7b0f2db4ca6c0"
};

// Initialize Firebase
const firebaseApps = initializeApp(firebaseConfig);

// google authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters(
  {
    prompt: 'select_account'
  }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//database connection
export const db = getFirestore();
// get a user document
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //if user data existst
  // - select
  //if user doesnt exists
  // - create
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //set/save user details, pass the database table
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log(`Error creating the user ${error.message}`)
    }
  }




}
