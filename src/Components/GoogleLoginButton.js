//import { useGoogleOneTapLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { GoogleLogin } from "@react-oauth/google";



import React from "react";

const GoogleLoginButton = ({ setWet }) => {
  const { setUserInfo } = useContext(UserContext);

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const userName = jwtDecode(credentialResponse.credential);
        setUserInfo(userName.name);
        setWet("two");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
