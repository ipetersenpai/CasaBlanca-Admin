import React, { useState, useEffect } from "react";
import { FaUser, FaCashRegister } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState(true);
  const [showName, setShowName] = useState(false);

  const logoutHandler = () => {
    //your logout logic here
    console.log("Logout");
  };

  useEffect(() => {
    if (openSidebar) {
      const timeoutId = setTimeout(() => {
        setShowName(true);
      }, 200);

      return () => clearTimeout(timeoutId);
    } else {
      setShowName(false);
    }
  }, [openSidebar]);

  return (
    <div
      className={`${
        openSidebar
          ? "w-[259px] ease-out-in duration-500"
          : "w-[60px] ease-in-out duration-500"
      } h-full text-white flex flex-col tablet:relative absolute`}
    >
      {/* ----Menu icon---- */}
      <div
        className={`flex justify-end pt-4 ${
          openSidebar
            ? "w-[259px] ease-out-in duration-500 "
            : "w-[60px] ease-in-out duration-500 justify-center"
        } cursor-pointer`}
        onClick={() => {
          setOpenSidebar(!openSidebar);
        }}
      >
        {openSidebar ? (
          <AiOutlineMenuFold size={35} className="mr-2 fixed z-10" />
        ) : (
          <AiOutlineMenuUnfold size={35} className=" fixed z-10" />
        )}
      </div>
      {/* ----Menu item---- */}
      <div
        className={`bg-primary pt-[62px] ease-out-in duration-500 fixed
            flex-wrap h-[100vh]
            ${openSidebar ? "w-[259px]" : "w-[60px]"} mb-50`}
      >
        <div
          className={`flex flex-row gap-4 max-auto p-2 items-center hover:bg-[#7E1F21] cursor-pointer ${
            location.pathname === "/profile" ? "bg-[#7E1F21]" : ""
          }`}
          onClick={() => {
            //change it to the actual path
            navigate("/profile");
          }}
        >
          {/* ----Add if else condition here for dynamic user profile---- */}
          <div className="h-[42px] min-w-[42px] rounded-[50%] bg-secondary flex items-center justify-center">
            <FaUser className="text-[22px]" />
          </div>
          {showName && <p className={`text-bold text-[18px]`}>John Doe</p>}
        </div>

        <div
          className={`flex flex-row gap-4 max-auto p-2 items-center hover:bg-[#7E1F21] cursor-pointer ${
            location.pathname === "/" ? "bg-[#7E1F21]" : ""
          }`}
          onClick={() => {
            //change it to the actual path
            navigate("/");
          }}
        >
          {/* ----Add if else condition here for dynamic user profile---- */}
          <div className="h-[42px] min-w-[42px]  flex items-center justify-center">
            <MdDashboardCustomize className="text-[35px]" />
          </div>
          {showName && <p className={`text-bold text-[18px]`}>Dashboard</p>}
        </div>

        <div
          className={`flex flex-row gap-4 max-auto p-2 items-center hover:bg-[#7E1F21] cursor-pointer ${
            location.pathname === "/payroll" ? "bg-[#7E1F21]" : ""
          }`}
          onClick={() => {
            //change it to the actual path
            navigate("/payroll");
          }}
        >
          {/* ----Add if else condition here for dynamic user profile---- */}
          <div className="h-[42px] min-w-[42px]  flex items-center justify-center">
            <SiCashapp className="text-[30px]" />
          </div>
          {showName && <p className={`text-bold text-[18px]`}>Payroll</p>}
        </div>

        <div
          className={`flex flex-row gap-4 max-auto p-2 items-center hover:bg-[#7E1F21] cursor-pointer ${
            location.pathname === "/point-of-sale" ? "bg-[#7E1F21]" : ""
          }`}
          onClick={() => {
            //change it to the actual path
            navigate("/point-of-sale");
          }}
        >
          {/* ----Add if else condition here for dynamic user profile---- */}
          <div className="h-[42px] min-w-[42px]  flex items-center justify-center">
            <FaCashRegister className="text-[30px]" />
          </div>
          {showName && <p className={`text-bold text-[18px]`}>Point Of Sale</p>}
        </div>
        <div
          className={`flex flex-row gap-4 max-auto p-2 items-center hover:bg-[#7E1F21] cursor-pointer`}
          onClick={logoutHandler}
        >
          {/* ----Add if else condition here for dynamic user profile---- */}
          <div className="h-[42px] min-w-[42px]  flex items-center justify-center">
            <RiLogoutBoxRLine className="text-[30px]" />
          </div>
          {showName && <p className={`text-bold text-[18px]`}>Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
