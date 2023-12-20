import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninScreen from "../../screens/auth/SigninScreen";
import SignupScreen from "../../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";

const AuthRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="*" element={<SigninScreen />} />
      </Routes>
    </div>
  );
};

export default AuthRoute;
