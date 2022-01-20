import React from "react";
import MainTitle from "../../../global/title/mainTitle";
import Step from "../component/step";

const Section1 = () => {
  return (
    <section className="pt-40 w-full max-w-6xl mx-auto font-lato">
      <MainTitle>Tahap Pendaftaran</MainTitle>
      <Step className="mt-20" stepNumber={0} />
    </section>
  );
};

export default Section1;
