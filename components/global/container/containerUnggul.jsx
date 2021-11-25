import React from "react";

const ContainerUnggul = ({ title, desc }) => {
  return (
    <div className="flex w-full">
      <div className="border-2 border-qolbiLight w-32 h-32 rounded-3xl" />
      <div className="ml-5">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="w-full mt-3 max-w-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ContainerUnggul;
