import React from "react";
import Image from "next/image";
import MainTitle from "../../global/title/mainTitle";

const Section1 = () => {
  return (
    <section className="pt-40 w-full max-w-6xl mx-auto flex justify-between font-lato">
      <div>
        <h1 className="text-3xl"></h1>
        <MainTitle>Rumah Petak Sewa Nurul Qolbi</MainTitle>
        <p className="mt-5">Deskripsi, ayo ngontrak disini aja, eheheehe</p>
        <button className="bg-qolbiLight uppercase rounded-lg px-4 py-2 mt-20">
          Hubungi Kami
        </button>
      </div>
      <div className="w-full max-w-md h-64 relative">
        <Image
          src="/home/mainPhoto.png"
          alt="Home Illustration"
          className="rounded-3xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Section1;
