import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import SideBar from "../dashboard-components/SideBar";

const DashboardRoute = () => {
  return (
    <div className="flex bg-secondary min-h-[100vh]">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SideBar />
              <DashboardScreen />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
