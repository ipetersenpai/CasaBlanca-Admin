import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninScreen from "../../screens/auth/SigninScreen";

const AuthRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SigninScreen />} />
      </Routes>
    </div>
  );
};

export default AuthRoute;
