import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const PayrollScreen = () => {
  const [attachFile, setAttachFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col w-full overflow-y-hidden text-white tablet:ml-0 ml-[55px]">
      <h1 className="tablet:hidden p-4 text-[24px] font-bold w-full text-center">
        CASA BLANCA <br />
        BAR AND RESTAURANT
      </h1>

      <h1 className="p-4 text-[32px] hidden tablet:block font-bold w-full text-center">
        CASA BLANCA - BAR AND RESTAURANT
      </h1>

      <div className="flex flex-col tablet:px-12 h-full">
        <div className="flex flex-col w-full bg-secondary h-[80vh] rounded-[20px] p-4">
          <input
            type="file"
            accept=".xls, .xlsx, .csv, .doc, .docx, .pdf"
            onChange={(e) => {
              setAttachFile(e.target.files[0]);
            }}
            className="file-input file-input-bordered text-black"
          />
          <div className="flex tablet:flex-row flex-col w-full justify-between items-center tablet:gap-10 laptop:gap-0">
            <h2 className="font-bold text-[35px] mt-2">EMPLOYEES</h2>
            <div className="flex tablet:flex-row flex-col mt-4 gap-2">
              <div className=" text-black">
                <FiSearch
                  size={20}
                  className="absolute mt-[11px] right-50 font-black ml-3 text-black"
                />
                <input
                  type="text"
                  placeholder="Search Employee"
                  className="laptop:w-[406px] w-full p-2 pl-10 border rounded-[360px] shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary border-[1.5px]
              rounded-[80px] text-[18px] font-medium text-white"
                onClick={() => {}}
              >
                ADD NEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollScreen;
