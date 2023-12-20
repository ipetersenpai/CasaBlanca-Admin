import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./components/navigation-components/AuthRoute";
import DashboardRoute from "./components/navigation-components/DashboardRoute";

function App() {
  //This is temporary only to handle the changing from auth to dashboard. Change this with actual API request for auth
  const [AuthToken, setAuthToken] = useState(false);

  useEffect(() => {
    setAuthToken(localStorage.getItem("TemAuthToken"));
  }, [setAuthToken]);

  return (
    <BrowserRouter>
      {AuthToken ? <DashboardRoute /> : <AuthRoute />}
    </BrowserRouter>
  );
}

export default App;
