import React from "react";
import Image from "next/image";

const ContainerUnggul = ({ title, desc, image, w, h }) => {
  return (
    <div className="flex w-full">
      <div className="border-2 border-qolbiLight w-32 h-32 rounded-3xl flex justify-center items-center">
        <Image src={image} alt="Keunggulan Logo" width={w} height={h} />
      </div>
      <div className="ml-5">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="w-full mt-3 max-w-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ContainerUnggul;
