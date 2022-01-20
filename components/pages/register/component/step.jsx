import React from "react";

const Step = ({ className, stepNumber }) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center px-20">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`flex justify-center items-center w-20 h-20
              rounded-full text-3xl
              ${stepNumber === 1 ? "bg-qolbiLight" : "bg-qolbiVeryLight"}
              border-4 border-qolbiLight`}
          >
            1
          </div>
        </div>
        <div className="w-full h-1 bg-qolbiLight rounded-full" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={`flex justify-center items-center w-20 h-20
              rounded-full text-3xl
              ${stepNumber === 2 ? "bg-qolbiLight" : "bg-qolbiVeryLight"}
              border-4 border-qolbiLight`}
          >
            2
          </div>
        </div>
        <div className="w-full h-1 bg-qolbiLight rounded-full" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={`flex justify-center items-center w-20 h-20
              rounded-full text-3xl
              ${stepNumber === 3 ? "bg-qolbiLight" : "bg-qolbiVeryLight"}
              border-4 border-qolbiLight`}
          >
            3
          </div>
        </div>
        <div className="w-full h-1 bg-qolbiLight rounded-full" />
        <div className="flex flex-col justify-center items-center">
          <div
            className={`flex justify-center items-center w-20 h-20
              rounded-full text-3xl 
              ${stepNumber === 4 ? "bg-qolbiLight" : "bg-qolbiVeryLight"}
              border-4 border-qolbiLight`}
          >
            4
          </div>
        </div>
      </div>
      <div className="flex justify-between px-16 mt-5">
        <p className="ml-3 text-center">
          Username & <br /> Password
        </p>
        <p className="text-center">Biodata Diri</p>
        <p className="text-center">Dokumen</p>
        <p className="mr-3 text-center">Tinjau Ulang</p>
      </div>
    </div>
  );
};

export default Step;
