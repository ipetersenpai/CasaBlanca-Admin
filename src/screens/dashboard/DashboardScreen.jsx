import React, { useState } from "react";
import { BsDoorOpenFill } from "react-icons/bs";
import Room1Modal from "../../components/dashboard-components/room1Modal";

const DashboardScreen = () => {
  const [openroom1Modal, setOpenRoom1Modal] = useState(false);

  const openRoom1ModalHandler = () => {
    setOpenRoom1Modal(true);
  };

  const closeRoom1ModalHandler = () => {
    setOpenRoom1Modal(false);
  };

  return (
    <>
      {openroom1Modal && (
        <Room1Modal
          openModal={openroom1Modal}
          closeModal={closeRoom1ModalHandler}
        />
      )}

      <div className="flex flex-col w-full bg-secondary overflow-y-hidden text-white tablet:ml-0 ml-[55px]">
        <h1 className="tablet:hidden p-4 text-[24px] font-bold w-full text-center">
          CASA BLANCA <br />
          BAR AND RESTAURANT
        </h1>

        <h1 className="p-4 text-[32px] hidden tablet:block font-bold w-full text-center">
          CASA BLANCA - BAR AND RESTAURANT
        </h1>

        <div className="flex tablet:flex-row flex-col p-4 h-full ju">
          <div className="flex flex-wrap flex-row laptop:w-[70%] w-[100%]  gap-4 p-2 tablet:p-0 laptop:justify-start tablet:h-[10px] h-full justify-center">
            <section
              className="h-[220px] laptop:w-[350px] w-[320px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
               p-5 border-[3px] cursor-pointer"
              onClick={openRoom1ModalHandler}
            >
              <div className="flex flex-row items-end gap-2">
                <BsDoorOpenFill className="text-[42px]" />
                <p className="text-[20px]">ROOM No.1</p>
              </div>
            </section>
            <section
              className="h-[220px] laptop:w-[350px] w-[320px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
            p-5 border-[3px] cursor-pointer"
            >
              <div className="flex flex-row items-end gap-2">
                <BsDoorOpenFill className="text-[42px]" />
                <p className="text-[20px]">ROOM No.2</p>
              </div>
            </section>
            <section
              className="h-[220px] laptop:w-[350px] w-[320px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
            p-5 border-[3px] cursor-pointer"
            >
              <div className="flex flex-row items-end gap-2">
                <BsDoorOpenFill className="text-[42px]" />
                <p className="text-[20px]">ROOM No.3</p>
              </div>
            </section>
            <section
              className="h-[220px] laptop:w-[350px] w-[320px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
            p-5 border-[3px] cursor-pointer"
            >
              <div className="flex flex-row items-end gap-2">
                <BsDoorOpenFill className="text-[42px]" />
                <p className="text-[20px]">ROOM No.4</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
