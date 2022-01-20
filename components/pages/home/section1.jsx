import React from "react";
import Image from "next/image";
import MainTitle from "../../global/title/mainTitle";
import Button from "../../global/button";

const Section1 = () => {
  return (
    <section className="pt-40 w-full max-w-6xl mx-auto flex justify-between font-lato">
      <div>
        <h1 className="text-3xl"></h1>
        <MainTitle>Rumah Petak Sewa Nurul Qolbi</MainTitle>
        <p className="mt-5 max-w-lg">
          Rumah petak sewa yang cocok bagi pekerja ataupun keluarga yang
          menginginkan tempat tinggal sementara di Bekasi, Tambun. Tenang dan
          nyaman, juga penuh dengan fasilitas yang dibutuhkan.
        </p>
        <Button className="mt-20 uppercase">Hubungi Kami</Button>
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
