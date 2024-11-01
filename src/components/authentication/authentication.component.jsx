// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils.jsx";
import SignUpForm from "../sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../sign-in-form/sign-in-form.component.jsx";
import "./authentication.styles.scss";
// import Button from "../button/button.component.jsx";

const SignIn = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  //this is wrong method for redirect as it wont retain user data when redirect occures
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  // so use
  // useEffect(() => async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response.user) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   } else {
  //     console.log("No user, redirecting to sign-in");
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      {/* <Button
        className="button-container google-sign-in"
        onClick={logGoogleUser}
      >
        Sign In with Google
      </Button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
