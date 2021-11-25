import Head from "next/head";
import Navbar from "../components/global/navbar";
import Section1 from "../components/pages/home/section1";
import Section2 from "../components/pages/home/section2";
import Section3 from "../components/pages/home/section3";
import Seo from "../components/seo";

const Home = () => {
  return (
    <>
      <Seo />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default Home;
