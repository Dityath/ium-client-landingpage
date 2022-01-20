import React from "react";
import SubTitle from "../../../global/title/subTitle";

const Section4 = () => {
  return (
    <section className="mt-20 w-full max-w-6xl mx-auto font-lato">
      <SubTitle>Fasilitas</SubTitle>
      <div className="flex mt-10 justify-center gap-10">
        <ul className=" max-w-sm flex flex-col gap-5">
          <li>Terdiri dari 3 ruangan dan 1 kamar mandi</li>
          <li>Lantai dan dinding kamar mandi sudah dikeramik</li>
          <li>Dinding sink dan dapur dikeramik</li>
        </ul>
        <ul className=" max-w-sm flex flex-col gap-5">
          <li>Terdiri dari 3 ruangan dan 1 kamar mandi</li>
          <li>Keamanan terjamin, pagar tinggi</li>
          <li>Listrik token PLN 1200va</li>
          <li>Air sumur sudah difilter, bisa dimasak dan minum</li>
        </ul>
        <ul className=" max-w-sm flex flex-col gap-5">
          <li>Terdapat tempat cuci piring</li>
          <li>
            Dipinjamkan meja kompor sekaligus rak piring, rak jemuran, dan
            tempat sampah besar
          </li>
          <li>Harga sewa sudah termasuk iuran keamanan dan kebersihan</li>
        </ul>
      </div>
    </section>
  );
};

export default Section4;
