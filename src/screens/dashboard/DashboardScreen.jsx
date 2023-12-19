import React from "react";
import { BsDoorOpenFill } from "react-icons/bs";

const DashboardScreen = () => {
  return (
    <div className="flex flex-col w-full bg-secondary overflow-y-hidden text-white">
      <h1 className="p-4 text-[32px] font-bold w-full text-center">
        CASA BLANCA - BAR AND RESTAURANT
      </h1>
      <div className="flex tablet:flex-row flex-col p-4 h-full justify-between">
        <div className="flex flex-wrap flex-row w-[70%] gap-4 justify-start tablet:h-[10px] h-full">
          <section
            className="h-[220px] w-[350px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
            p-5 border-[3px] cursor-pointer"
          >
            <div className="flex flex-row items-end gap-2">
              <BsDoorOpenFill className="text-[42px]" />
              <p className="text-[20px]">ROOM No.1</p>
            </div>
          </section>
          <section
            className="h-[220px] w-[350px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
            p-5 border-[3px] cursor-pointer"
          >
            <div className="flex flex-row items-end gap-2">
              <BsDoorOpenFill className="text-[42px]" />
              <p className="text-[20px]">ROOM No.2</p>
            </div>
          </section>
          <section
            className="h-[220px] w-[350px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
            p-5 border-[3px] cursor-pointer"
          >
            <div className="flex flex-row items-end gap-2">
              <BsDoorOpenFill className="text-[42px]" />
              <p className="text-[20px]">ROOM No.3</p>
            </div>
          </section>
          <section
            className="h-[220px] w-[350px] bg-[#666666] border-[#666666] hover:border-white rounded-[20px]
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
  );
};

export default DashboardScreen;
