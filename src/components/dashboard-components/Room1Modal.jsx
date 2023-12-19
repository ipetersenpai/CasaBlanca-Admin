import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CustomerRequestList } from "../../mockData";

const Room1Modal = ({ openModal, closeModal }) => {
  const [modalHandler, setModalHandler] = useState(false);

  useEffect(() => {
    setModalHandler(openModal);
  }, [openModal]);

  return (
    <div className={`modal-wrapper ${modalHandler ? "show" : ""}`}>
      {modalHandler && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-40">
          <div className="absolute inset-0" />

          <div
            className="tablet:w-[650px] laptop:w-[850px] w-[90%] tablet:h-[500px] h-[80%] bg-white flex flex-col mx-auto rounded-[15px]
              shadow-md modal-container p-7"
          >
            <section className="z-10 flex flex-row w-full justify-between mb-5">
              <h1 className="text-center w-full text-primary font-bold text-[24px] mt-0 ml-[2rem]">
                ROOM NO. 1
              </h1>

              <button
                className="btn btn-sm btn-circle btn-ghost  mt-[-0.7rem] mr-[-0.4rem]"
                onClick={() => {
                  closeModal();
                }}
              >
                <IoCloseSharp size={24} />
              </button>
            </section>

            <section className="w-full tablet:overflow-y-hidden overflow-y-auto">
              <div className="flex tablet:flex-row flex-col w-full gap-4 justify-center">
                <div className="flex flex-row flex-wrap tablet:w-[45%] w-full gap-3 p-2 tablet:h-[240px] justify-center border-black border-[1px] rounded-lg py-4">
                  {/* -----Table 1---- */}
                  {/* Add your logic here to change the color of the table to determine if occupied or vacant */}
                  <div
                    className={`flex flex-col items-center justify-center h-24 min-w-[100px] bg-success p-4 rounded-lg cursor-pointer z-10`}
                  >
                    <p className="font-bold">TABLE 1</p>
                    <p className="text-[14px]">BOOKED</p>
                  </div>
                  {/* -----Table 2---- */}
                  {/* Add your logic here to change the color of the table to determine if occupied or vacant */}
                  <div
                    className={`flex flex-col items-center justify-center h-24 tablet:min-w-[100px] bg-error p-4 rounded-lg cursor-pointer z-10`}
                  >
                    <p className="font-bold">TABLE 2</p>
                    <p className="text-[14px]">RESERVED</p>
                  </div>
                  {/* Add your logic here to change the color of the table to determine if occupied or vacant */}
                  <div
                    className={`flex flex-col items-center justify-center h-24 min-w-[100px] bg-error p-4 rounded-lg cursor-pointer z-10`}
                  >
                    <p className="font-bold">TABLE 3</p>
                    <p className="text-[14px]">RESERVED</p>
                  </div>
                  {/* Add your logic here to change the color of the table to determine if occupied or vacant */}
                  <div
                    className={`flex flex-col items-center justify-center h-24 min-w-[100px]  bg-success p-4 rounded-lg cursor-pointer z-10`}
                  >
                    <p className="font-bold">TABLE 4</p>
                    <p className="text-[14px]">BOOKED</p>
                  </div>
                  {/* Add your logic here to change the color of the table to determine if occupied or vacant */}
                  <div
                    className={`flex flex-col items-center justify-center h-24 min-w-[100px] bg-warning p-4 rounded-lg cursor-pointer z-10`}
                  >
                    <p className="font-bold">TABLE 5</p>
                    <p className="text-[14px]">VACANT</p>
                  </div>
                  {/* Add your logic here to change the color of the table to determine if occupied or vacant */}
                  <div
                    className={`flex flex-col items-center justify-center h-24 min-w-[100px] bg-success p-4 rounded-lg cursor-pointer z-10`}
                  >
                    <p className="font-bold">TABLE 6</p>
                    <p className="text-[14px]">BOOKED</p>
                  </div>
                </div>

                <div className="flex flex-col  tablet:w-[50%] gap-3  items-center  w-full border-black border-[1px] h-[380px] rounded-lg py-4 z-40">
                  <div className="overflow-y-auto w-full gap-3 p-2 flex items-center flex-col">
                    <p className="font-bold text-[17px]">CUSTOMER REQUEST</p>
                    {/* change this with actual data */}
                    {CustomerRequestList.map((requestlist) => (
                      <div
                        key={requestlist.id}
                        className="bg-accent hover:bg-[#c2c1b7] w-full h-[42px] flex flex-row item-center p-2 rounded-lg justify-between"
                      >
                        <p>{requestlist.full_name.toUpperCase()}</p>
                        <button
                          className="border-b-[4px] border-accent mr-2 hover:border-green-400 z-10 text-[14px] font-bold"
                          onClick={undefined}
                        >
                          VIEW
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room1Modal;
