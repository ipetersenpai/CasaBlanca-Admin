import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import SideBar from "../dashboard-components/SideBar";
import PayrollScreen from "../../screens/dashboard/PayrollScreen";

const DashboardRoute = () => {
  return (
    <div className="flex  bg-ImageBg bg-no-repeat bg-cover min-h-[100vh]">
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
        <Route
          path="/payroll"
          element={
            <>
              <SideBar />
              <PayrollScreen />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
