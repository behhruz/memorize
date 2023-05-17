import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";

export const SignInButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Behruz${response}`,
            },
          }
        );
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <>
      <button onClick={login}>sign in with google</button>
    </>
  );
};
export default SignInButton;
