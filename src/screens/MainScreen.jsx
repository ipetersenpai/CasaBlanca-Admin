import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center bg-ImageBg bg-no-repeat bg-cover overflow-y-auto">
      <div
        className="w-full fixed top-0 hidden tablet:flex cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <h1
          className="font-bold p-2 text-[28px] text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          CASA BLANCA
        </h1>
      </div>

      <div className="flex flex-col tablet:w-[420px] desktop:w-[450px] w-[98%] mx-auto bg-secondary text-white p-4 rounded-[15px] shadow-lg">
        <section className="flex flex-row w-full">
          <h1 className="font-bold text-[26px] mx-auto mt-3">WELCOME</h1>
        </section>
        <button
          className="btn mt-4 w-[95%] mx-auto btn-primary text-[20px] text-white rounded-[10px]"
          onClick={() => {
            navigate("/signin");
          }}
        >
          LOGIN EMPLOYEE
        </button>
        <button
          className="btn mt-4 w-[95%] mx-auto btn-primary text-[20px] text-white rounded-[10px]"
          onClick={() => {
            navigate("/booking");
          }}
        >
          BOOK RESERVATION
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
