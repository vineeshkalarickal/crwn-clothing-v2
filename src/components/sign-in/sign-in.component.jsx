// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //this is wrong method for redirect as it wont retain user data when redirect occures
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  // useEffect(() => async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response.user) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   } else {
  //     console.log("No user, redirecting to sign-in");
  //   }
  // }, []);



  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
}

export default SignIn;