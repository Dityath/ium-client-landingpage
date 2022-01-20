import React from "react";
import ContainerLog from "../../../global/container/containerLog";
import SubTitle from "../../../global/title/subTitle";
import Slider from "react-slick";
import { container } from "./container";

const Section3 = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section id="katalog" className="mt-16 w-full max-w-6xl mx-auto font-lato">
      <SubTitle>katalog</SubTitle>
      <div className="my-10">
        <Slider {...settings}>
          {container.map((contain) => (
            <div key={contain.ukuran}>
              <ContainerLog
                image={contain.image}
                ukuran={contain.ukuran}
                harga={contain.harga}
                ac={contain.ac}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Section3;
