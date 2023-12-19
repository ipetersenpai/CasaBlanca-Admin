import React, { useState } from "react";
import BusinessLogo from "./../../assets/icons/business_logo.png";
import facebookIcon from "./../../assets/icons/fb_icon.png";
import gooogleIcon from "./../../assets/icons/google_icon.png";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { LuUnlock } from "react-icons/lu";
import { useForm } from "react-hook-form";

const SignupScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //---onSubmit handler----
  const onSubmitHandler = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  //---show/hide password option---
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center bg-ImageBg bg-no-repeat bg-cover overflow-y-auto">
      <div className="w-full fixed top-0 hidden tablet:flex">
        <h1
          className="font-bold p-2 text-[28px] text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          CASA BLANCA
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col tablet:w-[420px] desktop:w-[450px] w-[98%] mx-auto bg-secondary text-white p-4 rounded-[15px] shadow-lg">
          <section className="flex flex-row w-full">
            <h1 className="font-bold text-[26px] mx-auto mb-10 mt-3">
              REGISTER
            </h1>
          </section>

          <span className="font-bold ml-3">Email</span>
          <div className="bg-red-200 mx-auto flex flex-row w-[95%] rounded-[15px] items-center">
            <MdOutlineEmail className="text-gray-400 text-[28px] absolute ml-2 z-10" />
            <TextField
              sx={{
                width: "100%",
                input: {
                  padding: "0.7rem",
                  background: "white",
                  borderRadius: "10px",
                  paddingLeft: 5.5,
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              name="email"
              placeholder="Enter your email"
              error={errors.email ? true : false}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-[14px] mt-2 ml-3 mb-[-0.5rem]">
              {errors.email.message}
            </p>
          )}

          <span className="font-bold ml-3 mt-3">Password</span>
          <div className="bg-white mx-auto flex flex-row w-[95%] rounded-[15px] items-center">
            <LuUnlock className="text-gray-400 text-[28px] absolute ml-2 z-10" />
            <TextField
              sx={{
                width: "100%",
                input: {
                  padding: "0.7rem",
                  background: "white",
                  borderRadius: "10px",
                  paddingLeft: 5.5,
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      background: "white",
                    }}
                  >
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              error={errors.password ? true : false}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-[14px] mt-2 ml-3 mb-[-0.5rem]">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="btn mt-7 w-[95%] mx-auto btn-primary text-[20px] text-white rounded-[10px]"
          >
            SIGN UP
          </button>
          <p className="mx-auto mt-5 text-center text-[16px]">Sign up with</p>

          <div className="w-[95%] flex tablet:flex-row flex-col justify-between mt-4 mx-auto tablet:gap-2 gap-4">
            <div
              className="bg-white rounded-[20px] flex flex-row h-[42px] hover:bg-[#f5f5f5] cursor-pointer
                         text-black items-center gap-2 w-full justify-center"
            >
              <img src={facebookIcon} className="h-[32px]" />
              <p className="text-[17px]">Facebook</p>
            </div>
            <div
              className="bg-white rounded-[20px] flex flex-row h-[42px] hover:bg-[#f5f5f5] cursor-pointer
                        text-black items-center gap-2 w-full justify-center"
            >
              <img
                src={gooogleIcon}
                className="h-[38px] ml-[-1rem] mr-[-0.4rem]"
              />
              <p className="text-[17px]">Gmail</p>
            </div>
          </div>
          <p className="mx-auto mb-4 mt-7 text-center text-[16px]">
            Already have an account?{" "}
            <span
              className="cursor-pointer hover:underline hover:text-blue-500 text-blue-400"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;
