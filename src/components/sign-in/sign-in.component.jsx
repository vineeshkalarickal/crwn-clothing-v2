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
import Button from "../button/button.component.jsx";

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
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <Button
        className="button-container google-sign-in"
        onClick={logGoogleUser}
      >
        Sign In with Google
      </Button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
