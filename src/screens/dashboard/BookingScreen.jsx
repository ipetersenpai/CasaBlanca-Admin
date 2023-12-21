import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { IoCloseSharp } from "react-icons/io5";
import { MdCheckCircleOutline } from "react-icons/md";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const BookingScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //---onSubmit handler----
  const onSubmitHandler = (data) => {
    console.log(data);

    //temporary only add your actual logic on sending the booking form
    document.getElementById("approved_request").showModal();
  };

  return (
    <>
      {/*-----book modal request----- */}
      <dialog id="approved_request" className="modal">
        <form
          method="dialog"
          className="modal-box w-[90%] tablet:w-full rounded-[15px]"
        >
          <section className="z-10 flex flex-row w-full  justify-between">
            <h1 className="text-center w-full text-primary font-bold text-[24px] ml-[2rem]"></h1>
            {/* if there is a button tag in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost  mt-[-0.7rem] mr-[-0.4rem]">
              <IoCloseSharp size={24} />
            </button>
          </section>
          <div className="flex flex-col w-full items-center justify-center my-4">
            <MdCheckCircleOutline className="text-green-600 text-[175px]" />
            <p className="text-[28px] mt-2 text-center">Book Successfully</p>
          </div>
          <div className="modal-action w-full mx-auto flex items-center">
            {/* change the button into span tag if you are dealing with api request */}
            <button
              className="btn bg-green-600 hover:bg-green-700 text-white tablet:h-[45px] w-[80%]
              mx-auto rounded-[80px] text-[18px] font-medium"
            >
              DONE
            </button>
          </div>
        </form>
      </dialog>
      <div className="flex flex-col h-[100vh] w-full justify-center items-center bg-primary">
        <div className="w-full fixed top-0 cursor-pointer flex justify-between">
          <h1 className="p-2 tablet:text-[28px] text-[24px] text-white font-bold ">
            CASA BLANCA
          </h1>

          <h1
            className="p-2 text-[18px] text-white cursor-pointer hover:underline hover:text-blue-500"
            onClick={() => {
              localStorage.removeItem("TemAuthToken");
              window.location.href = "/";
            }}
          >
            Logout
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col tablet:w-[420px] h-[600px] desktop:w-[450px] w-[95%] mx-auto bg-white text-black p-4 rounded-[15px] shadow-lg">
            <section className="flex flex-row w-full">
              <h1 className="font-bold text-[26px] mx-auto mb-7 mt-3 text-primary text-center">
                BOOKING FORM
              </h1>
            </section>
            <div className="w-[90%] mx-auto overflow-auto">
              <TextField
                sx={{
                  marginBottom: errors.full_name ? 1 : 2,
                  width: "100%",
                  input: {
                    padding: "0.7rem",
                    background: "white",
                  },
                }}
                name="full_name"
                placeholder="Enter the full name"
                error={errors.full_name ? true : false}
                {...register("full_name", {
                  required: "This is required",

                  pattern: {
                    value: /^[a-z ,.'-]+$/i,
                    message: "Invalid characters in name.",
                  },
                })}
              />
              {errors.full_name && (
                <p className="text-white-500 text-[14px] ml-3 text-red-500">
                  {errors.full_name.message}
                </p>
              )}

              <TextField
                sx={{
                  marginBottom: errors.email ? 1 : 2,
                  width: "100%",
                  input: {
                    padding: "0.7rem",
                    background: "white",
                  },
                }}
                name="email"
                placeholder="Enter the email"
                error={errors.email ? true : false}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-white-500 text-[14px] ml-3 text-red-500">
                  {errors.email.message}
                </p>
              )}
              <TextField
                sx={{
                  marginBottom: errors.contact_no ? 1 : 2,
                  width: "100%",
                  input: {
                    padding: "0.7rem",
                    background: "white",
                  },
                }}
                name="contact_no"
                placeholder="Enter the contact no."
                error={errors.contact_no ? true : false}
                {...register("contact_no", {
                  required: "This is required",
                  pattern: {
                    value: /^(09|\+639)\d{9}$/,
                    message: "Invalid phone number.",
                  },
                })}
              />
              {errors.contact_no && (
                <p className="text-white-500 text-[14px] ml-3 text-red-500">
                  {errors.contact_no.message}
                </p>
              )}
              <p className="text-[15px] font-bold">Reservation Date</p>
              <TextField
                sx={{
                  marginBottom: errors.reservation_date ? 1 : 2,
                  width: "100%",
                  input: {
                    padding: "0.7rem",
                    background: "white",
                  },
                }}
                name="reservation_date"
                type="date"
                placeholder="Enter the Reservation Date"
                error={errors.reservation_date ? true : false}
                {...register("reservation_date", {
                  required: "This is required",
                })}
              />
              {errors.reservation_date && (
                <p className="text-white-500 text-[14px] ml-3 text-red-500">
                  {errors.reservation_date.message}
                </p>
              )}
              <p className="text-[15px] font-bold"> Select Room</p>
              <FormControl
                error={errors.room_type ? true : false}
                sx={{
                  marginBottom: errors.room_type ? 1 : 2,
                  width: "100%",
                }}
              >
                <Select
                  name="room_type"
                  type="text"
                  defaultValue={watch("room_type")}
                  {...register("room_type", {
                    required: "This is required.",
                  })}
                  sx={{
                    "& .MuiSelect-select": {
                      padding: "0.7rem",
                      borderRadius: "20px",
                    },
                  }}
                >
                  <MenuItem value="">
                    <p className="text-slate-500 text-[12px]">Select one</p>
                  </MenuItem>
                  <MenuItem value="Room 1">Room 1</MenuItem>
                  <MenuItem value="Room 2">Room 2</MenuItem>
                  <MenuItem value="Room 3">Room 3</MenuItem>
                  <MenuItem value="Room 4">Room 4</MenuItem>
                </Select>
                {errors.room_type && (
                  <p
                    className={`text-red-500 text-[14px] ${
                      errors.room_type ? "mt-2" : "mt-0"
                    }`}
                  >
                    {errors.room_type ? errors.room_type.message : ""}
                  </p>
                )}
              </FormControl>
              <p className="text-[15px] font-bold"> Select Table</p>
              <FormControl
                error={errors.table_type ? true : false}
                sx={{
                  marginBottom: errors.table_type ? 1 : 2,
                  width: "100%",
                }}
              >
                <Select
                  name="table_type"
                  type="text"
                  defaultValue={watch("table_type")}
                  {...register("table_type", {
                    required: "This is required.",
                  })}
                  sx={{
                    "& .MuiSelect-select": {
                      padding: "0.7rem",
                      borderRadius: "20px",
                    },
                  }}
                >
                  <MenuItem value="">
                    <p className="text-slate-500 text-[12px]">Select one</p>
                  </MenuItem>
                  <MenuItem value="Table 1">Table 1</MenuItem>
                  <MenuItem value="Table 2">Table 2</MenuItem>
                  <MenuItem value="Table 3">Table 3</MenuItem>
                  <MenuItem value="Table 4">Table 4</MenuItem>
                  <MenuItem value="Table 5">Table 5</MenuItem>
                  <MenuItem value="Table 6">Table 6</MenuItem>
                </Select>
                {errors.table_type && (
                  <p
                    className={`text-red-500 text-[14px] ${
                      errors.table_type ? "mt-2" : "mt-0"
                    }`}
                  >
                    {errors.table_type ? errors.table_type.message : ""}
                  </p>
                )}
              </FormControl>
              <p className="text-[15px] font-bold"> Select Number of Person</p>
              <FormControl
                error={errors.total_person ? true : false}
                sx={{
                  marginBottom: errors.total_person ? 1 : 2,
                  width: "100%",
                }}
              >
                <Select
                  name="total_person"
                  type="text"
                  defaultValue={watch("total_person")}
                  {...register("total_person", {
                    required: "This is required.",
                  })}
                  sx={{
                    "& .MuiSelect-select": {
                      padding: "0.7rem",
                      borderRadius: "20px",
                    },
                  }}
                >
                  <MenuItem value="">
                    <p className="text-slate-500 text-[12px]">Select one</p>
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
                {errors.total_person && (
                  <p
                    className={`text-red-500 text-[14px] ${
                      errors.total_person ? "mt-2" : "mt-0"
                    }`}
                  >
                    {errors.total_person ? errors.total_person.message : ""}
                  </p>
                )}
              </FormControl>
              <TextField
                sx={{
                  marginBottom: errors.purpose ? 1 : 2,
                  width: "100%",
                  input: {
                    padding: "0.7rem",
                    background: "white",
                  },
                }}
                name="purpose"
                placeholder="Enter the Purpose"
                error={errors.purpose ? true : false}
                {...register("purpose", {
                  required: "This is required",
                })}
              />
              {errors.purpose && (
                <p className="text-white-500 text-[14px] ml-3 text-red-500">
                  {errors.purpose.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn mt-4 w-[80%] mx-auto bg-green-600 hover:bg-green-700 text-[20px] text-white rounded-[20px] mb-5 z-10"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingScreen;
