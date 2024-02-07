// GoogleLoginButton.js

import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId =
    "639130110334-6lv490ee43mt6hevon2b0qjhfr78fj64.apps.googleusercontent.com";

  const handleSuccess = (response) => {
    // Handle successful login
    console.log("Google login successful:", response);
    if (onSuccess) onSuccess(response);
  };

  const handleFailure = (error) => {
    // Handle login failure
    console.error("Google login failed:", error);
    if (onFailure) onFailure(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
