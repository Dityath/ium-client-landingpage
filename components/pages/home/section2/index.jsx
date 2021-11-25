import React from "react";
import ContainerUnggul from "../../../global/container/containerUnggul";
import SubTitle from "../../../global/title/subTitle";
import { container } from "./container";

const Section2 = () => {
  return (
    <section className="mt-16 w-full max-w-6xl mx-auto font-lato">
      <SubTitle>keunggulan</SubTitle>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {container.map((contain) => (
          <ContainerUnggul
            key={contain.title}
            title={contain.title}
            desc={contain.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Section2;
