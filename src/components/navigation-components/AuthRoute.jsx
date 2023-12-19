import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninScreen from "../../screens/auth/SigninScreen";
import SignupScreen from "../../screens/auth/SignupScreen";

const AuthRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </div>
  );
};

export default AuthRoute;
