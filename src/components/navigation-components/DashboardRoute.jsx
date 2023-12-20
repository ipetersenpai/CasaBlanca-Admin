import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../../screens/dashboard/DashboardScreen";
import SideBar from "../dashboard-components/SideBar";
import PayrollScreen from "../../screens/dashboard/PayrollScreen";
import PointOfSaleScreen from "../../screens/dashboard/PointOfSaleScreen";

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
        <Route
          path="/point-of-sale"
          element={
            <>
              <SideBar />
              <PointOfSaleScreen />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
