import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
const DashboardRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
