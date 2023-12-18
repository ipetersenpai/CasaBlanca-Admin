import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRoute from "./components/navigation-components/AuthRoute";
import DashboardRoute from "./components/navigation-components/DashboardRoute";

function App() {
  return (
    <BrowserRouter>{false ? <DashboardRoute /> : <AuthRoute />}</BrowserRouter>
  );
}

export default App;
