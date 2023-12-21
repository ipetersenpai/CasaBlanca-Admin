import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninScreen from "../../screens/auth/SigninScreen";
import SignupScreen from "../../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import MainScreen from "../../screens/mainScreen";
import BookingScreen from "../../screens/dashboard/BookingScreen";
const AuthRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/booking" element={<BookingScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="*" element={<MainScreen />} />
      </Routes>
    </div>
  );
};

export default AuthRoute;
