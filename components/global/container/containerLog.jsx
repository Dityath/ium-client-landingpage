import React from "react";
import Image from "next/image";

const ContainerLog = ({ image, ukuran, harga, ac }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 h-full">
      <Image src={image} alt="Photo Katalog" width={450} height={300} />
      <p className="text-qolbiDark font-lato">
        {ukuran} m&#178; {ac ? "+ ac" : ""}
      </p>
      <p className="text-qolbiDark font-lato">{harga}</p>
    </div>
  );
};

export default ContainerLog;
