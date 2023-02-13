import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
//Inside the AuthContext file.

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/clientApp";

// Inside AuthProvider
const provider = new GoogleAuthProvider();

const login = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log({ credential, token, user });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential });
    });
};

const logout = () => {
  auth.signOut();
  console.log("logout");
};


// create page

const Login = () => {
  // use hooks to get auth.currentUser
  const [user, setUser] = useState(auth.currentUser);
  // listen for auth state changes
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={login}>Login</Button>
      <p>{user ? `Hello ${user.displayName}` : "You are logged out"}</p>
    </div>
  );
};

export default Login;